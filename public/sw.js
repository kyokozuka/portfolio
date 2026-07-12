// シンプルな Service Worker（学習用）。
// 方針: ナビゲーション/アセットとも「ネットワーク優先・失敗時キャッシュ」。
// コンテンツサイトなのでオンライン時は常に最新、オフライン時は訪問済みページを表示する。
const CACHE = 'portfolio-v1';

self.addEventListener('install', () => {
  // 新しい SW を即時有効化
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // 旧バージョンのキャッシュを削除
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
      await self.clients.claim();
    })(),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  // 同一オリジンの GET のみ扱う
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      try {
        const fresh = await fetch(request);
        cache.put(request, fresh.clone());
        return fresh;
      } catch {
        const cached = await cache.match(request);
        if (cached) return cached;
        // ナビゲーションはキャッシュ済みホームにフォールバック
        if (request.mode === 'navigate') {
          const home = await cache.match(`${self.registration.scope}en/`);
          if (home) return home;
        }
        throw new Error('offline and not cached');
      }
    })(),
  );
});
