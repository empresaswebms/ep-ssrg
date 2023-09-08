import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import main from './assets/js/main'
import CartPlugin from '@/js/CartApp/CartPlugin'

// import "https://www.instagram.com/embed.js"


// import Firestore from '@/js/firebase/FirestoreHelper'
// import {getDoc,getFirestore,doc } from "firebase/firestore"
// const fire = Firestore.get();
// import {getAnalytics, setUserId, setUserProperties,logEvent} from "firebase/analytics"
import Auth from '@/js/firebase/AuthHelper'
const auth = Auth.get();

// getFirestore(auth.app)


import Inicio from "./components/pantalla/Inicio.vue"
import Productos from "@/components/pantalla/OtrosProductos.vue"
import Privacidad from "@/components/pantalla/ayuda/privacidad.vue"
import Login from "@/components/pantalla/LoginPortal.vue"
import Condiciones from "@/components/pantalla/ayuda/terminos.vue"
import Ayuda from "@/components/pantalla/ayuda/inicioAyuda.vue"
import NoEncontrado from "@/components/pantalla/NoEncontrado.vue"
import Perfil from "@/components/pantalla/perfil/"
const Contacto = { template: '<div>Contacto</div>' }
import Pagar  from "@/components/pantalla/Checkout/Assistant.vue"
const Compras = { template: '<div>Compras</div>' }
const Nosotros = { template: '<div>Nosotros</div>' }


// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Inicio },
  { path: '/productos', component: Productos },
  { path: '/contacto', component: Contacto },
  { path: '/nosotros', component: Nosotros },
  { path: '/login', component: Login },
  { path: '/ayuda', component: Ayuda },
  { path: '/ayuda/privacidad', component: Privacidad },
  { path: '/ayuda/terminos', component: Condiciones },
  { path: '/perfil', component: Perfil, meta: { requiresAuth: true }, },
  { path: '/comprar', component: Pagar, meta: { requiresAuth: true }, },
  { path: '/pagar', component: Compras, meta: { requiresAuth: true }, },
  { path: '/error', component: NoEncontrado, },
  
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes: routes, // short for `routes: routes`
})
// main.init();

router.beforeEach((to, from, next) =>
{
  auth.onAuthStateChanged(async (userFirebase) =>
  {
    //Login con Autenticación no tiene sentido hermano
    // console.log(JSON.stringify(to))
    if (to.path == "/login" && userFirebase)
    {
      next("/perfil");      
    } else if (to.meta.requiresAuth) //Requiere login pero no esta autenticado?
    {
      if (userFirebase)
      {
        next();
      } else
      { 
        next("/login");
      }
    } else
    {
      next();
    }
  });
});

var appVue  = createApp(App)
appVue.use(router)
appVue.use(CartPlugin)
appVue.mount('#app')
