const host = 'https://app.detpractice.com/app/#/';

export const api = 'https://app.detpractice.com/weapp/api';

export const urlGet = (url: string) => `${host}?url=${encodeURIComponent(url)}`;
