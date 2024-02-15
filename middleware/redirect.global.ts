export default defineNuxtRouteMiddleware((to, from) => {
  if (to.name === 'Snapbyte') {
    console.log('we are not leaving here');

    return navigateTo({ name: 'My Recordings' });
  }
});
