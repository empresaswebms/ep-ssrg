const { scrollToElement } = require('./js/views/animate');

const Inicio = () => import("./components/pantalla/Inicio.vue");

const Productos = () => import("@/components/pantalla/OtrosProductos.vue");
const Privacidad = () => import("@/components/pantalla/ayuda/privacidad.vue");
const Login = () => import("@/components/pantalla/LoginPortal.vue");
const Condiciones = () => import("@/components/pantalla/ayuda/terminos.vue");
const Ayuda = () => import("@/components/pantalla/ayuda/inicioAyuda.vue");
const NoEncontrado = () => import("@/components/pantalla/NoEncontrado.vue");
const Perfil = () => import("@/components/pantalla/perfil/");
const Contacto = () => import("@/components/pantalla/Contacto.vue");
const Pagar = () => import("@/components/pantalla/Checkout/Assistant.vue");
const Compras = { template: '<div>Compras</div>' };
const Nosotros = { template: '<div>Nosotros</div>' };

const routes = [
  { path: '/', component: Inicio },
  { path: '/productos', component: Productos },
  { path: '/contacto', component: Contacto },
  { path: '/nosotros', component: Nosotros },
  { path: '/login', component: Login },
  { path: '/ayuda', component: Ayuda },
  { path: '/ayuda/privacidad', component: Privacidad },
  { path: '/ayuda/terminos', component: Condiciones },
  { path: '/perfil', component: Perfil, meta: { requiresAuth: true }},
  { path: '/comprar', component: Pagar, meta: { requiresAuth: true }},
  { path: '/pagar', component: Compras, meta: { requiresAuth: true }},
  { path: '/error', component: NoEncontrado },
];

module.exports = routes;
