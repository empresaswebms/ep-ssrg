<template>
    <div>
        <PerfilUsuario></PerfilUsuario>
        <!-- <button class="btn btn-primary" @click="cerrarSesion($router)">Cerrar sesión</button> -->
    </div>
</template>

<script setup>

import PerfilUsuario from '@/components/vistas/auth/PerfilUsuario.vue';


import firebase from 'firebase/compat/app';
import AuthHelper from '@/js/firebase/AuthHelper';
const auth= AuthHelper.get()

import { useRouter } from 'vue-router';
const router = useRouter()



function cerrarSesion(){
    auth.signOut()
    .then((v)=>{
        router.push("/");
    });
}

</script>

<style lang="scss" scoped>

</style>