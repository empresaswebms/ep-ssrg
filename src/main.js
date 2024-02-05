const { createSSRApp } = require('vue');
const { createRouter, createMemoryHistory } = require('vue-router');
// const AppHomeVue = require('./App.vue');
// const main = require('./assets/js/main').default;
const CartPlugin = require('./js/CartApp/CartPlugin').default;
const routes = require('./rutas');
const VueSplide = require('@splidejs/vue-splide').default;
const Auth = require('./js/firebase/AuthHelper');
const fs = require("fs");
const path = require("path");


const auth = Auth.get();
const router = createRouter({
  history: createMemoryHistory(),
  routes: routes,
})
// main.init();

router.beforeEach(async (to, from, next) => {
  scrollToElement("ancla");
  try {
    const userFirebase = await auth.onAuthStateChanged();
    if (to.path === "/login" && userFirebase) {
      next("/perfil");
    } else if (to.meta.requiresAuth && !userFirebase) {
      next("/login");
    } else {
      next();
    }
  } catch (error) {
    console.error('Error al verificar la autenticación:', error);
    next();
  }
});


// Configura el middleware para manejar el SSR
const appComponent = fs.readFileSync(path.resolve(__dirname, 'App.vue'), 'utf-8');

const appVue = createSSRApp({template: appComponent,});
appVue.use(router)
appVue.use(CartPlugin)
appVue.use(VueSplide);
appVue.mount('#app')

module.exports = {appVue,router}