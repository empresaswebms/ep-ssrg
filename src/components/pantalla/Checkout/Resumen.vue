<template>
    <div>
        <h2>Resumen de Pedido</h2>
        <div class="mb-4">

            <div class="card" style="">
                <div class="card-body">
                    <h5 class="card-title">Información de Facturación</h5>
                    <p class="card-text">Nombre y Apellido: {{ datosFactura.nombre }}</p>
                    <p class="card-text">Teléfono: {{ datosFactura.telefono }}</p>
                    <p class="card-text">Dirección: {{ datosFactura.direccion }}</p>
                    <p class="card-text">Estado: {{ datosFactura.estado }}</p>
                    <p class="card-text">Ciudad: {{ datosFactura.ciudad }}</p>
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                        <span class="text-primary">Tu compra</span>
                        <span class="badge bg-primary rounded-pill">{{datos.count}}</span>
                    </h4>
                    <ul class="list-group mb-3">
                        <producto-factura-item  

                        v-for="item in datos.articles" :key="item"
                        :img="item.Img" :titulo="item.Uso" :desc="item.Cuerpo" 
                        :unidades="item.Cantidad" :precio="item.Precio" />
                        <li class="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>{{ datos.total }}</strong>
                        </li>
                    </ul>
                    <a href="#" @click="$emit('volver-paso',0)" class="card-link">Editar</a>
                </div>
            </div>
        </div>
        <div class="mb-4">

            <div class="card" style="">
                <div class="card-body">
                    <h5 class="card-title">Información de Envío</h5>
                    <p class="card-text">Método de Envío: {{ metodosEnvio[datosEnvio.metodoEnvio] }}</p>
                    <p class="card-text" v-if="datosEnvio.metodoEnvio === 'retiro'">Nombre de la persona para retiro: {{
                        datosEnvio.nombreRetiro }}</p>
                    <p class="card-text" v-if="datosEnvio.metodoEnvio === 'liberty'">Agencia de Liberty Express: {{
                        datosEnvio.agenciaLiberty }}</p>
                    <p class="card-text" v-if="datosEnvio.metodoEnvio === 'cobro'">Empresa: {{ datosEnvio.empresaCobro }}
                    </p>
                    <p class="card-text" v-if="datosEnvio.metodoEnvio === 'cobro'">Estado: {{ datosEnvio.estadoCobro }}</p>
                    <p class="card-text" v-if="datosEnvio.metodoEnvio === 'cobro'">Ciudad: {{ datosEnvio.ciudadCobro }}</p>
                    <p class="card-text" v-if="datosEnvio.metodoEnvio === 'cobro'">Agencia: {{ datosEnvio.agenciaCobro }}
                    </p>

                    <a href="#" @click="$emit('volver-paso',1)" class="card-link">Editar</a>
                </div>
            </div>

         </div>
        <div>

            <div class="card" style="">
                <div class="card-body">
                    <h5 class="card-title">Información de Método de Pago</h5>
                    
                    <p class="card-text" >Metodo de pago: {{ metodosPago[datosPago].nombre }}</p>
                    <p class="card-text" >Detalles: {{ metodosPago[datosPago].descripcion }}</p>
                    <ul>
                    <li class="my-0" v-for="instruccion in metodosPago[datosPago].instrucciones" :key="instruccion">
                        {{ instruccion }}
                    </li>
                </ul>
                    <a href="#" @click="$emit('volver-paso',2)" class="card-link">Editar</a>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>

import { defineEmits, defineProps, watch, ref } from "vue"
import { getData } from "@/js/CartApp/CartPlugin"
import ProductoFacturaItem from "@/components/vistas/items/cheout/ProductoFacturaItem.vue";


var datos = getData()
defineEmits(["volver-paso"])
const props = defineProps({
    datosFactura: { type: Object },
    datosEnvio: { type: Object },
    datosPago: { type: String },
})
const metodosPago = {
    'transferencia': {
        nombre: 'Transferencia, Pago Móvil o PDV * ',
        info: 'PDV solo para retiros en tienda',
        descripcion: 'Recibira por correo electrónico o teléfono los datos de transferencia o pago móvil',
        instrucciones: [
            'Nombre del banco: [Nombre del banco]',
            'Número de cuenta: [Número de cuenta]',
            'Tipo de cuenta: [Tipo de cuenta]',
            // ... otras instrucciones
        ]
    },
    'zelle': {
        nombre: 'Zelle',
        descripcion: 'Las transferencias por Zelle se realizan al correo que se te enviara por correo electrónico o teléfono. Recuerda guardar el comprobante.',
        instrucciones: [
            'Envía los fondos a: [Correo para Zelle]',
            'Haz una captura de pantalla del pago',
            'Envía la captura de pantalla, junto con el correo del emisor y la fecha, a nuestro correo electrónico o teléfono: [Correo de la tienda]',
            // ... otras instrucciones
        ]
    },
    'transferencia-panama': {
        nombre: 'Transferencia de Banco en Panamá',
        descripcion: 'Los datos de transferencia a Banco Mercantil de Panamá se te enviaran por correo electrónico o teléfono',
        instrucciones: [
            'Banco: Banco Mercantil',
            'Número de cuenta: [Número de cuenta]',
            'Tipo de cuenta: [Tipo de cuenta]',
            // ... otras instrucciones
        ]
    },

    // ... otros métodos de pago
}
    ;

const metodosEnvio = {
    retiro: "Retiro en tienda",
    liberty: "Envio gratis (Liberty Express)",
    cobro: "Cobro en destino",
}


</script>
  