export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path.endsWith('/') && to.path !== '/') {
    return navigateTo({ path: to.path.substring(0, to.path.length - 1), query: to.query });
  }
  // 原来的learn页面重定向到blog页面 参数为 /blog/category  category要查一下
  if (to.path === '/learn') {
    return navigateTo({ path: `/blog` });
  }
  // 原来的blog页面 路由带问号的重定向到不带问号的新路径
  if (to.path === '/blog' && to.query.page) {
    return navigateTo({ path: `/blog` });
  }
});
