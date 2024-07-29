// 发送注册到 google ads
// 注册成功
export const sinupEvent = () => {
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
  return false;
};

// 开始支付
export const beginCheckoutEvent = () => {
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
  return false;
};

// 支付成功
export const payEvent = (transaction_id = '', value = 100) => {
  try {
    window.gtag('event', 'conversion', {
      send_to: 'AW-998843228/i-HNCPG91pYZENzGpNwD',
      transaction_id,
      value,
      currency: 'CNY',
    });

    window.gtag('event', 'conversion_event_paid', {
      event_timeout: 2000,
    });
  } catch (e) {
    //
  }
  return false;
};
