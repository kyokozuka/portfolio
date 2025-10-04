# About
これはポートフォリオで、静的HTMLのみでバックエンドはありません。

# Directory Design

```
src/
├─ app/                         # 画面構成（App Router）
│  ├─ (app)/...                 # 機能ごとのルーティング領域
│  ├─ (app)/protected/layout.tsx# ← ここで AuthGuard を適用
│  └─ [locale]/layout.tsx       # next-intl Provider
│
├─ features/                    # 機能単位で自己完結
│  └─ auth/
│     ├─ components/AuthGuard.tsx
│     ├─ hooks/useAuth.ts
│     ├─ services/authService.ts   # ← あなたの authService はここ
│     └─ types.ts
│  └─ tasks/ ...                # 以降も同パターン
│
├─ lib/                         # 横断インフラ（外部接続/初期化/薄いラッパ）
│  └─ i18n/config.ts
│
├─ components/                  # 見た目の共有（機能非依存）
│  ├─ atoms/
│  ├─ molecules/
│  ├─ organisms/
│  ├─ ui/
│  └─pages
│
├─ hooks/                       # 汎用（機能非依存）
│  ├─ useBreakpoint.ts
│  └─ useToggle.ts
│
├─ i18n/
│  ├─ ja.json
│  └─ en.json
│
├─ types/                       # 共通型（機能横断）
│  └─ global.d.ts
│
├─ utils/                       # 純関数ユーティリティ
│  ├─ formatDate.ts / validators.ts / clsx.ts など
│  └─ index.ts
└─ tests/
```

- Atomic Design に遵守する。

# UI / UX
- デザインは、モダンなものにして、落ち着きのあるものにすること
- デザインは、プロジェクトにそうものにすること
- アクセシビリティは、AA以上にすること
- パフォーマンスは、最適化すること

# Constraints
- 堅牢なものを実装すること
- 保守性が高いものを実装すること
- エラーが起きないようにすること
- コードは、読みやすく、保守しやすいものにすること
- コードは、DRYなものにすること