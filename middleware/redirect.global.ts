export default defineNuxtRouteMiddleware((to, from) => {
  console.log('to', to);

  if (to.name === 'Snapbyte') {
    console.log('we are not leaving here');

    return navigateTo({ name: 'My Recordings' });
  }
});
