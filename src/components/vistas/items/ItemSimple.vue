<template>
	<select name="" id="select-marcas" class="form-control" @change="itemChange($event)" >
          <!-- <option :v-if="placeholder" value="">{{ placeholder }}</option> -->
          <option v-for="opcion in items" :key="opcion" :value="opcion">{{opcion}}</option>
  			</select>

</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
    items:{ type:Array }
})
</script>

<style lang="scss" scoped>

</style>