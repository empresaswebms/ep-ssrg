<template>
  <li id="pid-{{data.Id}}"
    class="list-group-item d-flex justify-content-between align-items-start">
    <img :src="data.Img"
      class="rounded mx-auto d-block" height="60px"
      :alt="data.Uso" />
    <div class="ms-2 me-auto">
      <div class="fw-bold">{{data.Uso}}</div>
      <span class="text-monospace">
        REF {{data.Precio}} x {{data.Cantidad}} u = {{data.Cantidad * data.Precio}}
      </span>
    </div>
    <span class="badge bg-danger rounded-pill" @click="$emit('eliminar',data.Id)"> X </span>
  </li>
</template>

<script setup>
import { ProductoCarrito } from "@/js/CartApp/Producto";
import { onMounted, defineProps, defineEmits } from "vue";

const props = defineProps({
  data:{ type: ProductoCarrito}
});

defineEmits(["eliminar"])

onMounted(() => {
  
  console.log(`REF ${props.data.Precio} x ${props.data.Cantidad} u = ${props.data.Cantidad * props.data.Precio}`);
});

</script>

<style lang="scss" scoped>
</style>