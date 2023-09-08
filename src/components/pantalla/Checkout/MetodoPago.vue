<template>
  <div>
    <h2>Método de Pago</h2>
    <p>
      Por favor, seleccione uno de los siguientes métodos de pago e siga las instrucciones proporcionadas:
    </p>
    <!-- <div v-for="metodo in metodosPago" :key="metodo.id" class="mb-4">
        <h3>{{ metodo.nombre }}</h3>
        <p>{{ metodo.descripcion }}</p>
        <ul>
          <li v-for="instruccion in metodo.instrucciones" :key="instruccion">{{ instruccion }}</li>
        </ul>
      </div> -->

    <div class="card-deck">
      <div v-for="metodo in metodosPago" :key="metodo.id" class="card">
        <!-- Agrega una imagen a la tarjeta (ajusta la ruta según tus necesidades) -->
        <img :src="getImagen(metodo.id)" class="card-img-top" alt="Imagen de método de pago">
        <div class="card-body">
          <h5 class="card-title">{{ metodo.nombre }}</h5>
          <p class="card-text">{{ metodo.descripcion }}</p>
          <p v-if="metodo.info" class="card-text letra-peq"> {{ metodo.info }}</p>
          <!-- <ul class="list-group-flush metodo-pago ps-0">
            <li class="list-group-item" v-for="instruccion in metodo.instrucciones" :key="instruccion">{{ instruccion }}</li>
          </ul> -->
          
          <button v-if = "metodo.id === metodoSeleccionado" 
            @click="seleccionarMetodo(metodo.id)" class="btn btn-primary ">
            <i  class="bi-check-circle"> </i> Seleccionado
          </button>
          
          <button v-else 
            @click="seleccionarMetodo(metodo.id)" class="btn btn-outline-secondary">
            <i  class="bi-circle"> </i> Seleccionar
          </button>

        </div>
      </div>
    </div>

  </div>
</template>
  
<script setup>

import {defineEmits,defineProps,watch,ref, onMounted, onBeforeMount} from "vue"
const metodosPago = [
  {
    id: 'transferencia',
    nombre: 'Transferencia, Pago Móvil o PDV* ',
    info: 'PDV solo para retiros en tienda',
    descripcion: 'Recibira por correo electrónico o teléfono los datos de transferencia o pago móvil',
    instrucciones: [
      'Nombre del banco: [Nombre del banco]',
      'Número de cuenta: [Número de cuenta]',
      'Tipo de cuenta: [Tipo de cuenta]',
      // ... otras instrucciones
    ],
  },
  {
    id: 'zelle',
    nombre: 'Zelle',
    descripcion: 'Las transferencias por Zelle se realizan al correo que se te enviara por correo electrónico o teléfono. Recuerda guardar el comprobante.',
    instrucciones: [
      'Envía los fondos a: [Correo para Zelle]',
      'Haz una captura de pantalla del pago',
      'Envía la captura de pantalla, junto con el correo del emisor y la fecha, a nuestro correo electrónico o teléfono: [Correo de la tienda]',
      // ... otras instrucciones
    ],
  },
  {
    id: 'transferencia-panama',
    nombre: 'Transferencia de Banco en Panamá',
    descripcion: 'Los datos de transferencia a Banco Mercantil de Panamá se te enviaran por correo electrónico o teléfono',
    instrucciones: [
      'Banco: Banco Mercantil',
      'Número de cuenta: [Número de cuenta]',
      'Tipo de cuenta: [Tipo de cuenta]',
      // ... otras instrucciones
    ],
  },
  // ... otros métodos de pago
];
const metodoSeleccionado = ref('');

onBeforeMount(()=>{
  metodoSeleccionado.value="";
})

const seleccionarMetodo = (metodoId) => {
  metodoSeleccionado.value = metodoId;
};


const getImagen = (metodoId) =>
{
  // Retorna la ruta de la imagen según el método seleccionado (ajusta según tus necesidades)
  return `/images/methods/${metodoId}.svg`;
  // return `/images/methods/online-buy.jpg`;
};

const props = defineProps({
  "datosPagos": { required: true }
})

const emit = defineEmits(["update"])
watch(metodoSeleccionado, (n, v, c) =>
{
  emit("update", { type: "pago", data: n })
})

onMounted(()=>{
  metodoSeleccionado.value = props.datosPagos ?? "";
})
</script>
  

<style lang="scss" scoped>
.metodo-pago{
  li {
    font-size: .8rem;
  }
}

.letra-peq{

  font-size: .8rem;
}
</style>