import { defineStore } from 'pinia';
export const useStore = defineStore({
  id: 'base',
  state: () => {
    return {
      user: {} as any,
    };
  },
  actions: {},
});
