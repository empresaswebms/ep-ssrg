<template>
  <div class="col-xs-1 col-sm-6 col-md-4  ">
    <div class="" :class="'car-wrap product-id-'+data.Codigo + ' text-center'" :data-product="encodeJson(data)" >
      <div class="img d-flex align-items-end" 
          :style="{ 'background-image':  `url(${decodeURIComponent(imagen)})`}">
        <div class="price-wrap d-flex">
          <span class="rate"> {{data.Precio > 0 ? `REF ${data.Precio}`:"Bajo pedido" }}</span>
        </div>
      </div>
      <div class="text p-4">
        <h2 class="mb-0">{{ data.Uso }}</h2>
        <span>Tuff Support</span>
        <div class="d-flex justify-content-center">
            <NumberPicker 
            @valor="itemsPedido" :value="itemsPedido"></NumberPicker>
          </div>
        <p  class="d-flex mb-0 justify-content-center" >
            <!-- Si el producto esta disponible -->
            <button href="" @click="emit('agregar-prod', data,itemsPedido )" 
                class="btn btn-black btn-outline-black ms-1 btn-add-cart" 
                :data-product="data.Codigo">Agregar al carrito</button>
		        
            <button href="" @click="emit('comprar-prod', data,itemsPedido )" 
                class="btn btn-primary me-1 " 
                :data-product="data.Codigo">Comprar ya</button>
            <!-- Si el producto no esta disponible -->
            <!-- <button v-if="!data.Disponible" href="" @click="emit('consultar-prod', data )"  -->
              <!-- class="btn btn-black btn-outline-black ms-1 me-1">Consultar</button> -->
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
import NumberPicker from "@/components/vistas/form/NumberPicker.vue"
import JsBarcode from "jsbarcode";

const emit = defineEmits(["agregar-prod","comprar-prod","consultar-prod"])
// const emit = defineEmits(["agregarProd","comprarProd","consultarProd"]);

var imagen = ref('\'images/placeholder_product.jpg\'');
var barcode = ref();
var itemsPedido = ref(1);
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

</style>