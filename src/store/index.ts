import { defineStore } from 'pinia';
import isEmpty from 'lodash/isEmpty';
import { api, saveToken } from '@/utils';

export const useStore = defineStore({
  id: 'base',
  state: () => {
    return {
      user: {} as any,
      userSelectLanguage: 'en',
    };
  },
  actions: {
    async login(jwtResponse: string) {
      const jwtParts = jwtResponse.split('.');

      if (jwtParts.length !== 3) {
        throw new Error('Invalid JWT format');
      }

      const { email, name, picture } = JSON.parse(atob(jwtParts[1]));
      // email, avatar: picture, nickname: name, google: true, type: 'pc'
      const res = await fetch(`${api}/common/login`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          avatar: picture,
          nickname: name,
          google: true,
          type: 'pc',
        }),
      });
      const { token, user } = await res.json();
      this.user = user;
      localStorage.setItem('det_token', token);
      // saveToken(token, true);
    },
    async userClickLogin(args: any) {
      const res = await fetch(`${api}/common/login`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...args,
          type: 'pc',
        }),
      });
      const { token, user } = await res.json();
      this.user = user;
      saveToken(token, true);
      return res;
    },
    async getUserInfo() {
      try {
        if (!localStorage.getItem('det_token') || !isEmpty(this.user)) {
          return;
        }
        const res = await fetch(`${api}/userInfo`, {
          method: 'get',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('det_token')}`,
            'Content-Type': 'application/sss',
          },
        });
        if (res.status === 401) {
          localStorage.removeItem('det_token');
        } else {
          const { user } = await res.json();
          this.user = user;
        }
      } catch (e) {}
    },
    async userChangeLanguage(language: string) {
      this.userSelectLanguage = language;
    },
  },
});
