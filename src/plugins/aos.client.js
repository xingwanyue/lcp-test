import AOS from 'aos';

export default defineNuxtPlugin(() => {
  new AOS.init({
    disable: 'mobile',
  });
});
