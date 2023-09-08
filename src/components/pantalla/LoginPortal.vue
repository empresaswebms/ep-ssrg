<template>
    <section class="hero-wrap hero-wrap-3 js-fullheight" style="background-image: url('/images/bg_2.jpg');"
        data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
            <div class="row g-0 slider-text js-fullheight align-items-end justify-content-start">
                <div class="col-md-9 ftco-animate pb-5">
                    <p class="breadcrumbs">
                        <span class="me-2">
                            <router-link to="/">Inicio <i class="ion-ios-arrow-forward"></i> </router-link>
                        </span>
                        <span>Mi Cuenta<i class="ion-ios-arrow-forward"></i></span>
                    </p>
                    <h1 class="mb-3 bread">Iniciar sesión</h1>
                    <p class="">Acceso a tu cuenta</p>
                </div>
            </div>
        </div>
    </section>
    <div class="hello text-center">
        <h1>Bienvenido</h1>
        <p>Crea una cuenta o ingresa con tu correo electroncico Google</p>
        <div id="firebaseui-auth-container"></div>
        <div id="loader">Cargando...</div>
        <br>

    </div>
</template>
  
<script setup>
import { ref,watch, onMounted } from 'vue';

// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';

import { firebaseConfig } from '@/js/firebase/config'
const app = firebase.initializeApp(firebaseConfig);
import * as firebaseui from 'firebaseui'
import { useRouter } from 'vue-router';


import 'firebaseui/dist/firebaseui.css'
import { getAuth, signOut,  setPersistence, browserLocalPersistence} from "firebase/auth";

import { animarElementos } from "@/js/views/animate"

const router = useRouter()
var auth = getAuth(app);
const user = ref(null);
const isSignedIn = ref(false);

setPersistence(auth, browserLocalPersistence)

watch(isSignedIn,redireccion)

const uiConfig = {
    signInFlow: 'popup',
    signinSuccessUrl: "/perfil",
    signInOptions: [
        //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        signInSuccessWithAuthResult: function (authResult)
        {
            user.value = authResult.user.displayName;
            console.log(authResult)
            isSignedIn.value = true;
            redireccion(true)
            console.log('Signed in by user ' + user.value);

            // so it doesn't refresh the page
            return false;
        },
        uiShown: function ()
        {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
        }
    }
}

function redireccion(n){
    if (n){
        router.push('/perfil')
        console.log("Debe redireccionar")
        window.location.reload();
    }
}

const handleSignOut = () =>
{
    signOut(auth).then(() =>
    {
        // Sign-out successful.
        user.value = null;
        isSignedIn.value = false;
        console.log('Signed out');
        ui.start('#firebaseui-auth-container', uiConfig);
    }).catch((error) =>
    {
        // An error happened.
        console.log(error);
    });
}

onMounted(() =>
{
animarElementos()
    console.log("auth.currentUser");
    console.log(auth.currentUser);
    // Initialize the FirebaseUI Widget using Firebase.
    // setPersistence(auth,null).then(()=>{
        var ui = new firebaseui.auth.AuthUI(auth);
        ui.start('#firebaseui-auth-container', uiConfig);
    // })

})

</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>