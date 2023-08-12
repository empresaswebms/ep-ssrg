<template>
  <div class="form-group">
    <label for="#">{{ titulo }}</label>
    <div class="form-field">
      <div class="select-wrap">
        <div class="icon"><span class="ion-ios-arrow-down"></span></div>
        <select name="" id="{{ id }}" class="form-control">
          <option :v-if="placeholder" value="">{{ placeholder }}</option>
          <option :v-for="opcion in opciones" :key="opcion" :value="opcion">{{opcion}}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
    id:{
        required:true,
        type:String
    },
    
    titulo:{
        required:true,
        type:String
    },
    
    placeholder:{
        required:false,
        type:String
    },
    
    opciones:{
        required:false,
        type:Array
    }
})
</script>

<style lang="scss" scoped>
</style>