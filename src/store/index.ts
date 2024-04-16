import { defineStore } from 'pinia';
// import isEmpty from 'lodash/isEmpty';
import dayjs from 'dayjs';

import { api, saveToken, getToken, removeToken } from '@/utils';
import { fetchmy } from '@/utils/request';
import { stripePayUrlGet, stripePayStatusGet } from '@/api';

let timmer: any = null;
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
    async stripePay(payload: any) {
      const token = await getToken(false);
      const { err, data } = await stripePayUrlGet(payload, token);
      if (!err) {
        const { logVipId, url } = data;
        timmer = setInterval(async () => {
          const { errP, data = {} } = await stripePayStatusGet(logVipId, token);
          if (!errP) {
            const { code, vipEndTime, vipDays, examNum, correctNum } = data;
            if (code === 1) {
              clearInterval(timmer);
              timmer = null;
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
                })
                
              }
            }
          }
        }, 1000);
        if (url) {
          window.open(url, '_blank');
        }
      }
    },
  },
});
