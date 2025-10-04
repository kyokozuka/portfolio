# i18n Setup

## 概要
このプロジェクトのi18n（国際化）設定です。

## ディレクトリ構造
```
src/
├── i18n/              # 翻訳ファイル
│   ├── en.json        # 英語翻訳
│   └── ja.json        # 日本語翻訳
├── lib/i18n/          # i18n設定とユーティリティ
│   ├── config.ts      # i18n設定
│   ├── useTranslations.ts  # カスタムフック
│   └── index.ts       # バレルエクスポート
└── types/
    └── i18n.ts        # 型定義
```

## 使用方法

### 基本的な使い方

```tsx
'use client';

import { useTranslations } from '@/lib/i18n';

export default function MyComponent() {
  const { locale, setLocale, t } = useTranslations('en');

  if (!t) return null;

  return (
    <article>
      <header>
        <h1>{t.home.title}</h1>
        <h2>{t.home.subtitle}</h2>
      </header>
      <p>{t.home.description}</p>

      <button onClick={() => setLocale(locale === 'en' ? 'ja' : 'en')}>
        Switch Language
      </button>
    </article>
  );
}
```

### 型安全な使用

```tsx
import { HomeTranslations } from '@/types/i18n';

// 型推論が効く
const achievements: HomeTranslations['achievements'] = t.home.achievements;
```

## 翻訳の追加方法

1. `src/i18n/en.json` と `src/i18n/ja.json` に新しいキーを追加
2. `src/types/i18n.ts` に対応する型定義を追加
3. コンポーネントで `t.yourNewKey` としてアクセス

## 注意事項

- 翻訳ファイルはJSON形式で管理
- すべてのロケールで同じキー構造を維持
- 型定義を必ず更新すること
