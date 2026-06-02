---
name: 外部ツールとリソース
description: 開発に使用するツール、ダッシュボード、外部リンク、参考資料
type: reference
---

# 外部ツールとリソース

## 開発環境・ツール

| ツール | 用途 | 参考 |
|--------|------|------|
| **Next.js** | メインフレームワーク | [Next.js 公式ドキュメント](https://nextjs.org) |
| **TypeScript** | 型安全性 | [TypeScript ハンドブック](https://www.typescriptlang.org/docs) |
| **Tailwind CSS** | ユーティリティベース CSS | [Tailwind ドキュメント](https://tailwindcss.com/docs) |
| **React** | UI ライブラリ | [React 公式](https://react.dev) |
| **Git** | バージョン管理 | [Git ドキュメント](https://git-scm.com/doc) |

## デザイン・リファレンス

| リソース | 用途 | 参考 |
|---------|------|------|
| **Signal/Noise System** | デザイン言語の基準 | `docs/design.md`、ADR-003 |
| **Google Fonts** | Cormorant Garamond, DM Sans | [Google Fonts](https://fonts.google.com) |
| **Color Accessibility** | コントラスト検証 | [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker) |

## フォント設定

| フォント | 用途 | 読み込み方法 |
|---------|------|------------|
| Cormorant Garamond | 見出し・Display テキスト | `next/font/google` |
| DM Sans | 本文・UI | `next/font/google` |
| ヒラギノ Sans / Yu Gothic | 日本語フォールバック | system fonts |

## パフォーマンス・監視

| ツール | 用途 | 注記 |
|--------|------|------|
| **Lighthouse** (Chrome DevTools) | パフォーマンス監査 | ビルド後に定期確認 |
| **WAVE Browser Extension** | アクセシビリティ検証 | WebAIM から |
| **React DevTools** | デバッグ | ローカル開発用 |

## コンポーネント / UI References

| 参考 | 説明 | リンク |
|-----|------|--------|
| **Accessible Components** | セマンティック HTML 実装例 | [Web Accessibility by W3C](https://www.w3.org/WAI) |
| **CSS Grid + Flexbox** | レイアウト実装 | [MDN Web Docs](https://developer.mozilla.org) |

---

**最後確認:** 2026-05-20
