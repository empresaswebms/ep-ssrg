<template>
    <!-- Modal de Bootstrap -->
    <div class="modal fade" tabindex="-1" ref="form-pago" id="form-pago">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Enviar comprobante de pago</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- Formulario aquí -->
                    <form @submit.prevent="submitForm">
                        <div class="mb-3">
                            <label for="tipoPago" class="form-label">Tipo de Pago</label>
                            <select class="form-select" id="tipoPago" v-model="selectedPayment" required>
                                <option value="" disabled>Seleccionar...</option>
                                <option value="transferencia">Transferencia o Pago Móvil</option>
                                <option value="zelle">Zelle</option>
                                <option value="bancoPanama">Banco en Panamá</option>
                            </select>
                        </div>
                        <!-- Campos específicos de cada opción de pago -->

                        <div v-if="selectedPayment.startsWith('transferencia')" class="mb-3">
                            <label for="numReferencia" class="form-label">Número de Referencia</label>
                            <input type="text" class="form-control" id="numReferencia" v-model="numReferencia" required>
                        </div>

                        <div v-if="selectedPayment === 'zelle'" class="mb-3">
                            <label for="correoZelle" class="form-label">Correo del que Pagó</label>
                            <input type="email" class="form-control" id="correoZelle" v-model="correoZelle" required>
                        </div>

                        <!-- Otros campos comunes -->

                        <div class="mb-3">
                            <label for="fechaTransferencia" class="form-label">Fecha</label>
                            <input type="date" class="form-control" id="fechaTransferencia" v-model="fechaTransferencia"
                                required>
                        </div>
                        <div class="mb-3">
                            <label for="montoTransferencia" class="form-label">Monto</label>
                            <input type="number" class="form-control" step=".01" id="montoTransferencia"
                                v-model="montoTransferencia" required>
                        </div>
                        <div class="mb-3">
                            <label for="numReciboTransferencia" class="form-label">Número de Recibo de Factura</label>
                            <input type="text" class="form-control" id="numReciboTransferencia" v-model="numRecibo"
                                required>
                        </div>

                        <button type="submit" class="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!--     
<div id="avisoModal" ref="aviso" class="modal-dialog modal-sm fade">
    <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="avisoModalLabel">{{ avisoInfo.asunto }}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div class="modal-body">
        {{ avisoInfo.cuerpo }}
      </div>
    </div>
  </div>
</div> -->
</template>
  
<script setup>
import { ref, reactive, onMounted } from 'vue';
import { postData } from '@/js/web/fetcher';
import Auth from '@/js/firebase/AuthHelper';
const auth = Auth.get();

const selectedPayment = ref('');
const numReferencia = ref('');
const fechaTransferencia = ref('');
const montoTransferencia = ref('');
const correoZelle = ref('');
const numRecibo = ref('');

const aviso = ref();

const avisoInfo = reactive({
    asunto: "",
    cuerpo: ""
});


const openModal = (asunto, cuerpo) =>
{
    // Limpiar los campos al abrir el modal

    // Mostrar el modal

    avisoInfo.asunto = asunto;
    avisoInfo.cuerpo = cuerpo;
    // closeModal()
    //  const modal = new bootstrap.Modal("#avisoModal",{focus:true});
    //  modal.show();
};

onMounted(() =>
{
    selectedPayment.value = '';
    numReferencia.value = '';
    fechaTransferencia.value = '';
    montoTransferencia.value = '';
    correoZelle.value = '';
    numRecibo.value = '';
})
const closeModal = () =>
{
    // Cerrar el modal
     const modal = new bootstrap.Modal("#form-pago");
     modal.hide();
};

const submitForm = () =>
{
    // Validar los datos antes de enviar
    if (isValid())
    {
        // Llamar a tu función AJAX para enviar los datos
        sendDataToServer();
    } else
    {
        // Mostrar un mensaje de error o realizar otras acciones si los datos no son válidos
        console.log('Datos inválidos');
    }
};

const isValid = () =>
{
    // Agregar lógica de validación aquí
    // Verificar que los campos requeridos estén completos
    return selectedPayment.value.startsWith('transferencia') ?
        ((numReferencia.value !== "") && (fechaTransferencia.value !== "") && (montoTransferencia.value !== "") && (numRecibo.value !== "")) :
        (correoZelle.value !== "")
    // Agregar otras condiciones de validación según tus requisitos
};

const sendDataToServer = async () =>
{

    console.log('Datos enviados al servidor', selectedPayment.value, numReferencia.value, fechaTransferencia.value, montoTransferencia.value, correoZelle.value, numRecibo.value);
    postData("api/sendVaucher", {
        selectedPayment: selectedPayment.value,
        numReferencia: numReferencia.value,
        fechaTransferencia: fechaTransferencia.value,
        montoTransferencia: montoTransferencia.value,
        correoZelle: correoZelle.value,
        numRecibo: numRecibo.value,
        userTokenId: await auth.currentUser.getIdToken()
    })
        .then(ok => {
            console.log("ok", ok);
            closeModal()
            alert("Se ha enviado el comprobante a ELEVAPUERTAS. Tambien recibiras una copia del comprobante.")
            
            selectedPayment.value="";
            numReferencia.value="";
            fechaTransferencia.value="";
            montoTransferencia.value="";
            correoZelle.value="";
            numRecibo.value="";
        })
        .catch(ko => {
            console.log("ko", ko);
            alert("Ocurrio un problema. Si persiste el problema, puedes enviar los datos por WhatsApp o  Correo")
        })

};
</script>
  
<style scoped>
/* Estilos específicos para este componente */
</style>
  