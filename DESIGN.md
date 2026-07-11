# Portfolio Project — デザインガイド

**最終更新**: 2026-07-11
**目的**: 本プロジェクトのデザインに関する**唯一の正規ソース**。デザイン原則・デザインシステム・トークン・UX/UI パターン・セマンティックHTML/アクセシビリティを集約する。

## デザイン決定（サマリ）

| 決定 | 要点 |
| ---- | ---- |
| Signal/Noise デザインシステム | 重要情報を強調（Signal）・不要要素を抑制（Noise）。詳細は下記 |
| スタイリング = Tailwind CSS | ユーティリティファースト。デザイントークンは `src/app/globals.css` の `@theme` で一元管理 |
| セマンティックHTML必須 | 意味は要素で表す。`<div>` は非意味レイアウトのみ（下記「セマンティックHTML」） |

> 実装のデザイントークン（色・フォント）は `src/app/globals.css`（Tailwind v4 `@theme`）が正。本書は仕様、globals.css は実装。

---

## デザインシステム: Signal/Noise

Signal/Noise デザインシステムに基づいて、ポートフォリオの視覚的・操作的な一貫性を保ちます。

### デザイン原則

| 原則 | 説明 |
|-----|------|
| **Signal（信号）** | ユーザーにとって重要な情報を強調。視覚的ハイライト、色、サイズで優先度を表現。 |
| **Noise（ノイズ）** | 不要な視覚的要素を最小化。余白、グレースケール、透明度を活用して背景化。 |
| **階層性** | 情報を明確な優先度で配置。見出し、セクション、リスト構造で視覚的階層を実現。 |
| **一貫性** | 全ページ・全コンポーネントで同じパターンを再利用。デザイントークンで標準化。 |

---

## デザイントークン

### 色パレット

```
Primary (Signal)
  - Brand Color: #[TBD]
  - Usage: CTA, highlights, key information

Secondary (Signal Accent)
  - Accent Color: #[TBD]
  - Usage: Links, secondary actions

Neutral (Noise)
  - White: #FFFFFF
  - Gray-50: #F9FAFB
  - Gray-100: #F3F4F6
  - Gray-500: #6B7280（本文）
  - Gray-900: #111827（見出し）
  - Black: #000000

Semantic
  - Error: #DC2626
  - Success: #16A34A
  - Warning: #F59E0B
  - Info: #0284C7
```

### タイポグラフィ

```
Font Stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif

Heading Sizes
  - h1: 48px (2.5rem), weight: 700, line-height: 1.2
  - h2: 36px (2rem), weight: 700, line-height: 1.3
  - h3: 24px (1.5rem), weight: 600, line-height: 1.4
  - h4: 20px (1.25rem), weight: 600, line-height: 1.4

Body Sizes
  - Large: 18px (1.125rem), weight: 400, line-height: 1.6
  - Regular: 16px (1rem), weight: 400, line-height: 1.6
  - Small: 14px (0.875rem), weight: 400, line-height: 1.5

Code
  - Font: 'Monaco', 'Menlo', 'Courier New', monospace
  - Size: 14px (0.875rem)
  - Line-height: 1.5
```

### スペーシング

8px ベースの標準スケール。Tailwind spacing に準拠。

```
xs: 4px (0.25rem)
sm: 8px (0.5rem)
md: 16px (1rem)
lg: 24px (1.5rem)
xl: 32px (2rem)
2xl: 48px (3rem)
3xl: 64px (4rem)
```

使用例：
- セクション間：3xl (64px)
- コンポーネント間：2xl (48px)
- コンポーネント内部：lg (24px)
- 小要素間：md (16px)

---

## セマンティックHTML と アクセシビリティ

常にセマンティックHTMLを使用。ジェネリック`<div>`ラッパーの代わりに。

### 必須要素

| コンテキスト | 使用要素 |
|-----------|---------|
| ページレベルのナビゲーション | `<header>`, `<nav>`, `<footer>` |
| メインコンテンツ領域 | `<main>` |
| テーマセクション | `<section aria-labelledby="...">` |
| 自己完結コンテンツ | `<article>` |
| 補完的コンテンツ | `<aside>` |
| スキル/プロジェクトリスト | `<ul>` + `<li>` |
| キーバリューペア（スキル、メタデータ） | `<dl>` + `<dt>` + `<dd>` |
| キャプション付き画像 | `<figure>` + `<figcaption>` |
| 日付と時刻 | `<time datetime="...">` |
| 連絡先情報 | `<address>` |
| アクション（ボタン） | `<button type="button">` |
| ナビゲーションリンク | `<a>` |

### `<div>` / `<span>` の許容用途

`<div>` / `<span>` は「非モダン」ではなく、**意味を持たない純粋なレイアウト・装飾のまとまり**には正しく使う。原則は次の一文に集約する。

> **意味があればセマンティック要素、意味がなくスタイル目的だけなら `<div>` / `<span>`。**

- ✅ 許容: グリッド/フレックスのラッパー、余白・境界のボックス、アニメーション用ラッパー、インライン装飾スパン。
- ❌ 非許容: `section` / `article` / `nav` 等で表せる箇所を `<div>` で代替すること（div スープ）。
- 💡 不要な中間ラッパーは **React Fragment（`<>...</>`）** に置き換え、要素数を増やさない。

### ページ構造の例

```tsx
<body>
  <header>
    <nav aria-label="Main navigation">
      {/* Navigation items */}
    </nav>
  </header>
  
  <main>
    <section aria-labelledby="hero-heading">
      <h1 id="hero-heading">Portfolio Title</h1>
      {/* Hero content */}
    </section>
    
    <section aria-labelledby="projects-heading">
      <h2 id="projects-heading">Featured Projects</h2>
      <ul>
        <li><article>{/* Project card */}</article></li>
      </ul>
    </section>
  </main>
  
  <footer>
    {/* Footer content */}
  </footer>
</body>
```

### 見出し階層

- `<h1>`: ページあたり1つ、主要なページタイトル
- `<h2>`: 主要セクション（Hero、Experience、Projects、Skills、Contact）
- `<h3>`: セクション内のアイテム（個別プロジェクトタイトル、職務経歴）
- `<h4>` 以下: 本当に必要な場合のみサブアイテム

**ルール**: 見出しレベルをスキップしない。`<h1>` の次は `<h2>`。

### アクセシビリティチェックリスト

- [ ] **見出し階層**: `<h1>` が1つ、レベルがスキップされていない
- [ ] **ARIA ラベル**: セクションに `aria-labelledby` がある
- [ ] **色コントラスト**: WCAG AA 以上（4.5:1 見出し、3:1 本文）
- [ ] **キーボードナビゲーション**: Tab キーで全インタラクティブ要素に到達可能
- [ ] **alt テキスト**: 全画像に `alt` 属性がある
- [ ] **フォーカス表示**: `:focus` スタイルが明確に見える
- [ ] **リンクテキスト**: 「クリック」「ここ」ではなく説明的

---

## コンポーネント設計パターン

### 再利用可能なコンポーネント

各コンポーネントはセマンティックHTML と Signal/Noise 原則に従って設計。

**例: ProjectCard コンポーネント**

```tsx
<article>
  <h3>Project Title</h3>
  <p>Description with context</p>
  <dl>
    <dt>Tech Stack</dt>
    <dd>React, TypeScript, Tailwind</dd>
    <dt>Duration</dt>
    <dd><time datetime="2024-01">Jan 2024</time> – <time datetime="2024-06">Jun 2024</time></dd>
  </dl>
  <a href="/projects/[id]">View Project →</a>
</article>
```

### Signal/Noise の適用

```
Signal（強調）:
  - プロジェクトのタイトル: h3, gray-900
  - CTA ボタン: Primary color, font-weight: 600

Noise（背景化）:
  - メタデータ（日付、タグ）: gray-500, smaller font
  - 説明文の補助情報: gray-400, lighter weight
```

---

## モバイル・レスポンシブ設計

Tailwind CSS のブレークポイントに基づいて設計。

```
sm: 640px     - スマートフォン横向き
md: 768px     - タブレット
lg: 1024px    - ノートパソコン
xl: 1280px    - デスクトップ
2xl: 1536px   - 大画面
```

### モバイルファースト アプローチ

1. **モバイル（< 640px）**: シングルカラム、タッチ友好的
2. **タブレット（640px～）**: 2 カラム、余白増加
3. **デスクトップ（1024px～）**: 3+ カラム、詳細レイアウト

### タッチ対象のサイズ要件

- **最小タッチターゲット**: 44px × 44px（推奨）
- **ボタンパディング**: 12px 16px 以上
- **リンク**: 24px × 24px 以上

---

## ダークモード対応

Signal/Noise 原則をダークモードにも適用。

```
Light Mode
  - Background: white (#FFFFFF)
  - Text (Signal): gray-900 (#111827)
  - Text (Noise): gray-500 (#6B7280)
  - Accent: primary color

Dark Mode
  - Background: gray-900 (#111827)
  - Text (Signal): white (#FFFFFF)
  - Text (Noise): gray-400 (#9CA3AF)
  - Accent: lighter primary color
```

Tailwind の `dark:` クラスで実装。

---

## パフォーマンス・最適化

### 画像最適化

- **Next.js Image コンポーネント** を使用
- WebP フォーマット自動生成
- レスポンシブ画像: srcSet 自動生成
- Lazy loading: `loading="lazy"`

### 文字間隔・読みやすさ

- **行の高さ**: 1.6（本文）、1.2-1.4（見出し）
- **最大行幅**: 65-75 文字（読みやすさ）
- **letter-spacing**: -0.02em（見出し）、0（本文）

---

## デザイン検証・テスト

### Lighthouse スコア目標

| 指標 | 目標 |
|-----|------|
| Performance | 90+ |
| Accessibility | 95+ |
| Best Practices | 95+ |
| SEO | 95+ |

### ビジュアルテスト

- ローカルで複数ブラウザで動作確認（Chrome, Safari, Firefox）
- モバイルデバイスで手動テスト
- スクリーンリーダー（VoiceOver, NVDA）で確認
