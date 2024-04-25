window.addEventListener('load', function () {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('set', 'linker', {
    domains: ['detpractice.com', 'app.detpractice.com'],
  });
  gtag('js', new Date());

  gtag('config', 'G-BTN96NLD4D');
  gtag('event', 'conversion_event_website_visit', {
    event_timeout: 2000,
  });

  // 发送ads 访问成功事件
  gtag('config', 'AW-998843228');
  gtag('event', 'conversion', {
    send_to: 'AW-998843228/Bsl9CLHbppgZENzGpNwD',
  });

  const fontLink = document.createElement('link');
  fontLink.href = 'https://fonts.googleapis.com/css?family=Nunito';
  document.head.appendChild(fontLink);

  const aosLink = document.createElement('link');
  aosLink.href = '/css/aos.css';
  document.head.appendChild(aosLink);
});
