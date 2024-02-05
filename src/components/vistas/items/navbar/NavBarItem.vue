<template>
  <li class="nav-item">
    <a v-if="type=='a'" class="nav-link" href="{{ href }}" >
      <i v-if="icon!=undefined" :class="icon"> </i> {{ titulo }} 
    </a>
    <router-link :to="dir" class="nav-link" v-else >  
      <i v-if="icon!=undefined" :class="icon"> </i> {{ titulo }}
    </router-link>
  </li>
</template>

<script setup>
import {defineProps, onMounted} from 'vue';
const props = defineProps({
  dir: { type: String,  },
  icon: { type: String,  },
  titulo: { type: String, required:true },
  type: { type: String, required:false },
})

onMounted(()=>{
  console.log(props.dir);
})

</script>

<style>
</style>