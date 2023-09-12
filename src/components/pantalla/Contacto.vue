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
                        <span>Contacto <i class="ion-ios-arrow-forward"></i></span>
                    </p>
                    <h1 class="mb-3 bread">Contactanos</h1>
                    <p class=""></p>
                </div>
            </div>
        </div>
    </section>
    <div class="hello text-center ms-5 me-5 ">
        <h1>Contactanos</h1>
        <p>Puedes escribirnos a traves de los siguientes medios </p>
        <br>
        <div class="d-flex justify-content-center">

            <ul class="list-group col-md-4 col-sm-12 ">
                <li class="list-group-item"><a target="_blank" href="http://wa.me/584121919377">
                        <i class="bi bi-whatsapp"></i> 0412-1919377
                    </a>
                </li>
                <li class="list-group-item"><a target="_blank" href="http://wa.me/584248813522">
                        <i class="bi bi-whatsapp"></i> 0424-8813522
                    </a>
                </li>
                <li class="list-group-item"><a target="_blank" href="tel:0281-2754217">
                        <i class="bi bi-phone"> </i> 0281-2754217
                    </a>
                </li>
                <li class="list-group-item"><a target="_blank" href="mailto:elevapuertasventas@gmail.com">
                        <i class="bi bi-envelope"></i> elevapuertasventas@gmail.com
                    </a>
                </li>
            </ul>
        </div>
        <br>
    </div>
</template>
  
<script setup>
import { animarElementos } from '@/js/views/animate';
import { onMounted } from 'vue';

onMounted(() => { animarElementos() })

</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>