<template>
    <section class="hero-wrap hero-wrap-2 js-fullheight" style="background-image: url('/images/bg_2.jpg');" data-stellar-background-ratio="0.5">
			<div class="overlay"></div>
			<div class="container">
				<div class="row g-0 slider-text js-fullheight align-items-end justify-content-start">
					<div class="col-md-9 ftco-animate pb-5">
						<p class="breadcrumbs">
							<span class="me-2">
                                <router-link to="/">Inicio <i class="ion-ios-arrow-forward" ></i> </router-link>
                            </span>
							<span>Otros productos<i class="ion-ios-arrow-forward"></i></span>
						</p>
						<h1 class="mb-3 bread">Lineas de productos</h1>
						<p class="">Somos más que elevadores para autos</p>
					</div>
				</div>
			</div>
		</section>

		<section class="ftco-section">
			<div class="container">
				<div class="row d-flex">
					<div class="col-md-4 categoria-wrap ftco-animate">
						<!-- <div class=""> -->
							<div class="img d-flex align-items-end" style="background-image: url(/images/elevadores.jpg);">
								<div class="text d-flex p-4 text-center">
									<p class="d-flex mb-0 d-block">
											<a href="https://api.whatsapp.com/send/?phone=584121919377" class="btn btn-primary btn-outline-black ms-1">
												<i class="ion-ios-arrow-forward"></i>
												Kits de elevación</a>
										</p>
									</div>
								</div>
						<!-- </div> -->
					</div>
					<div class="col-md-4 categoria-wrap ftco-animate">
						<!-- <div class=""> -->
							<div class="img d-flex align-items-end" style="background-image: url(/images/cerraduras.jpg);">
								<div class="text d-flex p-4 text-center">
									<p class="d-flex mb-0 d-block">
											<a href="https://api.whatsapp.com/send/?phone=584121919377" class="btn btn-primary btn-outline-black ms-1">
												<i class="ion-ios-arrow-forward"></i>
												Activadores (Cerraduras)</a>
										</p>
									</div>
								</div>
						<!-- </div> -->
					</div>
					<div class="col-md-4 categoria-wrap ftco-animate">
						<!-- <div class=""> -->
							<div class="img d-flex align-items-end" style="background-image: url(/images/platinas.jpg);">
								<div class="text d-flex p-4 text-center">
									<p class="d-flex mb-0 d-block">
											<a href="https://api.whatsapp.com/send/?phone=584121919377" class="btn btn-primary btn-outline-black ms-1">
												<i class="ion-ios-arrow-forward"></i>
												Platinas</a>
										</p>
									</div>
								</div>
						<!-- </div> -->
					</div>
					<div class="col-md-4 categoria-wrap ftco-animate">
						<!-- <div class=""> -->
							<div class="img d-flex align-items-end" style="background-image: url(/images/muebles-auto.jpg);">
								<div class="text d-flex p-4 text-center">
									<p class="d-flex mb-0 d-block">
											<a href="https://api.whatsapp.com/send/?phone=584121919377" class="btn btn-primary btn-outline-black ms-1">
												<i class="ion-ios-arrow-forward"></i>
												Muebles</a>
										</p>
									</div>
								</div>
						<!-- </div> -->
					</div>
					<div class="col-md-4 categoria-wrap ftco-animate">
						<!-- <div class=""> -->
							<div class="img d-flex align-items-end" style="background-image: url(/images/marino.jpg);">
								<div class="text d-flex p-4 text-center">
									<p class="d-flex mb-0 d-block">
											<a href="https://api.whatsapp.com/send/?phone=584121919377" class="btn btn-primary btn-outline-black ms-1">
												<i class="ion-ios-arrow-forward"></i>
												Sección marina</a>
										</p>
									</div>
								</div>
						<!-- </div> -->
					</div>
					<div class="col-md-4 categoria-wrap ftco-animate">
						<!-- <div class=""> -->
							<div class="img d-flex align-items-end" style="background-image: url(/images/servicio.jpg);">
								<div class="text d-flex p-4 text-center">
									<p class="d-flex mb-0 d-block">
											<a href="https://api.whatsapp.com/send/?phone=584121919377" class="btn btn-primary btn-outline-black ms-1">
												<i class="ion-ios-arrow-forward"></i>
												Servicio de instalación</a>
										</p>
									</div>
								</div>
						<!-- </div> -->
					</div>
				</div>

				<div class="row mt-5"></div>
			</div>
		</section>
</template>

<script setup>
import {defineEmits, onMounted} from "vue"
import { animarElementos } from "@/js/views/animate"
const emits = defineEmits(["view-mounted"])

onMounted(()=>{
	emits("view-mounted",true);
	animarElementos();
})
</script>

<style lang="scss" scoped>

</style>