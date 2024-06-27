<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t, setLocale, locale } = useI18n();
import { reactive } from 'vue';

const state = reactive({
  language: '',
  tkshow: false,
});
const wehaveLanguage = ['en', 'ja', 'zh'];
// 获取浏览区语言

if (process.client) {
  state.language = navigator.language;
  console.log(locale.value);
  if (locale.value !== navigator.language) {
    if (navigator.language !== 'en') {
      // wehaveLanguage包含state.language
      if (wehaveLanguage.includes(state.language)) {
        state.tkshow = true;
      }
    }
  }
}
const changeLanguage = (newVal) => {
  console.log('切换为英语');
  setLocale(newVal);
  state.tkshow = false;
};
</script>
<template>
  <div v-if="state.tkshow" class="changeLanguage_tk_mc">
    <div class="changeLanguage_tk">
      <div>{{ state.language }}</div>
      <div @click="changeLanguage(state.language)">切换为{{ state.language }}</div>
      <div @click="state.tkshow = false">unset</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.changeLanguage_tk_mc {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  border: 1px red solid;
  .changeLanguage_tk {
    width: 600px;
    height: 300px;
    border: 1px red solid;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    z-index: 1100;
  }
}
</style>
