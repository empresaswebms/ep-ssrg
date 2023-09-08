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
                        <span>Finalizar compra<i class="ion-ios-arrow-forward"></i></span>
                    </p>
                    <h1 class="mb-3 bread">Finzalizando compra</h1>
                    <p class="">Asistente de compra</p>
                </div>
            </div>
        </div>
    </section>
    <div class="">

        <div class="container " id="pasosCompraTabs">
            <ul class="nav nav-pills mb-3">
                <li class="nav-item" v-for="(step, index) in steps" :key="index">
                    <a class="nav-link" :class="{ active: currentStep === index }"
                        :style="currentStep > index ? 'color: #198754 !important;' : ''">
                        <!-- @click="setCurrentStep(index)" -->
                        <i :class="step.icon"></i> {{ step.label }}
                    </a>
                </li>
            </ul>
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-body">
                            <finalizado v-if="procesoExitoso === true"></finalizado>
                            <component v-if="procesoExitoso === false" 
                                :is="currentStepComponent" @update="updateData"
                                @volver-paso="setStep" 
                                :datosFactura="datosFactura" 
                                :datosEnvio="datosEnvio"
                                :datosPago="datosPago" />
                            <div class="mt-3" v-if="procesoExitoso === false">
                                <button class="btn btn-secondary me-4" 
                                    @click="prevStep" 
                                    :disabled="currentStep === 0" >
                                    Anterior
                                </button>

                                <button class="btn btn-primary"
                                    v-if="!stepComplete[steps[currentStep].id] && (currentStep !== steps.length - 1)"
                                    disabled>
                                    Siguiente
                                </button>
                                <button class="btn btn-primary" 
                                    @click="nextStep"
                                    v-if="stepComplete[steps[currentStep].id] && (currentStep !== steps.length - 1)">
                                    Siguiente
                                </button>

                                <button class="btn btn-primary" 
                                    @click="finishChekout"
                                    v-if="currentStep === steps.length - 1">
                                    Proceder
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <modal-aviso id="aviso" titulo="Formulario incompleto"
        asunto="Complete todos los datos del formulario para procsar la compra" />
    <modal-aviso id="ProcesoTerminado" titulo="Compra finalizada"
        asunto="Puede revisar su correo y confirmar los datos. Cuando realice el pago, vaya a Pagos" />
</template>
  
<script setup>
import { ref, watch, reactive, computed, onBeforeMount, onMounted } from 'vue';
import Auth from '@/js/firebase/AuthHelper';
import fetcher from "@/js/web/fetcher"
import { getDoc, doc } from "firebase/firestore"
import { getData,  } from '@/js/CartApp/CartPlugin';
import ModalAviso from './ModalAviso.vue';
import DatabaseLocal from '@/js/databaseLocal'
import Step1 from './Facturacion.vue';
import Step2 from './Envio.vue';
import Step3 from './MetodoPago.vue';
import Step4 from './Resumen.vue';
import Finalizado from './Finalizado.vue';

import bootstrap from 'bootstrap';

import { animarElementos, scrollToElement } from "@/js/views/animate"

const auth = Auth.get();


const stepComplete = reactive({ factura: false, envio: false, pago: false, resumen: true });
const currentStep = ref(0);

const datosFactura = ref({});
const datosEnvio = ref({});
const datosPago = ref("");
const procesoExitoso = ref(false);


onBeforeMount(async () =>
{
    // getDoc(firestore,doc("usuarios", auth.currentUser.providerId))
    // .then(snap=>{
    //     console.log("snap.data()")
    //     console.log(snap.data())
    // })
    // .catch(err => {
    //     console.log("err")
    //     console.log(err)
    // })

    fetcher.getData("datoscliente",
        { userTokenId: await auth.currentUser.getIdToken(auth) },
        mostrarData)


    datosFactura.value = DatabaseLocal.loadData("factura",
        {
            nombre: auth.currentUser.displayName,
            correo: auth.currentUser.email,
            telefono: auth.currentUser.phoneNumber,
        }
    )

    datosEnvio.value = DatabaseLocal.loadData("envio", {})
    datosPago.value = DatabaseLocal.loadData("pago")
})
watch(datosFactura, (n)=>{
    console.log("Datos factura actualizados",JSON.parse(JSON.stringify(n)))
})
onMounted(() =>
{

    animarElementos()
})
const steps = [
    { id: "factura", label: 'Datos de factura', icon: "bi-receipt", component: Step1 },
    { id: "envio", label: 'Datos de envio', icon: "bi-box-seam", component: Step2 },
    { id: "pago", label: 'Metodo de pago', icon: "bi-wallet", component: Step3 },
    { id: "resumen", label: 'Resumen de compra', icon: "bi-cart-check", component: Step4 },
];

const currentStepComponent = computed(() =>
{
    return steps[currentStep.value].component;
});


const setStep = (step) =>
{
    currentStep.value = step;
    scrollToElement("pasosCompraTabs")
}

const nextStep = () =>
{
    if (currentStep.value < steps.length - 1)
    {
        currentStep.value++;
        scrollToElement("pasosCompraTabs")
    }
    console.log(stepComplete)
};

const prevStep = () =>
{
    if (currentStep.value > 0) { currentStep.value--; }
};

const updateData = (data) =>
{
    console.log("Assistant reactive =>", data)
    switch (data.type)
    {
        case "factura": {
            datosFactura.value = data.data
        }
        case "envio": {
            datosEnvio.value = data.data
        }
        case "pago": {
            datosPago.value = data.data
        }

    }
    check(data);
    DatabaseLocal.saveData(data.type, data.data);
}

const check = (data) =>
{
    var datos = data.data;
    switch (data.type)
    {
        case "factura": {
            if (Object.keys(datos).length > 0)
                stepComplete.factura =
                    (datos.nombre ? datos.nombre.length > 2 : false) &&
                    (datos.telefono ? datos.telefono.length > 2 : false) &&
                    (datos.direccion ? datos.direccion.length > 2 : false) &&
                    (datos.estado ? datos.estado.length > 2 : false) &&
                    (datos.ciudad ? datos.ciudad.length > 2 : false)
            else
                stepComplete.factura = false;
            break;
        }
        case "envio": {
            if (Object.keys(datos).length > 0)
            {
                if (datos.metodoEnvio == "retiro")
                    stepComplete.envio = true
                if (datos.metodoEnvio == "liberty")
                    stepComplete.envio = datos.agenciaLiberty.length > 2
                if (datos.metodoEnvio == "cobro")
                    stepComplete.envio =
                        (datos.empresaCobro ? datos.empresaCobro.length > 2 : false) &&
                        (datos.estadoCobro ? datos.estadoCobro.length > 2 : false) &&
                        (datos.ciudadCobro ? datos.ciudadCobro.length > 2 : false) &&
                        (datos.agenciaCobro ? datos.agenciaCobro.length > 2 : false)
            } else
            {
                stepComplete.envio = false;
            }
            break;
        }
        case "pago": {
            stepComplete.pago = datos !== "";
            break;
        }
    }
}
const finishChekout = async () =>
{
    fetcher.postData("api/generarCompra", {
        items: JSON.parse(JSON.stringify(getData().articles)),
        data: { factura: datosFactura.value, envio: datosEnvio.value, pago: datosPago.value },
        userTokenId: await auth.currentUser.getIdToken()
    })
        .then(rst =>
        {
            console.log(rst);
            procesoExitoso.value = true;
            scrollToElement("pasosCompraTabs")

        })
        .catch(rsn =>
        {
            console.log(rsn)
            new bootstrap.Modal('#aviso', options).show();
        })
}
watch(stepComplete, (v) =>
{
    console.log("Pasos reactivos =>", v)
    console.log("Paso actual =>", stepComplete[steps[currentStep.value].id]);
})




const mostrarData = async (res) =>
{
    const data = {
        nombre: res.d.Nombre,
        telefono: res.d.Telefono,
        direccion: res.d.Direccion,
        estado: res.d.Estado,
        ciudad: res.d.Ciudad,
        rif: res.d.TipoPersona + "-" + res.d.Cedula,
    }
    console.log("Datos factura", data);
    updateData({ type: "factura", data: data })
}

</script>

<style lang="scss"></style>

