<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-secondary  ftco_navbar ftco-navbar-light" id="ftco-navbar">
		<div class="container ">
			<a class="navbar-brand" href="#">
				<img src="/images/elevapuertas-vectorsm.png" alt="Bootstrap" height="24">
			</a>
			<form class="d-flex  flex-fill" role="search" @submit="realizarBusqueda">

				<input class="form-control me-2" type="search" style="font-family: 'bootstrap-icons', 'Montserrat';"
					placeholder="&#xF52A Estoy buscando..." v-model="busqueda" aria-label="Búsqueda">

			</form>

			<button class="navbar-toggler color-primary" type="button" data-bs-toggle="collapse" data-bs-target="#ftco-nav"
				aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="oi oi-menu"></span></button>

			<div class="collapse navbar-collapse" id="ftco-nav">
				<ul class="navbar-nav ms-auto ">
					<NavBarItem titulo="Inicio" icon="bi bi-house" dir="/" />
					<NavBarItem titulo="Nosotros" icon="bi bi-people-fill" dir="/nosotros" />
					<NavBarItem titulo="Contactanos" icon="bi bi-telephone" dir="/contacto" />
					<NavBarItem titulo="Otros productos" icon="bi bi-box-seam" dir="/productos" />

					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
							aria-expanded="false">
							<i v-if="!autenticado || user==null" class="bi-person-circle"> </i> 
							<img v-else class=" icon " :src="user"> 
							Mis compras
						</a>
						<ul class="dropdown-menu">
							<NavBarItem class = "ps-4 " 
							:titulo="!autenticado?'Iniciar sesión'	:	'Mi perfil'" 
							   :dir="!autenticado?'/login'			:	'/perfil'" 
							icon="bi-person-circle text-primary" />
					
								<li class="nav-item">
								<button class="btn btn-link me-2 text-primary" type="button" data-bs-toggle="modal"
									data-bs-target="#cesta"> <i class="bi bi-cart4 "></i> Carrito</button>
							</li>
							<li class="nav-item">
								<button v-if="autenticado" class="btn btn-link text-primary" type="button"
									data-bs-toggle="modal" data-bs-target="#form-pago"><i class="bi bi-credit-card"></i>
									Reportar pago</button>
							</li>
						</ul>
					</li>

					<!-- <NavBarItem titulo="P. Privacidad" dir="/ayuda/privacidad"/> NO -->
					<!-- <li class="nav-item"> -->

					<!-- </li> -->
				</ul>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { ref } from "vue";
import NavBarItem from "./NavBarItem.vue";
import { useRouter } from 'vue-router';

const router = useRouter();

import Auth from '@/js/firebase/AuthHelper'
const auth = Auth.get();
const autenticado = ref(false);
const user = ref(null);
const busqueda = ref("");

auth.onAuthStateChanged((usuario) => {
	autenticado.value = usuario != undefined
	user.value = usuario?.photoURL;
	console.log(user)
})

const realizarBusqueda = () =>
{
	router.push(`/buscar/${busqueda.value}`);
}

</script>

<style lang="scss" scoped>
.icon {
	width: 20px;
	height: 20px;
	border-radius: 50%;
}
</style>