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
  { name: 'home (en)', path: '/en', marker: /Software Engineer & UI\/UX Designer/i },
  { name: 'software 一覧 (en)', path: '/en/software', marker: /Core Expertise/i },
  {
    name: 'software 詳細 (techdoctor, en)',
    path: '/en/software/techdoctor',
    marker: /Digital Biomarker Development Platform/i,
  },
  { name: 'uiux 一覧 (en)', path: '/en/uiux', marker: /Turning ideas into beautiful experiences/i },
  {
    name: 'uiux 詳細 (achievy, en)',
    path: '/en/uiux/achievy',
    marker: /Task Management App for ADHD Students/i,
  },
  { name: 'contact (en)', path: '/en/contact', marker: /@kyokozuka/i },
];

// 日本語ロケールでも各ルートが日本語ナビで描画されることを確認する（i18n 回帰）。
const jaRoutes = ['/ja', '/ja/software', '/ja/uiux', '/ja/contact'];

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

// ロケールルーティング（Phase 2 で追加）の挙動
test('/ はデフォルトロケール /en へリダイレクトする', async ({ page }) => {
  await page.goto('/');
  // /en の表示内容は上記の home (en) テストで担保。ここではリダイレクトのみ検証する。
  await expect.poll(() => new URL(page.url()).pathname).toMatch(/^\/en\/?$/);
});

for (const path of jaRoutes) {
  test(`${path} が日本語ナビで描画される`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status(), 'HTTP ステータス').toBeLessThan(400);
    await expect(page.getByRole('navigation').first()).toBeVisible();
    // ナビの日本語ラベル（辞書由来）が表示される
    await expect(page.getByText(/ソフトウェア/).first()).toBeVisible();
  });
}

// 内部リンクがロケール無しの旧パス（/software 等）を指していないこと（リンク切れ回帰防止）。
const linkAuditPaths = [
  '/en',
  '/en/software',
  '/en/software/techdoctor',
  '/en/uiux',
  '/en/uiux/achievy',
  '/en/contact',
];
for (const p of linkAuditPaths) {
  test(`${p} に旧ロケール無しパスへの内部リンクが無い`, async ({ page }) => {
    await page.goto(p);
    const stale = await page
      .locator('a[href^="/software"], a[href^="/uiux"], a[href^="/contact"]')
      .evaluateAll((els) => els.map((e) => (e as HTMLAnchorElement).getAttribute('href')));
    expect(stale, `旧パスリンク: ${stale.join(', ')}`).toEqual([]);
  });
}

// PWA: <head> の manifest リンク・theme-color と、アイコン資産の提供を検証する。
// manifest.webmanifest の中身は静的書き出し（build）で生成されるため内容検証はそちらで担保し、
// ここでは dev でも確認できるリンク存在・アイコン到達性のみを見る。
// Service Worker は本番ビルドのみ登録するため E2E(dev) では対象外。
test('PWA の manifest リンク / theme-color / アイコンが提供される', async ({ page }) => {
  await page.goto('/en');

  const manifestLink = page.locator('link[rel="manifest"]');
  await expect(manifestLink).toHaveCount(1);
  expect(await manifestLink.getAttribute('href')).toContain('manifest.webmanifest');

  await expect(page.locator('meta[name="theme-color"]')).toHaveCount(1);

  const iconRes = await page.request.get('/icon.svg');
  expect(iconRes.ok()).toBeTruthy();
});
