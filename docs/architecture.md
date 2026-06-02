# Portfolio Project — アーキテクチャドキュメント

**最終更新**: 2026-05-20  
**目的**: このドキュメントはシステムコンテキストとして、プロジェクトの技術的な詳細（スタック、パターン、慣例）を定義します。

---

## フロントエンドアーキテクチャ: フィーチャーベース + レイヤード設計

### ディレクトリ構造

```
src/
├── app/                        # Next.js App Router（薄いルーティング層のみ）
│   ├── layout.tsx
│   ├── page.tsx
│   ├── software/
│   ├── uiux/
│   └── contact/
│
├── features/                   # フィーチャーベースモジュール
│   ├── home/
│   │   ├── ui/                 # UIレイヤー: React コンポーネント
│   │   ├── model/              # ロジックレイヤー: カスタムフック
│   │   ├── data/               # データレイヤー: コンテンツ、定数
│   │   └── README.md           # ドメインコンテキスト
│   ├── software/
│   │   ├── ui/
│   │   ├── model/
│   │   ├── data/
│   │   ├── types/
│   │   └── README.md
│   ├── uiux/
│   │   ├── ui/
│   │   ├── model/
│   │   ├── data/
│   │   ├── types/
│   │   └── README.md
│   └── contact/
│       ├── ui/
│       ├── model/
│       ├── data/
│       ├── types/
│       └── README.md
│
└── shared/                     # 真に再利用可能なコード
    ├── ui/                     # Header, Footer, LanguageSwitcher など
    ├── data/                   # siteConfig, constants, particles
    ├── hooks/
    ├── types/
    └── utils/
```

### レイヤーの責務

| レイヤー | ディレクトリ | 責務 |
|--------|-----------|------|
| UI | `ui/` | React コンポーネント（プレゼンテーション + コンテナ） |
| ロジック | `model/` | カスタムフック、状態管理、副作用 |
| データ | `data/` | コンテンツオブジェクト、API データ、定数 |
| 型 | `types/` | TypeScript インターフェース、型定義 |

### アーキテクチャルール

**1. `app/` は薄いルーティング層のみ**
- ページは `features/` からインポートしてレイアウトを合成
- ビジネスロジックやインラインコンテンツは配置しない
- 例外: 複数フィーチャーをまたぐレイアウト（Header, Footer）のみ

**2. フィーチャーは自己完結**
- フィーチャーが独自の ui, model, data, types を所有
- フィーチャー間クロスインポート禁止
- 共有コードは `shared/` に移動

**3. `shared/` は本当に再利用可能なコードのみ**
- 2つ以上のフィーチャーで使用される場合のみ
- 先制的な移動はしない
- 使用場所が明確になってから移動

**4. 各レイヤーにバレルエクスポート**
- `index.ts` で公開API を定義
- クリーンなインポート: `import { HeroSection } from '@/features/software/ui'`

**5. インポート方向**
```
app/ 
  ↓ (imports)
features/
  ↓ (imports)
shared/
```
決して上方向にインポートしない。

---

## デザイン・UX/UI

セマンティックHTML、デザインシステム、アクセシビリティは **`docs/design.md`** を参照。

主な特徴：
- **デザインシステム**: Signal/Noise（重要情報と背景情報の分離）
- **セマンティックHTML**: アクセシビリティ重視の実装
- **レスポンシブ設計**: モバイルファースト アプローチ

---

## インポートパスエイリアス

```ts
'@/features/software/ui'    // software UIコンポーネント
'@/features/software/model' // software フック
'@/features/software/data'  // software コンテンツ
'@/features/uiux/ui'
'@/features/contact/ui'
'@/shared/ui'               // Header, Footer, LanguageSwitcher
'@/shared/data'             // siteConfig, constants
'@/shared/utils'
```

---

## テック スタック

| 層 | 技術 | バージョン | 理由 |
|---|-----|---------|-----|
| フレームワーク | Next.js | 14+ | SSR、API Routes、App Router |
| 言語 | TypeScript | 5.0+ | 型安全性、開発体験 |
| スタイリング | Tailwind CSS | 3.0+ | ユーティリティファースト、保守性 |
| コンポーネント | React | 18+ | UIの基本、フック対応 |
| パッケージマネージャー | npm / pnpm | - | 依存関係管理 |

---

## パフォーマンス要件

| 指標 | 目標値 | ツール |
|-----|--------|--------|
| Lighthouse Performance | 90+ | Vercel Analytics |
| First Contentful Paint (FCP) | < 1.5s | Chrome DevTools |
| Largest Contentful Paint (LCP) | < 2.5s | Chrome DevTools |
| Cumulative Layout Shift (CLS) | < 0.1 | Chrome DevTools |

---

## ビルド・デプロイ

| ステップ | コマンド | 説明 |
|---------|--------|------|
| インストール | `npm install` | 依存関係のインストール |
| 開発サーバー | `npm run dev` | ローカル開発（ポート3000） |
| ビルド | `npm run build` | 本番用ビルド |
| 本番実行 | `npm run start` | ビルト済みアプリの実行 |
| Lint | `npm run lint` | ESLint実行 |
| 型チェック | `npm run type-check` | TypeScript型チェック |
