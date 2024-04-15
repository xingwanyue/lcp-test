import { defineStore } from 'pinia';
// import isEmpty from 'lodash/isEmpty';
import { api, saveToken, getToken, removeToken } from '@/utils';
import { fetchmy } from '@/utils/request';

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
      saveToken(token, true);
    },
    async userClickLogin(args: any) {
      const res = await fetchmy(`${api}/common/login`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...args,
          type: 'pc',
        }),
      });

      return res;
    },
    async getUserInfo() {
      try {
        const token = await getToken(false);
        // if (!localStorage.getItem('det_token') || !isEmpty(this.user)) {
        //   return;
        // }
        const res = await fetch(`${api}/userInfo`, {
          method: 'get',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/sss',
          },
        });

        if (res.status === 401) {
          removeToken();
        } else {
          const { user } = await res.json();
          this.user = user;
        }
      } catch (e) {
        console.log(e);
      }
    },
    async userChangeLanguage(language: string) {
      this.userSelectLanguage = language;
    },
  },
});
