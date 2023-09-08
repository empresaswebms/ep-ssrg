<template>
  <!-- eslint-disable -->

  <NavBar> </NavBar>
  <router-view :ref="vistaPagina" @view-mounted="paginaBusquedaLoaded" @agregar-producto="agregarProducto"
    @comprar-producto="comprarProducto" @consultar-producto="consultarProducto" />
  <pie-pagina></pie-pagina>
  <div id="ftco-loader" class="show fullscreen">
    <svg class="circular" width="48px" height="48px">
      <circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" />
      <circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00" />
    </svg>
  </div>
  <modal-carrito :items="itemsCarrito" :monto="montoCarrito" :cantidad="cantidadCarrito" 
  @pagar-carrito="pagarCarrito"
    @eliminar-prod="eliminarProducto" />
    <modal-pago></modal-pago>
</template>

<script setup>

/* eslint-disable */
import { onMounted, ref, App } from 'vue';
import NavBar from "@/components/vistas/items/navbar/NavBar.vue"
import PiePagina from "@/components/vistas/PiePagina.vue"
import ModalCarrito from '@/components/vistas/ModalCarrito.vue';
import ModalPago from '@/components/vistas/Modal/ComprobantePago.vue';
import { loadModal, loadResultsProduct, addProduct, deleteProduct } from "@/js/CartApp/CartPlugin"; // Importa las funciones directamente desde el módulo del plugin
import { useRouter } from 'vue-router';
import { scrollToElement } from './js/views/animate';

var router = useRouter();
var vistaPagina = ref()
var itemsCarrito = ref([])
var montoCarrito = ref([])
var cantidadCarrito = ref([])

onMounted(() => {
  loadModal((productos, montoTotal, cantidadProductos) => {
    itemsCarrito.value = productos;
    montoCarrito.value = montoTotal;
    cantidadCarrito.value = cantidadProductos;
  })
  // CartApp.init();
})

function paginaBusquedaLoaded(element) {
  if (element.value)
    // CartApp.loadResultsProduct(element.value);  
    loadResultsProduct(element.value);
}

function agregarProducto(producto) {
  // CartApp.addProduct(producto);
  addProduct(producto);
}

function comprarProducto(producto) {
  // CartApp.addProduct(producto);
  addProduct(producto);
  router.push("/comprar")
}

function eliminarProducto(producto) {
  // CartApp.deleteProduct(producto);
  deleteProduct(producto);
}

function pagarCarrito() {
  // CartApp.deleteProduct(producto);
  router.push("/comprar")
  scrollToElement("ftco-navbar")
}


</script>

<style lang="scss">
@import "assets/scss/style.scss";
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");

#app {}
</style>
