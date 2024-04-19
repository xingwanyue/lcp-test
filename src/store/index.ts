import { defineStore } from 'pinia';
import isEmpty from 'lodash/isEmpty';
import dayjs from 'dayjs';
import { useRouter } from 'vue-router';

import { api, saveToken, getToken, removeToken, delay } from '@/utils';
import { fetchmy } from '@/utils/request';
import { stripePayUrlGet, stripePayStatusGet, logout } from '@/api';

export const useStore = defineStore({
  id: 'base',
  state: () => {
    return {
      user: {} as any,
      userSelectLanguage: 'en',
      isVip: false,
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
      saveToken(token);
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
        if (!token || !isEmpty(this.user)) {
          return;
        }
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
          const { vipEndTime } = user;
          if (vipEndTime && dayjs().isBefore(dayjs(vipEndTime))) {
            this.isVip = true;
          }
          this.user = user;
        }
      } catch (e) {
        console.log(e);
      }
    },
    async userChangeLanguage(language: string) {
      this.userSelectLanguage = language;
    },
    async checkPayStatus(logVipId: string, token: string) {
      console.log('checkPayStatus');
      const { err, data = {} } = await stripePayStatusGet(logVipId, token);
      if (!err) {
        const { code, vipEndTime, vipDays, examNum, correctNum } = data;
        if (code === 1) {
          this.user.vipEndTime = vipEndTime;
          if (examNum) {
            this.user.examNum = (this.user.examNum || 0) + examNum;
          }
          if (correctNum) {
            this.user.correctNum = (this.user.correctNum || 0) + correctNum;
          }
          const message = [];
          if (examNum) {
            message.push(`${examNum} mock exams purchased successfully!Remaining times ${this.user.examNum}`);
          }
          if (correctNum) {
            message.push(`${correctNum} grading purchases successful!Remaining times ${this.user.correctNum}`);
          }
          if (vipDays) {
            message.push(`${vipDays}
            days premium package purchased successfully! Membership valid until 
            ${dayjs(vipEndTime).format('YYYY-MM-DD')}`);
          }
          if (message.length) {
            ElMessage({
              dangerouslyUseHTMLString: true,
              message: message.join('<br>'),
              type: 'success',
            });
          }
        } else {
          console.log('delay start');
          await delay(1000);
          console.log('delay end');
          await this.checkPayStatus(logVipId, token);
        }
      }
    },
    async stripePay(payload: any) {
      const token = await getToken(false);
      console.log('stripePay',token)
      if (!token) {
        const router = useRouter();
        console.log(router)
        const localePath = useLocalePath();
        console.log(localePath('/login'))
        router.push(localePath('/login'))
        return;
      }
      const { err, data } = await stripePayUrlGet(payload, token);
      if (!err) {
        const { logVipId, url } = data;

        if (url) {
          this.checkPayStatus(logVipId, token);
          window.open(url, '_blank');
        }
      }
    },
    async logout() {
      await logout();
      removeToken();
      window.location.href = '/';
    },
  },
});
