<template>
    <div class="mb-3">
        <label for="#">{{ titulo }}</label>
            <select class="form-control form-select-lg mb-3" :name="titulo"  @change="itemChange($event)">
                    <option v-if="placeholder" value="">{{ placeholder }}</option>
                    <option v-for="opcion in opciones" :key="opcion" :value="valor(opcion)">
                        {{ texto(opcion) }}
                    </option>
                </select>
    </div>
</template>

<script setup>

import { defineProps, defineEmits, } from 'vue';
const emit = defineEmits(["itemSelected"])

const props = defineProps({
    id: {
        required: true,
        type: String
    },

    titulo: {
        required: true,
        type: String
    },

    placeholder: {
        required: false,
        type: String
    },

    opciones: {
        type: Array,
    },
    conf: {
        type: Object,
    }
})

function valor(data)
{
    if (props.conf)
        return data[props.conf.id];
    return data;
}
function texto(data)
{
    if (props.conf)
        return data[props.conf.txt];
    return data;
}

function itemChange(e)
{
    emit("itemSelected", e.target.selectedOptions[0].value)
}


</script>

<style lang="scss" scoped></style>