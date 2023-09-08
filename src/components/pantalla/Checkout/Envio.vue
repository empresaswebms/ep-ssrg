<template>
  <div>
    <h2>Información de Envío</h2>
    <div class="mb-3">
      <label for="metodoEnvio">Método de Envío</label>
      <select id="metodoEnvio" 
      v-model="metodoEnvio" 
      class="form-control">
        <option value="">Selecciona un metodo de envio</option>
        <option value="retiro">Retiro en tienda</option>
        <option value="liberty">Envío gratuito por Liberty Express</option>
        <option value="cobro">Cobro a destino por otras agencias</option>
      </select>
    </div>
    <div v-if="metodoEnvio === ''" class="mb-3">
      <p>Selecciona un metodo de envio. </p>
      <p>Envio gratis solo aplica a envios por Liberty Express</p>
    </div>
    <div v-if="metodoEnvio === 'retiro'" class="mb-3">
      <label for="nombreRetiro">Nombre de la persona para retiro</label>
      <input type="text" id="nombreRetiro" v-model="nombreRetiro" placeholder="Opcional" aria-placeholder="Opcional"
      class="form-control">
    </div>
    <div v-if="metodoEnvio === 'liberty'" class="mb-3">
      <label for="agenciaLiberty">Agencia de Liberty Express</label>
      <input type="text" id="agenciaLiberty" v-model="agenciaLiberty" class="form-control">
    </div>
    <div v-if="metodoEnvio === 'cobro'" class="mb-3">
      <label for="empresaCobro">Empresa</label>
      <input type="text" id="empresaCobro" v-model="empresaCobro" class="form-control">
      <label for="estadoCobro">Estado</label>
      <input type="text" id="estadoCobro" v-model="estadoCobro" class="form-control">
      <label for="ciudadCobro">Ciudad</label>
      <input type="text" id="ciudadCobro" v-model="ciudadCobro" class="form-control">
      <label for="agenciaCobro">Sucursal</label>
      <input type="text" id="agenciaCobro" v-model="agenciaCobro" class="form-control">
    </div>
  </div>
</template>
  
<script setup>

import { defineEmits, defineProps, watch, reactive, ref } from "vue"
import Auth from "@/js/firebase/AuthHelper"
const emit = defineEmits(["update"])

const auth = Auth.get();

const datoEnvio = reactive({
  metodoEnvio:'',
  nombreRetiro:'',
  agenciaLiberty:'',
  empresaCobro:'',
  estadoCobro:'',
  ciudadCobro:'',
  agenciaCobro:'',
})
;

const metodoEnvio = ref('');
const nombreRetiro = ref('');
const agenciaLiberty = ref('');
const empresaCobro = ref('');
const estadoCobro = ref('');
const ciudadCobro = ref('');
const agenciaCobro = ref('');

// watch(datoEnvio, (n) => { emit("update", { type: "envio", data: n }) })

watch(metodoEnvio, (n) => { datoEnvio.metodoEnvio = n; updateData(); })
watch(nombreRetiro, (n) => { datoEnvio.nombreRetiro = n; updateData(); })
watch(agenciaLiberty, (n) => { datoEnvio.agenciaLiberty = n; updateData(); })
watch(empresaCobro, (n) => { datoEnvio.empresaCobro = n; updateData(); })
watch(estadoCobro, (n) => { datoEnvio.estadoCobro = n; updateData(); })
watch(ciudadCobro, (n) => { datoEnvio.ciudadCobro = n; updateData(); })
watch(agenciaCobro, (n) => { datoEnvio.agenciaCobro = n; updateData(); })

const updateData = () =>
{
  emit("update", { type: "envio", data: datoEnvio })
}
</script>