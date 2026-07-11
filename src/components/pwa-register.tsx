'use client';

import { useEffect } from 'react';

// Service Worker を登録する葉コンポーネント。
// 開発時（next dev）はキャッシュ由来の混乱を避けるため本番ビルドのみ登録する。
export default function PWARegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;
    if (!('serviceWorker' in navigator)) return;

    const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
    navigator.serviceWorker.register(`${base}/sw.js`).catch(() => {
      // 登録失敗は致命的ではないため握りつぶす
    });
  }, []);

  return null;
}
