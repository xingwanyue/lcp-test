import { defineNuxtPlugin } from '#app';
import { ElButton, ElSelect } from 'element-plus';
import 'element-plus/dist/index.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component(ElButton.name, ElButton);
  nuxtApp.vueApp.component(ElSelect.name, ElSelect);
});
