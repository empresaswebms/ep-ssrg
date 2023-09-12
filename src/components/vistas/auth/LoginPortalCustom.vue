<template>
    <section class="hero-wrap hero-wrap-2 js-fullheight" style="background-image: url('/images/bg_2.jpg');"
        data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
            <div class="row g-0 slider-text js-fullheight align-items-end justify-content-start">
                <div class="col-md-9 ftco-animate pb-5">
                    <p class="breadcrumbs">
                        <span class="me-2">
                            <router-link to="/">Inicio <i class="ion-ios-arrow-forward"></i> </router-link>
                        </span>
                        <span>Otros productos<i class="ion-ios-arrow-forward"></i></span>
                    </p>
                    <h1 class="mb-3 bread">Lineas de productos</h1>
                    <p class="">Somos más que elevadores para autos</p>
                </div>
            </div>
        </div>
    </section>
    <div class="row">
        <div class="login col-6 col-sm-12 col-md-6 align-self-center">
            <div class="card ">
                <div class="card-header text-center">
                    Inicia sesión
                </div>
                <div class="card-body">
                    <!-- <form>
                        <div class="form-group">
                            <label for="emailUser">Correo electronico</label>
                            <input v-model="emailUser" type="email" class="form-control" id="emailUser"
                                placeholder="correo@ejemplo.com">

                        </div>
                        <div class="form-group">
                            <label for="passwordUser">Contraseña</label>
                            <input v-model="passwordUser" type="password" class="form-control" id="passwordUser"
                                placeholder="Contraseña">
                        </div>

                        <button type="submit" class="btn btn-primary">Ingresar</button>
                    </form> -->
                </div>
                <div class="card-footer ">
                    <button class="btn" @click="signInWithGoogle">Ingresar con Google</button>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup>
import { onMounted, ref ,watch} from "vue";

import Auth from "@/js/firebase/AuthHelper"
import { GoogleAuthProvider, signInWithEmailAndPassword, setPersistence, signInWithPopup, browserLocalPersistence } from "firebase/auth";


// Obtener la instancia de autenticación de Firebase
const auth = Auth.get()
setPersistence(auth, browserLocalPersistence)
// Crear el proveedor de Google
const provider = new GoogleAuthProvider();

var passwordUser = ref()
var emailUser = ref()
var user = ref()


watch(user,(v,o,c)=>{

})

// Crear una función para iniciar sesión con Google
const signInWithGoogle = async () =>
{
    try
    {
        // Usar el método signInWithPopup para mostrar el diálogo de Google
        const result = await signInWithPopup(auth, provider);
        // Obtener el usuario y el token de acceso del resultado
        user = result.user;
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // Hacer algo con el usuario y el token, por ejemplo:
        // Mostrar un mensaje de bienvenida, guardarlos en el estado, etc.
        console.log("Bienvenido", user.value.displayName);
        console.log("Tu token es", token);
    } catch (error)
    {
        // Manejar los posibles errores, por ejemplo:
        // Mostrar un mensaje de error, registrarlos en la consola, etc.
        console.error(error.message);
    }
};

const signInWithemail = async () => {
    if (checkLogin()) {
        try {
            // Usar el método signInWithPopup para mostrar el diálogo de Google
            const result = await signInWithEmailAndPassword(auth,)
            // Obtener el usuario y el token de acceso del resultado
            user = result.user;

            // Hacer algo con el usuario y el token, por ejemplo:
            // Mostrar un mensaje de bienvenida, guardarlos en el estado, etc.
            console.log("Bienvenido", user.value.displayName);
        } catch (error)
        {
            // Manejar los posibles errores, por ejemplo:
            // Mostrar un mensaje de error, registrarlos en la consola, etc.
            console.error(error.message);
        }
    }
}

function checkLogin()
{
    var emailValido = validateEmail(emailUser.value)
    var claveValida = passwordUser.value.lenght > 6

    return emailValido && claveValida;
}
const validateEmail = (email) =>
{
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
onMounted(() =>
{

    console.log("Bienvenido", auth.currentUser?.displayName);
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
}</style>