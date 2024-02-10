export default defineNuxtRouteMiddleware((to, from) => {
  console.log('to', to);

  // if (to.name === '/') {
  //   console.log('we are not leaving here');

  //   return navigateTo('/recordings');
  // }
});
