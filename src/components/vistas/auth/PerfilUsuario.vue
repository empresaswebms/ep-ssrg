<template>
    <section class="hero-wrap hero-wrap-3 js-fullheight" style="background-image: url('/images/bg_2.jpg');"
        data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
            <div class="row g-0 slider-text js-fullheight align-items-end justify-content-start">
                <div class="col-md-9 ftco-animate pb-5">
                    <p class="breadcrumbs">
                        <span class="me-2">
                            <router-link to="/">Inicio <i class="ion-ios-arrow-forward"></i> </router-link>
                        </span>
                        <span>Perfil<i class="ion-ios-arrow-forward"></i></span>
                    </p>
                    <h1 class="mb-3 bread">{{ user.name }}</h1>
                    <p class="">{{ user.email }}</p>
                </div>
            </div>
        </div>
    </section>

    <div class="row gutters mb-4 ms-4 me-4 mt-4">
        <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div class="card h-100">
                <div class="card-body">
                    <div class="account-settings">
                        <div class="user-profile">
                            <div class="user-avatar">
                                <img :src="user.photo" :alt="user.name">
                            </div>
                            <h5 class="user-name">{{ user.name }}</h5>
                            <h6 class="user-email">{{ user.email }}</h6>
                        </div>
                        <div class="about">
                            <h5>Inicio de sesión</h5>
                            <p>{{ convertirFecha(user.lastLogin) }}</p>
                            <p>{{ tiempoTranscurrido(user.lastLogin) }}</p>
                            <h5>Registro</h5>
                            <p>{{ convertirFecha(user.register) }}</p>
                            <h5 v-if="user.verified">Cuenta verificada <i class="bi bi-check2-circle text-primary"></i></h5>
                            <h5 v-else> Cuenta sin verificar <i class="bi bi-exclamation-circle text-danger"></i></h5>
                        </div>
                        <div>

                            <button class="btn btn-primary" @click="cerrarSesion($router)">Cerrar sesión</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 ">
            <div class="card h-100">
                <div class="card-body">
                    <div class="row gutters">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <h6 class="mb-2 text-primary">Datos de facturación</h6>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label for="fullName">Nombre</label>
                                <input type="text" class="form-control" id="fullName" v-model="nombreCliente"
                                    :disabled="actualizando" placeholder="Ingrese su nombre legal">
                            </div>
                        </div>
                        <!-- <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label for="eMail">Correo</label>
                                <input type="email" class="form-control" id="eMail" v-model="correoCliente"
                                    :disabled="actualizando" placeholder="Ingrese su correo">
                            </div>
                        </div> -->
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label for="phone">Teléfono</label>
                                <input type="tel" class="form-control" id="phone" v-model="telefonoCliente"
                                    :disabled="actualizando" placeholder="Ingrese su telefono">
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label for="cedula">Cédula/RIF</label>
                                <div class="d-flex flex-row">
                                    <select class="form-control col-3" v-model="tipoCliente" :disabled="actualizando"
                                        aria-label="Default select example">
                                        <option value="V">V</option>
                                        <option value="J">J</option>
                                        <option value="E">E</option>
                                        <option value="P">P</option>
                                        <option value="G">G</option>
                                    </select>
                                    <input type="number" class="form-control flex-grow-1" id="cedula"
                                        v-model="cedulaCliente" :disabled="actualizando"
                                        placeholder="Ingrese su cédula o RIF">
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="row gutters">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <h6 class="mt-3 mb-2 text-primary">Dirección del cliente</h6>
                        </div>

                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <!-- <SelectorForm id="estados" titulo="Estado" :opciones="estados" :conf="{ id: 'id', txt: 'nombre' }"
                                placeholder="Seleccione un estado" /> -->

                            <div class="form-group">
                                <label for="phone">Estado</label>
                                <select class="form-control" v-model="estadoCliente" :disabled="actualizando"
                                    aria-label="Default select example">
                                    <option v-for="item in estados" :key="item" :value="item.id">{{ item.nombre }}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <!-- <SelectorForm id="ciudades" titulo="Ciudad" :opciones="ciudades" :conf="{ id: 'id', txt: 'nombre' }" @item-selected=""
                                placeholder="Seleccione una ciudad" /> -->

                            <div class="form-group">
                                <label for="phone">Ciudad</label>
                                <select class="form-control" v-model="ciudadCliente" :disabled="actualizando"
                                    aria-label="Default select example">
                                    <option v-for="item in ciudades" :key="item" :value="item.id">{{ item.nombre }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label for="Direccion">Dirección</label>
                                <input type="name" class="form-control" v-model="dirCliente" :disabled="actualizando"
                                    id="Direccion" placeholder="Dirección">
                            </div>
                        </div>
                        <!--                         
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label for="zIp">Sector</label>
                                <input type="text" class="form-control" id="zIp" placeholder="Zip Code">
                            </div>
                        </div> -->
                    </div>
                    <div class="row gutters">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="text-right">
                                <button type="button" id="submit" @click="actualizarcliente" name="submit"
                                    class="btn btn-primary me-2" :disabled="actualizando">Actualizar</button>
                                <router-link  to="/comprar" class="btn btn-primary ms-2"
                                    :class="{ disabled: itemsCarrito == 0 }" data-bs-toggle="tooltip" data-bs-placement="top"
                                    data-bs-title="Debe de tener algun articulo en el carrito para continuar">Completar
                                    pedido</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SelectorForm from "@/components/vistas/form/SelectForm.vue"
import DatabaseLocal from "@/js/databaseLocal"
import fetcher from "@/js/web/fetcher"
import { onBeforeMount, ref, watch } from "vue"
import Auth from "@/js/firebase/AuthHelper"
import { Usuario } from "@/js/Modelos/Usuario"
import { tiempoTranscurrido, convertirFecha } from "@/js/app/"
import { animarElementos } from "@/js/views/animate"
import { useRouter } from 'vue-router';
import { getData } from "@/js/CartApp/CartPlugin"
const router = useRouter();


import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const toastConfig = { autoClose: 5000, position: toast.POSITION.TOP_CENTER };

animarElementos();

var auth = Auth.get();
const user = {
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
    verified: auth.currentUser.emailVerified,
    register: auth.currentUser.metadata.creationTime,
    lastLogin: auth.currentUser.metadata.lastSignInTime,
    photo: auth.currentUser.photoURL,
}
var estados = ref();
var ciudades = ref();

var actualizando = ref(true);
const nombreCliente = ref();
const correoCliente = ref();
const telefonoCliente = ref();
const tipoCliente = ref();
const cedulaCliente = ref();
const dirCliente = ref();
const estadoCliente = ref();
const ciudadCliente = ref();

fetcher.getData("geo/estados", null, (res) =>
{
    estados.value = res.d
})

watch(estadoCliente, (n) =>
{
    if (n)
    {
        fetcher.getData("geo/ciudades", { id: n }, (res) =>
        {
            console.log(n)
            ciudades.value = res.d
        })
    }
})
var itemsCarrito = ref(0);

var infoCart = getData();
// debugger;
itemsCarrito.value = infoCart.count;

// fetcher.getData("geo/ciudades",{id},(res)=>{
//     estados.value = res.d
// })
onBeforeMount(async () =>
{
    const data = new Usuario(DatabaseLocal.loadData("factura", {}));
    nombreCliente.value = data.nombre;
    tipoCliente.value = data.tipoPersona;
    cedulaCliente.value = data.cedula;
    correoCliente.value = data.correo;
    telefonoCliente.value = data.telefono;
    estadoCliente.value = data.estado;
    ciudadCliente.value = data.ciudad;
    dirCliente.value = data.direccion;

    fetcher.getData("datoscliente",
        { userTokenId: await auth.currentUser.getIdToken(auth) },
        mostrarData)
})

const mostrarData = async (res) =>
{
    if (res.d)
    {

        const usuario = new Usuario(res.d)
        actualizando.value = false
        console.log(res);
        nombreCliente.value = usuario.nombre
        tipoCliente.value = usuario.tipo
        cedulaCliente.value = usuario.cedula
        correoCliente.value = usuario.correo
        telefonoCliente.value = usuario.telefono
        estadoCliente.value = usuario.estado
        ciudadCliente.value = usuario.ciudad
        dirCliente.value = usuario.direccion

        DatabaseLocal.saveData("factura", usuario)
    }

}
const actualizarcliente = async () =>
{
    if (nombreCliente.value &&
        tipoCliente.value &&
        cedulaCliente.value &&
        correoCliente.value &&
        telefonoCliente.value &&
        estadoCliente.value &&
        ciudadCliente.value &&
        dirCliente.value)
    {

        let form = new FormData();
        form.append("userTokenId", await auth.currentUser.getIdToken(auth));
        form.append("nombre", nombreCliente.value);
        form.append("tipoPersona", tipoCliente.value);
        form.append("cedula", cedulaCliente.value);
        form.append("correo", correoCliente.value);
        form.append("telefono", telefonoCliente.value);
        form.append("estado", estadoCliente.value);
        form.append("ciudad", ciudadCliente.value);
        form.append("direccion", dirCliente.value);

        actualizando.value = true;
        fetcher.postData("actualizarcliente", form).then((res) =>
        {
            const resp = JSON.parse(res)
            console.log(resp);
            if (resp.d)
            {
                DatabaseLocal.saveData("factura", {
                    nombre: nombreCliente.value     || "",
                    tipoPersona: tipoCliente.value  || "",
                    cedula: cedulaCliente.value     || "",
                    correo: correoCliente.value     || "",
                    telefono: telefonoCliente.value || "",
                    estado: estadoCliente.value     || "",
                    ciudad: ciudadCliente.value     || "",
                    direccion: dirCliente.value     || ""
                })
                // alert("Los datos fueron actualizados")

                toast.success("Los datos fueron actualizados", toastConfig);
            }
            else

                toast.error("Ocurrio un error. ¿Estas conectado a internet?", toastConfig);
            // alert("Error al actualizar: " + res.err)

        }).catch(err =>
        {
            console.debug(err)
            toast.error("Error al actualizar: " + err, toastConfig);
            // alert("Error al actualizar: " + err)
        }).finally(() =>
        {

            actualizando.value = false;
        })
    }
    toast.error("No has rellenado todos los datos", toastConfig);

}



function cerrarSesion()
{
    auth.signOut()
        .then((v) =>
        {
            router.push("/");
        });
}
</script>

<style lang="scss" scoped>
a.btn-primary {

}
</style>