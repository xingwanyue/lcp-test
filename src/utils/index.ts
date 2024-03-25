const host = 'https://app.detpractice.com/app/#/';
const cdn = 'https://detcdn.zixuekeji.cn';
export const api = 'https://app.detpractice.com/weapp/api';

export const urlGet = (url: string) => `${host}?url=${encodeURIComponent(url)}`;
export const staticPcUrlGet = (path: string) => `${cdn}/store/pc/${path}`;
export const staticUrlGet = (path: string) => (path.startsWith('http') ? path : `${cdn}${path}`);
