// site.js — みんなのITサポーターどば先生
(function () {
  'use strict';

  // フッターの年号
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  // FAQ: Enter/Spaceで開閉
  document.querySelectorAll('summary').forEach((s) => {
    s.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        s.click();
      }
    });
  });

  // 画像は2枚目以降を遅延読み込み
  document.querySelectorAll('img').forEach((img, i) => {
    if (i > 0) {
      img.loading = 'lazy';
      img.decoding = 'async';
    }
  });
})();
