# Architecture Decision Records (ADR)

ポートフォリオプロジェクトの重要なアーキテクチャ決定を記録します。

## ADR Index

| ID | Title | Status | Date |
|----|----|--------|------|
| [ADR-001](./ADR-001-typescript-strict-mode.md) | TypeScript strict モード採用 | Accepted | 2026-05-20 |
| [ADR-002](./ADR-002-feature-based-layered-architecture.md) | フィーチャーベース + レイヤード アーキテクチャ | Superseded by ADR-006 | 2026-05-20 |
| [ADR-003](./ADR-003-signal-noise-design-system.md) | Signal/Noise デザインシステム採用 | Accepted | 2026-05-20 |
| [ADR-004](./ADR-004-semantic-html-requirement.md) | セマンティックHTML必須化 | Accepted | 2026-05-20 |
| [ADR-005](./ADR-005-tailwind-css-styling.md) | Tailwind CSS によるスタイリング | Accepted | 2026-05-20 |
| [ADR-006](./ADR-006-nextjs-idiomatic-architecture.md) | Next.js App Router 流儀のアーキテクチャへ再設計 | Proposed | 2026-07-11 |

---

## ADR の目的

- アーキテクチャ決定を記録し、将来の参照に備える
- 決定の背景と理由を明記
- 代替案と選択理由を明確化
- チーム全体で一貫性を保つ

## ADR フォーマット

```markdown
# ADR-XXX: [決定のタイトル]

## Status
[Proposed | Accepted | Deprecated | Superseded by ADR-YYY]

## Context
なぜこの決定が必要だったのか。背景情報。

## Decision
最終的な決定内容。明確で簡潔に。

## Consequences
決定の結果。メリット（+）とデメリット（-）。

## Alternatives
検討した代替案と、選択しなかった理由。
```

---

## 参照方法

コード内での参照：
```typescript
// See ADR-001: TypeScript strict mode
// See ADR-002: Feature-based architecture
```

メモリでの参照：
```
.claude/projects/portfolio/memory/project/related_adrs.md
  → タスク種別ごとにどのADRを確認すべきかをリスト化
```

---

## ADR 昇格ガイド

軽微な決定（`.claude/memory/project/decisions.md` に記載）が重要になった場合、ADRに昇格させる：

- **タイミング**: 複数のタスク/チーム決定に影響する
- **プロセス**: 新しいADRを作成し、Status を Accepted に設定
- **参照更新**: 関連ADRがあれば、相互参照を追加

---

**最終更新**: 2026-05-20
