export default defineNuxtRouteMiddleware(async (to, from) => {
  if (to.path.endsWith('/') && to.path !== '/') {
    return navigateTo({ path: to.path.substring(0, to.path.length - 1), query: to.query });
  }
  // 原来的learn页面重定向到blog页面 参数为 /blog/category  category要查一下
  // if (to.path === '/learn') {
  //   // const { data: category } = (await useFetch(`${api}/common/article/category`, {
  //   //   server: true,
  //   //   query: {},
  //   //   headers: { locale: locale.value },
  //   // })) as any;
  //   // console.log(category);
  //   // to.query.c
  //   return navigateTo({ path: `/blog`, query: { c: to.query.c } });
  // }
  // 原来的blog页面 路由带问号的重定向到不带问号的新路径
  if (to.path === '/blog' && to.query.page) {
    return navigateTo({ path: `/blog` });
  }
});
