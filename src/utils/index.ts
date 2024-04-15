import _ from 'lodash';

const host = 'https://app.detpractice.com/app/#/';
const cdn = 'https://detcdn.zixuekeji.cn';
// export const api = 'https://app.detpractice.com/weapp/api';
export const api = 'http://192.168.1.22:9000/api';
// const api = 'http://192.168.1.147:10001/api';

export const urlGet = (url: string) => `${host}?url=${encodeURIComponent(url)}`;
export const staticPcUrlGet = (path: string) => `${cdn}/store/pc/${path}`;
export const staticUrlGet = (path: string) => (path.startsWith('http') ? path : `${cdn}${path}`);
const TOKEN = 'det_i18n_token';
export function getToken(forHeader: any) {
  const token = sessionStorage[TOKEN] || localStorage[TOKEN];
  let res;
  if (token) {
    res = forHeader ? `Bearer ${token}` : token;
  } else {
    res = forHeader ? '' : token;
  }
  return Promise.resolve(res);
}

export function saveToken(token: any, remeber: any) {
  const store = remeber ? localStorage : sessionStorage;
  if (token === null || token === undefined) {
    store.removeItem(TOKEN);
  } else {
    store[TOKEN] = token;
  }
}
let defaultCachePrefix = '20180428_'; // 默认缓存前缀,便于快速清除缓存
export const setCatchePrefix = (prefix: String) => {
  defaultCachePrefix = `${prefix}_`;
};

export const saveStorage = (key: String, value: String, remeber: Boolean) => {
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
  _.forEach(data, (value: any) => {
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
