# ADR-005: Tailwind CSS によるスタイリング

## Status
Accepted (2026-05-20)

## Context

ポートフォリオプロジェクトの CSS スタイリングアプローチを決定する際、複数の選択肢を検討しました。

**課題**:
- デザイントークンの一貫性を保つ
- CSS in JS か CSS ファイルか
- ユーティリティスタイル vs BEM + SCSS の 2 者択一
- チーム開発での命名規則の統一

**選択肢**:
1. Tailwind CSS（ユーティリティファースト）
2. CSS Modules + SCSS
3. CSS in JS（styled-components, Emotion）

## Decision

**Tailwind CSS v3+ を採用。**

ユーティリティファースト CSS アプローチにより、デザイントークンを一貫して管理し、迅速な開発と保守性を実現します。

### 実装方針

- **プリセット定義**: `tailwind.config.js` で色、フォント、スペーシングを統一
- **カスタムクラス制限**: `@apply` での抽象化は最小限（コンポーネントレベルのみ）
- **Dark Mode**: `dark:` プレフィックスで対応
- **レスポンシブ**: `sm:`, `md:`, `lg:` など ブレークポイント活用

## Consequences

### ✅ メリット

- **トークン一貫性**: 色・フォント・間隔が `tailwind.config.js` で集中管理
- **開発速度**: クラス名を学習するだけで大幅な効率化
- **CSS ファイルサイズ**: 本番で PurgeCSS により未使用クラスを削除
- **保守性**: デザイン変更が設定変更のみで完了
- **チーム統一**: 命名規則がツールにより統一化

### ❌ デメリット

- **HTML の冗長化**: `class` 属性にユーティリティクラスが多数記載される
- **学習曲線**: Tailwind の全クラスを覚える必要がある（ただし検索サポートあり）
- **拡張性制約**: 複雑なカスタムスタイルは `@apply` か Custom CSS が必要
- **プリセット固定化**: 後からのトークン変更が困難

## Rationale

Signal/Noise デザインシステムの色・フォント・スペーシングを Tailwind トークンで管理することで、設計とコード実装が一体化します。

開発速度向上 > HTML 冗長化の課題。

## Related

- 参照: `docs/design.md`「デザイントークン」
- 関連: ADR-003（Signal/Noise トークン定義）、ADR-002（レイヤーアーキテクチャ）

## Alternatives Considered

### 1. CSS Modules + SCSS（採用せず）

**メリット**: 
- BEM 命名で構造的
- SCSS の変数・mixin で再利用性高い

**デメリット**: 
- ファイル数が増加（CSS ファイルと TSX ファイルを並列管理）
- トークン定義が SCSS 変数と config に分散
- 色変更が複数ファイルに波及

**決定理由**: トークン管理の一元化が Tailwind で実現可能。

### 2. CSS in JS（styled-components など）（採用せず）

**メリット**: 
- 動的スタイルが容易
- コンポーネント内で完結

**デメリット**: 
- Runtime オーバーヘッド
- SSR 対応が複雑
- Next.js App Router との相性問題

**決定理由**: Next.js App Router での Tailwind サポートが堅牢。

## Implementation

- **実装期限**: 2026-05-20 ～
- **段階**:
  1. `tailwind.config.js` に Signal/Noise トークンを定義
  2. コンポーネント実装時に Tailwind クラスを活用
  3. ダークモード対応（`dark:` プレフィックス）
  4. レスポンシブ対応（`sm:`, `md:` など）

- **参考**: `docs/design.md`「デザイントークン」

---

**ドキュメント作成者**: kento yokozuka  
**最後の確認**: 2026-05-20
