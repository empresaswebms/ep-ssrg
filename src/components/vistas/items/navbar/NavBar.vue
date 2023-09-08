<template>
	<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
		<div class="container">
			<a class="navbar-brand" href="#">ELEVAPUERTAS</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ftco-nav"
				aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation"><span
					class="oi oi-menu"></span> Menu</button>

			<div class="collapse navbar-collapse" id="ftco-nav">
				<ul class="navbar-nav ms-auto ">

					<NavBarItem titulo="Inicio" dir="/" />
					<NavBarItem titulo="Otros productos" dir="/productos" />
					<NavBarItem titulo="Nosotros" dir="/nosotros" />
					<NavBarItem titulo="Contactanos" dir="/contacto" />
					<NavBarItem v-if="!autenticado" titulo="Mi cuenta" icon="bi-person-circle" dir="/login" />
					<NavBarItem v-if="autenticado" titulo="Mi cuenta" icon="bi-person-circle" dir="/perfil" />
					<!-- <NavBarItem titulo="P. Privacidad" dir="/ayuda/privacidad"/> -->
					<!-- <li class="nav-item"> -->
					<button class="btn btn-primary me-2 nav-item" type="button" data-bs-toggle="modal" data-bs-target="#cesta"> <i
							class="bi bi-cart4 "></i> Carrito</button>
					<button v-if="autenticado" class="btn btn-outline-white nav-item" type="button" data-bs-toggle="modal"
						data-bs-target="#form-pago"><i class="bi bi-credit-card"></i> Confirmar pago</button>
					<!-- </li> -->
				</ul>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { ref } from "vue";
import NavBarItem from "./NavBarItem.vue";

import Auth from '@/js/firebase/AuthHelper'
const auth = Auth.get();
const autenticado = ref(false)

auth.onAuthStateChanged((user) =>
{
	autenticado.value = user != undefined
})

</script>

<style lang="scss" scoped></style>