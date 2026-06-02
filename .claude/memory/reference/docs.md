---
name: ドキュメント所在地マップ
description: プロジェクト全体のドキュメント所在地、更新状況、参照関係
type: reference
---

# ドキュメント所在地マップ

## コンテキストエンジニアリング 5層

### Layer 1: 決定記録（ADR）
📁 `adr/`

| ドキュメント | 内容 | 状態 | 最終確認 |
|------------|------|------|---------|
| `adr/README.md` | ADR 索引・概要 | ✅ | 2026-05-20 |
| `adr/ADR-001-typescript-strict-mode.md` | TypeScript strict モード採用 | ✅ | 2026-05-20 |
| `adr/ADR-002-feature-based-layered-architecture.md` | フィーチャーベースアーキテクチャ | ✅ | 2026-05-20 |
| `adr/ADR-003-signal-noise-design-system.md` | Signal/Noise デザイン採用 | ✅ | 2026-05-20 |
| `adr/ADR-004-semantic-html-requirement.md` | セマンティック HTML 必須化 | ✅ | 2026-05-20 |
| `adr/ADR-005-tailwind-css-styling.md` | Tailwind CSS スタイリング | ✅ | 2026-05-20 |

### Layer 2: メモリシステム
📁 `docs/memory/`

| ドキュメント | 内容 | 更新頻度 |
|------------|------|---------|
| `MEMORY.md` | インデックス | Per session |
| `user/expertise.md` | ユーザー背景・スキル | 少頻繁（変更時） |
| `feedback/pitfalls.md` | 失敗・制約・学習 | Per session |
| `feedback/patterns.md` | 成功パターン・推奨方法 | Per session |
| `project/goals.md` | 目標・マイルストーン | 月次 |
| `project/constraints.md` | 設計制約・決定ログ | Per feature |
| `reference/tools.md` | ツール・リソース | 低頻度（新ツール時） |
| `reference/docs.md` | ドキュメントマップ | Per session |

### Layer 3: タスク定義
📌 GitHub Issues / TaskCreate（セッション内）

- 実装中のタスクを TaskCreate で管理
- 完了・確認後に Task を更新

### Layer 4: コード埋め込み
📝 ソースコード内コメント

- `// Why: ...` パターンで意図を説明
- ADR / 参考資料への参照を含める

### Layer 5: ナラティブレイヤー
📘 `CLAUDE.md`

- プロジェクト全体の概要・原則
- コンテキストエンジニアリングの説明
- 更新頻度：低（月単位）

---

## システムコンテキスト

### Architecture & Tech Stack
📁 `docs/architecture.md`

- フロントエンドアーキテクチャ
- テックスタック詳細
- ビルド・デプロイ設定

### Design & UX/UI
📁 `docs/design.md`

- Signal/Noise デザイン原則
- デザイントークン（色、タイポ、スペーシング）
- コンポーネント設計
- アクセシビリティ要件

---

## ドキュメント参照関係

```
CLAUDE.md (ナラティブ)
├─ adr/README.md (決定記録)
│  ├─ ADR-001～005
│  └─ docs/design.md 参照
│
├─ docs/architecture.md (システムコンテキスト)
│  └─ ADR-002 参照
│
├─ docs/design.md (デザインコンテキスト)
│  ├─ ADR-003（Signal/Noise）参照
│  ├─ ADR-004（セマンティック HTML）参照
│  └─ ADR-005（Tailwind）参照
│
└─ docs/memory/ (メモリシステム)
   ├─ user/expertise.md
   ├─ feedback/pitfalls.md
   ├─ feedback/patterns.md
   ├─ project/goals.md
   ├─ project/constraints.md
   ├─ reference/tools.md
   └─ reference/docs.md (このファイル)
```

---

**最後確認:** 2026-05-20  
**このドキュメントは各セッション時に更新確認すること**
