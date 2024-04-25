// 发送注册到 google ads
// 注册成功
export const sinupEvent = () => {
  if (process.env.VUE_APP_MODE === 'i18n') {
    try {
      window.gtag('event', 'conversion', {
        send_to: 'AW-998843228/aUz_CLnt3ZYZENzGpNwD',
      });
      window.gtag('event', 'conversion_event_signup', {
        event_timeout: 2000,
      });
    } catch (e) {
      //
    }
  }
  return false;
};

// 开始支付
export const beginCheckoutEvent = () => {
  if (process.env.VUE_APP_MODE === 'i18n') {
    try {
      window.gtag('event', 'conversion', {
        send_to: 'AW-998843228/75WQCM-nzpYZENzGpNwD',
      });
      window.gtag('event', 'conversion_event_beginCheckout', {
        event_timeout: 2000,
      });
    } catch (e) {
      //
    }
  }
  return false;
};

// 支付成功
export const payEvent = (transaction_id = '', value = 100) => {
  if (process.env.VUE_APP_MODE === 'i18n') {
    try {
      window.gtag('event', 'conversion', {
        send_to: 'AW-998843228/i-HNCPG91pYZENzGpNwD',
        transaction_id,
        value: value / 1000, // 不传输默认1美元  但传给ads 默认为10分之一
      });

      window.gtag('event', 'conversion_event_paid', {
        event_timeout: 2000,
      });
    } catch (e) {
      //
    }
  }
  return false;
};