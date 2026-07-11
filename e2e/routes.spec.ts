import { test, expect } from '@playwright/test';

// 移行前の現状を固定する特性テスト（デフォルト言語 en）。
// 各ルートについて「HTTP 200 で応答」「共通ナビ（Header）が描画」
// 「ルート固有のテキストが表示」を確認する。
// リファクタ後もこれらが緑であれば、表示の回帰は起きていないとみなす。

type Route = {
  name: string;
  path: string;
  marker: RegExp;
};

// マーカーはヒーロー見出し（H1 は1文字ずつ span 分割されるため getByText で
// 全文一致できない）を避け、非分割の安定テキスト（サブタイトル・ラベル等）を使う。
const routes: Route[] = [
  { name: 'home', path: '/', marker: /Software Engineer & UI\/UX Designer/i },
  { name: 'software 一覧', path: '/software', marker: /Core Expertise/i },
  {
    name: 'software 詳細 (techdoctor)',
    path: '/software/techdoctor',
    marker: /Digital Biomarker Development Platform/i,
  },
  { name: 'uiux 一覧', path: '/uiux', marker: /Turning ideas into beautiful experiences/i },
  {
    name: 'uiux 詳細 (achievy)',
    path: '/uiux/achievy',
    marker: /Task Management App for ADHD Students/i,
  },
  { name: 'contact', path: '/contact', marker: /@kyokozuka/i },
];

for (const route of routes) {
  test(`${route.name} (${route.path}) が現状どおり描画される`, async ({ page }) => {
    const response = await page.goto(route.path);
    expect(response?.status(), 'HTTP ステータス').toBeLessThan(400);

    // 共通ナビ（Header）が存在する = レイアウトが壊れていない
    // 詳細ページは「戻る」ナビ等で navigation role が複数あるため first を見る
    await expect(page.getByRole('navigation').first()).toBeVisible();

    // ルート固有のテキストが表示される
    await expect(page.getByText(route.marker).first()).toBeVisible();
  });
}
