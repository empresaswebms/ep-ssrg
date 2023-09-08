<template>
  <div class="col-md-3">
    <div :class="'car-wrap product-id-'+data.Codigo" :data-product="encodeJson(data)" >
      <div class="img d-flex align-items-end" 
          :style="{ 'background-image':  `url(${decodeURIComponent(imagen)})`}">
        <div class="price-wrap d-flex">
          <span class="rate"> {{data.Precio > 0 ? `REF ${data.Precio}`:"Bajo pedido" }}</span>
        </div>
      </div>
      <div class="text p-4 text-center">
        <h2 class="mb-0">{{ data.Uso }}</h2>
        <span>Tuff Support</span>
        <p class="d-flex mb-0 d-block">
            <!-- Si el producto esta disponible -->
            <button v-if="data.Disponible" href="" @click="emit('agregar-prod', data )" 
                class="btn btn-black btn-outline-black ms-1 btn-add-cart" 
                :data-product="data.Codigo">Agregar al carrito</button>
		        
            <button v-if="data.Disponible" href="" @click="emit('comprar-prod', data )" 
                class="btn btn-primary me-1 " 
                :data-product="data.Codigo">Comprar ya</button>
            
            <!-- Si el producto no esta disponible -->
            <button v-if="!data.Disponible" href="" @click="emit('consultar-prod', data )" 
              class="btn btn-black btn-outline-black ms-1 me-1">Consultar</button>
        </p>
      </div>
      <svg ref="barcode" class="barcode mb-0" jsbarcode-format="CODE39"
        jsbarcode-height="30" :jsbarcode-value="data.Codigo"
        jsbarcode-textmargin="0" jsbarcode-fontoptions="bold"></svg>
    </div>
  </div>
</template>

<script setup>

import { defineProps, defineEmits, onMounted, ref} from "vue";
import { encodeJson } from "@/js/app";
import { ProductoInfo } from "@/js/CartApp/Producto" 
import JsBarcode from "jsbarcode";

const emit = defineEmits(["agregar-prod","comprar-prod","consultar-prod"])
// const emit = defineEmits(["agregarProd","comprarProd","consultarProd"]);

var imagen = ref('\'images/placeholder_product.jpg\'');
var barcode = ref();
const props = defineProps({
    data:{
        require:true,
        type: ProductoInfo,
    }
})

onMounted(cargarBarras)

function cargarBarras(){
  imagen = props.data.Img ? props.data.Img : '\'images/placeholder_product.jpg\''
  JsBarcode(".barcode").init();
}
</script>

<style lang="scss" scoped>
.img {
  background-image: url();
}
</style>