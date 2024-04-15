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
