# ADR-006: Next.js App Router 流儀のアーキテクチャへ再設計

## Status

Accepted (2026-07-11)

Supersedes [ADR-002](./ADR-002-feature-based-layered-architecture.md)

実装状況: Phase 1–6 を実施し、全ルートを `app/[lang]/` のロケールルーティングへ移行、`src/shared/` を撤去、i18n を URL 駆動に是正した。`src/features/*/{ui,data,types}` は RSC ページから再利用中で物理的に残存しており、`content/`・`app/**/_components/` への完全移設は後続作業とする（詳細は [docs/refactoring_20260711.md](../docs/refactoring_20260711.md)）。

## Context

現行アーキテクチャは Feature-Sliced Design（FSD）に基づき、`src/features/*/{ui,model,data,types}` と `src/shared/*` でレイヤリングしている（ADR-002）。運用の結果、以下の問題が顕在化した。

**課題**:

- **Next.js の流儀と乖離**: `features/` `shared/` `model/` `data/` はフレームワーク非依存の FSD 語彙であり、Next.js App Router 文化（ルート近接コロケーション、`components/` + `lib/`、Server Component 優先）と一致しない。
- **依存方向ルールの違反**: 「`app → features → shared`、上方向 import 禁止」と定めながら、`src/shared/utils/uiuxUtils.ts` が `@/features/uiux/data` を import している（`shared → features` の逆流）。
- **i18n の状態管理が破綻**: `src/shared/hooks/useLanguage.ts` がローカル `useState` のみで、Context もルーティングも持たない。コンポーネントごとに独立した言語状態を持ち、切替が伝播しない。
- **SSOT の分裂**: 履歴書コンテンツの正規ソースが `resume.yml`（ルート）・`src/data/resume.yaml`・`src/features/*/data/*Data.ts` の3系統に分裂。`loadResume.ts` は実質デッドコード。
- **過剰なレイヤリング**: 静的コンテンツサイトに対し 4層 × feature の構造は重厚すぎる。`SoftwareStyles.tsx`（`return null`）や空の `shared/components/index.ts` など、層を埋めるためのデッドコードが発生。
- **ルートの重複**: `software/{ecommerce,jma-systems,techdoctor}/page.tsx` と `uiux/{achievy,six-acres}/page.tsx` が同型のボイラープレートを反復。動的ルートで集約できていない。
- **RSC 未活用**: `output: 'export'` の静的サイトでありながら全ページ `'use client'`。Server Component の利点を捨てている。

**選択肢**:

1. 現行 FSD を維持し、ルール違反箇所のみ個別修正する
2. FSD を保ちつつ `shared → features` 逆流だけ解消する
3. Next.js App Router 流儀へ再設計する（`features`/`shared` を廃止、ルートコロケーション + `components`/`lib`/`content`、ロケールルーティング）

## Decision

**選択肢 3 を採用。Next.js App Router の流儀に沿ってアーキテクチャを再設計する。**

### 目標ディレクトリ構造

```
src/
  app/
    [locale]/                  # /en /ja のロケールルーティング
      layout.tsx  page.tsx
      contact/page.tsx
      software/
        page.tsx
        [slug]/page.tsx        # ecommerce / jma-systems / techdoctor を集約
        _components/           # software ルート専用コンポーネント（コロケーション）
      uiux/
        page.tsx
        [slug]/page.tsx        # achievy / six-acres を集約
        _components/
    globals.css
  components/                  # 横断再利用 UI（原則 Server Component）
    language-switcher.tsx      # 数少ない 'use client'
  content/                     # コンテンツの単一ソース（型付き）
    software/*.ts  uiux/*.ts  resume.ts
  lib/                         # i18n / フォーマッタ / データローダ
  types/                       # 横断型（原則は各所コロケーション）
```

### 原則

- **`features/` と `shared/` を廃止**。再利用 UI は `components/`、ロジック/ユーティリティは `lib/`、コンテンツは `content/` に置く。
- **Server Component をデフォルト**とし、`'use client'` はインタラクティブな葉（LanguageSwitcher 等）に限定する。
- **ルート専用のコンポーネントは当該ルート配下に `_components/` でコロケーション**する（横断利用が生じた時点で `components/` へ昇格）。
- **i18n は `/en` `/ja` のロケールルーティング**（`app/[locale]/`）で実装。`output: 'export'` と `generateStaticParams` で静的書き出しする。
- **重複ルートは `[slug]` 動的ルートに集約**する。
- **コンテンツの正規ソースを1つに統一**する（SSOT）。

### 段階移行

意思決定を本 ADR に残したうえで、リスクを抑えるためルート単位で PR を分割して移行する。

1. **基盤**: `app/[locale]/` 骨組み、`lib/i18n`、`components/`・`content/` の器を用意（本 ADR とは別 PR）
2. **home** ルート移行
3. **software** ルート移行（`[slug]` 集約含む）
4. **uiux** ルート移行（`[slug]` 集約含む）
5. **contact** ルート移行
6. **後始末**: `features/` `shared/` `src/data` の残骸・デッドコード削除、CLAUDE.md のレイヤー記述更新

各段階で `mise run lint` / `type-check` / `build` を通す。

## Consequences

### ✅ メリット

- **Next.js 標準に整合**: App Router のコロケーション・RSC・ロケールルーティングに沿い、学習コスト・保守性が向上
- **依存方向の問題が消える**: `shared`/`features` を廃止するため逆流 import が構造的に発生しない
- **i18n が正しく機能**: URL にロケールを持たせ状態を一元化。SEO にも有利
- **重複削減**: 動的ルート集約でボイラープレートが減る
- **パフォーマンス**: Server Component 化でクライアント JS が減る
- **SSOT 回復**: コンテンツソースを1つに統一

### ❌ デメリット

- **移行コスト**: 既存 80 ファイル規模の再配置・書き換えが必要
- **一時的な二重構造**: 段階移行中は新旧が併存し、レビュー負荷が生じる
- **URL 変更**: 言語ルーティング導入で URL 体系が変わる（既存リンク・SEO の一時的影響）
- **ADR-002 の無効化**: 既存の設計前提が変わり、関連ドキュメントの更新が必要

## Rationale

ベストプラクティスとは「規模に合った最小構造 + ルールの徹底」である。現行は構造が重厚な一方でルール（依存方向・SSOT）が破れており、両面で最適から外れている。静的ポートフォリオという規模に対しては、FSD の抽象より Next.js 流儀のコロケーションの方が単純で、フレームワークの機能（RSC・ロケールルーティング）を活かせる。移行は段階化してリスクを抑える。

## Related

- Supersedes: ADR-002（フィーチャーベース + レイヤード アーキテクチャ）
- 参照: CLAUDE.md「システムコンテキスト」「5つの実装レイヤー」（本決定に合わせ更新予定）
- 関連: ADR-003（デザインシステム）・ADR-005（Tailwind）は継続有効

## Alternatives Considered

### 1. 現行 FSD 維持 + 個別修正（採用せず）

**メリット**: 変更範囲が最小。移行コストが低い。

**却下理由**: Next.js の流儀との乖離という根本問題が残る。過剰レイヤリングも解消しない。

### 2. FSD 維持 + 逆流 import のみ解消（採用せず）

**メリット**: 依存方向違反は消える。

**却下理由**: i18n 破綻・SSOT 分裂・RSC 未活用は未解決のまま。対症療法にとどまる。
