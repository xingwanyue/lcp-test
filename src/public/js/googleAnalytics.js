window.addEventListener('load', function (event) {
  var script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-BTN96NLD4D';
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
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
  };

  document.querySelectorAll('button[type*="submit"]').forEach(function (e) {
    e.addEventListener('click', function () {
      var email = document.querySelector('[class="el-input__inner"]').value;
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (email != '' && mailformat.test(email)) {
        gtag('set', 'user_data', { email: email });
        gtag('event', 'sign_up', { send_to: 'G-BTN96NLD4D' });
      }
    });
  });
});
