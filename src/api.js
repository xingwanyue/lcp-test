import { fetchmy } from '@/utils/request';
import { api } from '@/utils';
export const sesCodeSend = (args) =>
  fetchmy(`${api}/common/sesCode`, {
    method: 'post',
    body: JSON.stringify(args),
  });

export const sesCodeVerify = (args) =>
  fetchmy(`${api}/common/sesCodeVerify`, {
    method: 'post',
    body: JSON.stringify(args),
  });

export const stripePayUrlGet = (args, token) =>
  fetchmy(`${api}/stripe/payUrl?vipId=${args.vipId}`, {
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const stripePayStatusGet = (logVipId, token) =>
  fetchmy(`${api}/stripe/status?logVipId=${logVipId}`, {
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const findPassword = (args) =>
  fetchmy(`${api}/common/findPassword`, {
    method: 'post',
    body: JSON.stringify(args),
  });
