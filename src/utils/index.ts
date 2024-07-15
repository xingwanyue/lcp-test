export const cdn = 'https://detcdn.zixuekeji.cn';

export const domain = 'detpractice.com';
// export const domain = 'detpractice.com';

// 应用地址
export const host = `https://app.${domain}`;
export const api = `https://www.duolingopractice.com/api`;
// export const api = `http://192.168.1.22:9000/api`;

export const urlGet = (url: string) => `${host}?url=${encodeURIComponent(url)}`;

export const staticPcUrlGet = (path: string) => `${cdn}/store/pc/${path}`;
export const staticUrlGet = (path: string) => {
  if (!path) {
    throw new Error('Path is required');
  }
  return path.startsWith('http') ? path : `${cdn}${path}`;
};
const TOKEN = 'det_i18n_token';

export const setCookie = (name: string, value: string, days: number) => {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }

  document.cookie = `${name}=${value || ''}${expires}; domain=.${domain}; path=/`;
};

export const getCookie = (name: string) => {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
};

export function getToken(forHeader?: any) {
  if (!process.client) {
    return;
  }
  const token = getCookie(TOKEN);
  let res;
  if (token) {
    res = forHeader ? `Bearer ${token}` : token;
  } else {
    res = forHeader ? '' : token;
  }
  return Promise.resolve(res);
}

export function saveToken(token: any) {
  setCookie(TOKEN, token, 90);
}
let defaultCachePrefix = '20180428_'; // 默认缓存前缀,便于快速清除缓存
export const setCatchePrefix = (prefix: String) => {
  defaultCachePrefix = `${prefix}_`;
};

export const saveStorage = (key: String, value: String, remeber?: Boolean) => {
  (remeber ? localStorage : sessionStorage)[`${defaultCachePrefix}${key}`] = value;
};
export const getStorage = (key: String) => {
  if (process.client) {
    return sessionStorage[`${defaultCachePrefix}${key}`] || localStorage[`${defaultCachePrefix}${key}`];
  }
  return '';
};

export function removeToken() {
  sessionStorage.removeItem(TOKEN);
  localStorage.removeItem(TOKEN);
}

// article
export const articleGet = `${api}/common/article`;
export const articleCategoryGet = `${api}/common/article/category`;
// rate,post,{articleId, rate }
export const rateAdd = `${api}/common/article/rate`;
// tree
export function getTree(data = [], sid: any, pid = null) {
  const children = [] as any;
  data.forEach((value: any) => {
    const node = value;
    if (((!pid && !node.pid) || node.pid === pid) && node.id !== sid) {
      children.push({
        key: node.id,
        value: node.id,
        label: node.name,
        ...node,
        children: getTree(data, sid, node.id),
      });
    }
  });
  return children.length ? children : undefined;
}
export const portalContact = `${api}/common/portalContact`;

export const formatCash = (cash: number) => {
  if (!cash) {
    return '0';
  }
  if (cash % 100 === 0) {
    return (cash / 100).toFixed(0);
  }
  if (cash % 10 === 0) {
    return (cash / 100).toFixed(1);
  }
  return (cash / 100).toFixed(2);
};
// 数字添加千分位
export const formatNumber = (num: number) => {
  if (!num) {
    return '0';
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const delay = (timeout: number) => new Promise((resolve) => setTimeout(resolve, timeout));
