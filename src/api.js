import { fetchmy } from '@/utils/request';
import { api } from '@/utils';
export const sesCodeSend = (args) =>
  fetchmy(`${api}/common/sesCode`, {
    method: 'post',
    body: JSON.stringify(args),
    Headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });

export const sesCodeVerify = (data) =>
  fetchmy(`${api}/common/sesCodeVerify`, {
    method: 'post',
    body: JSON.stringify(args),
  });
