<template>
  <div>
    <fieldset disabled>

      <h2>Información del Cliente</h2>
      <p class="text-muted">Para cambiar esta información, puedes hacerlo desde <RouterLink to="/perfil">Mi Cuenta
        </RouterLink>
      </p>
      <div class="mb-3">
        <label for="nombre">Nombre y Apellido</label>
        <input type="text" id="nombre" v-model="nombre" disable class="form-control">
      </div>
      <div class="mb-3">
        <label v-if="tipoPersona == 'V' || tipoPersona == 'E'" for="rif">Cédula</label>
        <label v-if="tipoPersona == 'P'" for="rif">Pasaporte</label>
        <label v-if="tipoPersona == 'J' || tipoPersona == 'G'" for="rif">RIF</label>
        <input type="text" id="rif" v-model="rif" disable class="form-control">
      </div>
      <div class="mb-3">
        <label for="correo">Correo</label>
        <input type="email" id="correo" v-model="correo" disable class="form-control">
      </div>
      <div class="mb-3">
        <label for="telefono">Teléfono</label>
        <input type="tel" id="telefono" v-model="telefono" disable class="form-control">
      </div>
      <div class="mb-3">
        <label for="direccion">Estado</label>
        <input type="text" id="estado" v-model="estado" disable class="form-control">
      </div>
      <div class="mb-3">
        <label for="direccion">Ciudad</label>
        <input type="text" id="ciudad" v-model="ciudad" disable class="form-control">
      </div>
      <div class="mb-3">
        <label for="direccion">Dirección</label>
        <input type="text" id="direccion" v-model="direccion" disable class="form-control">
      </div>
    </fieldset>
  </div>
</template>
  
<script setup>
import { ref, reactive, defineProps, defineEmits, watchEffect, onBeforeMount, onMounted } from 'vue';
import { Usuario } from "@/js/Modelos/Usuario"
import databaseLocal from '@/js/databaseLocal';
import moment from 'moment';
import fetcher from '@/js/web/fetcher'
import Auth from '@/js/firebase/AuthHelper';

var cliente = reactive({
  nombre: "",
  telefono: "",
  direccion: "",
  estado: "",
  ciudad: "",
  rif: "",
  tipoPersona: "",
  cedula: "",
  fecha: null,
});

const nombre = ref("")
const telefono = ref("")
const correo = ref("")
const rif = ref("")
const direccion = ref("")
const estado = ref("")
const ciudad = ref("")
const cedula = ref("")
const tipoPersona = ref("")
const fecha = ref("")

const auth = Auth.get();


const props = defineProps({
  "datosFactura": { required: true, type: Usuario }
})
const emit = defineEmits(["update"]);

watchEffect(() =>
{
  const valor = { type: "factura", data: { nombre: nombre.value, telefono: telefono.value, correo: correo.value, rif: rif.value, direccion: direccion.value, estado: estado.value, ciudad: ciudad.value, cedula: cedula.value, tipoPersona: tipoPersona.value, fecha: fecha.value, } }
  console.log("Factura reactive =>", valor)
  emit("update", valor)
})

onBeforeMount(async () =>
{
  console.debug("Solicitando datos onBeforeMount")
  fetcher.getData("datoscliente",
    { userTokenId: await auth.currentUser.getIdToken(auth) },
    mostrarData)
})

onMounted(() =>
{
  const localUser = databaseLocal.loadData("factura", {})
  const usuario = new Usuario(localUser)

  console.debug("Solicitando datos onMounter", usuario)

  if (usuario.fecha)
  {
    if (moment(usuario.fecha).isAfter(cliente.fecha))
    {
      // cliente = datosFacturacionUsuario

      nombre.value = usuario.nombre;
      telefono.value = usuario.telefono;
      correo.value = usuario.correo;
      rif.value = usuario.rif;
      direccion.value = usuario.direccion;
      estado.value = usuario.estado;
      ciudad.value = usuario.ciudad;
      cedula.value = usuario.cedula;
      tipoPersona.value = usuario.tipoPersona;
      fecha.value = usuario.fecha;
    }
  }
  
});

const mostrarData = async (res) =>
{
  console.debug("mostrarData", res)
  if (res.d)
  {
    const usuario = new Usuario(res.d)
    // const nuevoCliente = {
    nombre.value      = usuario.nombre
    telefono.value    = usuario.telefono
    correo.value      = usuario.correo
    rif.value         = usuario.rif
    direccion.value   = usuario.direccion
    estado.value      = usuario.estado
    ciudad.value      = usuario.ciudad
    cedula.value      = usuario.cedula
    tipoPersona.value = usuario.tipoPersona
    fecha.value       = usuario.fecha
    // };
    databaseLocal.saveData("factura", usuario)
  }
}

</script>