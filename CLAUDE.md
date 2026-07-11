# Portfolio — 開発ガイド

**目的**: このコードベースの構造・技術・規約をまとめた実用ガイド。設計判断の理由は [docs/design-decisions.md](./docs/design-decisions.md)、デザインシステムは [docs/design.md](./docs/design.md) を参照。

---

## 技術スタック

| 項目 | 技術 |
| ---- | ---- |
| フレームワーク | Next.js App Router（`output: 'export'` で静的書き出し） |
| 言語 | TypeScript（`strict: true`） |
| UI | React 19 |
| スタイリング | Tailwind CSS |
| テスト | Vitest（ユニット）/ Playwright（E2E） |
| ツール管理 | mise |

---

## ディレクトリ構造

```text
src/
├── app/
│   ├── layout.tsx              # ルート layout（<html>）
│   ├── page.tsx                # / → /en リダイレクト
│   ├── globals.css
│   └── [lang]/                 # /en /ja ロケールルーティング
│       ├── page.tsx            # home
│       ├── software/{page,[slug]/page}.tsx
│       ├── uiux/{page,[slug]/page}.tsx
│       └── contact/{page,_contact-content}.tsx
├── components/                 # 横断再利用 UI（header/footer/language-switcher）
├── content/                    # 型付きコンテンツ + slug マップ + dictionaries
└── lib/                        # i18n（isLocale/getDictionary）・hooks（useReveal）
```

> `features/*` は旧構造の残存（UI セクション・data・types を RSC ページから再利用中）。将来的に `_components/`・`content/` へ移設予定。

---

## 規約

- **ロケール**: URL セグメント `app/[lang]`（`/en` `/ja`）。`lib/i18n` の `locales`/`isLocale`/`getDictionary` が単一ソース。`/` はデフォルトロケールへリダイレクト。
- **レンダリング**: Server Component 既定。`'use client'` はインタラクティブな葉（言語切替・`useReveal` を使う節など）に限定。
- **セマンティック HTML**: 意味があればセマンティック要素、意味がなくスタイル目的だけなら `<div>`/`<span>`（詳細は design-decisions）。
- **インポート方向**: `app → components → lib`。上方向・逆流 import を禁止。
- **コメント**: "何" ではなく "なぜ" を書く。

---

## 開発フロー

- `main` への直接 push は禁止。トピックブランチを切り PR 経由でマージ（forge の共通ルールに従う）。
- 主なコマンド:

```bash
mise run dev          # 開発サーバー（:3000）
mise run build        # 本番ビルド（静的書き出し）
mise run lint         # ESLint
mise run type-check   # tsc --noEmit
mise run test         # Vitest（ユニット）
mise run e2e          # Playwright（E2E）
```
