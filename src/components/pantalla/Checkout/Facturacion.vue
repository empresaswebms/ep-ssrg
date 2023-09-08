<template>
  <div>
    <h2>Información del Cliente</h2>
    <div class="mb-3">
      <label for="nombre">Nombre y Apellido</label>
      <input type="text" id="nombre" v-model="nombre" class="form-control">
    </div>
    <div class="mb-3">
      <label for="telefono">Teléfono</label>
      <input type="tel" id="telefono" v-model="telefono" class="form-control">
    </div>
    <div class="mb-3">
      <label for="direccion">Dirección</label>
      <input type="text" id="direccion" v-model="direccion" class="form-control">
    </div>
    <div class="mb-3">
      <label for="direccion">Cédula/RIF</label>
      <input type="text" id="direccion" v-model="rif" class="form-control">
    </div>
    <div class="mb-3">
      <label for="direccion">Estado</label>
      <input type="text" id="estado" v-model="estado" class="form-control">
    </div>
    <div class="mb-3">
      <label for="direccion">Ciudad</label>
      <input type="text" id="ciudad" v-model="ciudad" class="form-control">
    </div>
  </div>
</template>
  
<script setup>
import { ref, reactive, defineProps, defineEmits, watch,onBeforeMount, onMounted } from 'vue';


const needFetchData = ref()

var cliente = reactive({
  nombre: "",
  telefono: "",
  direccion: "",
  estado: "",
  ciudad: "",
  rif: "",
});

const nombre = ref("")
const telefono = ref("")
const direccion = ref("")
const estado = ref("")
const ciudad = ref("")
const rif = ref("")

const props = defineProps({
  "datosFactura": { required: true }
})
const emit = defineEmits(["update"]);

watch(cliente, (n) =>
{
  console.log("Factura reactive =>", n)
  emit("update", { type: "factura", data: n })
})

onBeforeMount(async () =>
{
    fetcher.getData("datoscliente",
        { userTokenId: await auth.currentUser.getIdToken(auth) },
        mostrarData)
})

onMounted(() =>
{

  cliente = {
    nombre: props.datosFactura.nombre,
    telefono: props.datosFactura.telefono,
    direccion: props.datosFactura.direccion,
    estado: props.datosFactura.estado,
    ciudad: props.datosFactura.ciudad,
    rif: props.datosFactura.rif,
  }

  nombre.value = props.datosFactura.nombre;
  telefono.value = props.datosFactura.telefono;
  direccion.value = props.datosFactura.direccion;
  estado.value = props.datosFactura.estado;
  ciudad.value = props.datosFactura.ciudad;
  rif.value = props.datosFactura.rif;
});

const mostrarData = async (res) =>
{
  cliente = {
        nombre: res.d.Nombre,
        telefono: res.d.Telefono,
        direccion: res.d.Direccion,
        estado: res.d.Estado,
        ciudad: res.d.Ciudad,
        rif: res.d.TipoPersona + "-" + res.d.Cedula,
    }
}

</script>