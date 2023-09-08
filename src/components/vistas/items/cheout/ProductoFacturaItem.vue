<template>
    <li class="item-factura list-group-item d-flex justify-content-between lh-sm">
        <img class="" :src="img" :alt="titulo +'. '+ desc">
        <div>
            <h6 class="my-0">{{titulo}}</h6>
            <small class="text-muted">{{desc}}</small>
        </div>
        <span class="text-muted">{{` ${unidades}u x $${precio} = ${ unidades*precio}`}}</span>
    </li>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    img:{ type:String, required:false,default:'/images/placeholder_product.jpg' },
    titulo:{ type:String, required:true },
    desc:{ type:String, required:true },
    unidades:{ type:String, required:true },
    precio:{ type:String, required:true },
})
</script>

<style lang="scss" scoped>
.item-factura {
    img {
        max-height: 40px;
        max-width: 40px;
        object-fit: cover;
    }
}
</style>