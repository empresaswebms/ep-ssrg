<template>
    <div class="input-group number-picker " :class="{ 'vertical': modoVertical }">
        <button @click="decrement" class="btn btn-outline-primary"><i class="bi bi-dash"></i></button>
        <input type="number" class="form-control text-center" :value="numeroValor" disabled />
        <button @click="increment" class="btn btn-outline-warning"><i class="bi bi-plus"></i></button>
    </div>
</template>
  
<script setup>
import { ref, toRefs, defineEmits, defineProps } from 'vue';

const props = defineProps({
    numero: {
        type: Number,
        default: 1
    },
    isVertical: {
        type: Boolean,
        default: false
    }
})
const numeroValor = ref(props.numero);
const modoVertical = ref(props.isVertical);
const emits = defineEmits(["valor"]);

const increment = () => {
    console.log("Aumenta de ", numeroValor.value)
    numeroValor.value = numeroValor.value + 1;
    console.log("Aumenta a", numeroValor.value)
    emits('valor', numeroValor.value); // Emitir el nuevo valor
};

const decrement = () => {
    if (numeroValor.value > 1)
    numeroValor.value = numeroValor.value - 1;
    emits('valor', numeroValor.value); // Emitir el nuevo valor
};

const updateValue = (event) =>
{
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue))
    {
        numeroValor.value = newValue;
        emits('valor', newValue); // Emitir el nuevo valor
    }
};
</script>
  
<style scoped>
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

input[type=number] { -moz-appearance:textfield; }

/* .number-picker {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 150px; 
  } 
  */

/* .number-picker.vertical {
    flex-direction: column;
    width: 40px; 
  } */

/* .number-picker button {
    width: 30px;
    height: 30px;
  } */</style>
  