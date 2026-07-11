// uiux 詳細ルートの slug 一覧。詳細ページは2案件で設計が大きく異なるため、
// データ駆動の単一コンポーネントに強制統合せず、[slug] ルートで案件別
// コンポーネントにディスパッチする（レジストリは [slug]/page.tsx 側）。
export const uiuxProjectSlugs = ['achievy', 'six-acres'];
