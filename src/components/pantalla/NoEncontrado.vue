<template>
    <div
    class="hero-wrap"
    style="background-image: url('images/servicio.jpg')"
    data-stellar-background-ratio="0.2">
    <div class="overlay"></div>
    <div class="container">
      <div class="row g-0 slider-text justify-content-start align-items-center">
        <div class="col-lg-6 col-md-6 d-flex align-items-end">
          <div class="text">
            <h1 class="mb-4">
                No encontramos tu busqueda.
            </h1>
            <p style="font-size: 18px">
              Pero no desesperes, busca en la página de inicio ☻
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div class=" mt-4">
        <h1 class="text-center">404</h1>
        <p class="text-center">La página que buscas no existe en este momento</p>
        <!-- <p class="text-center">Pero divierte un momento</p> -->
        <!-- <CardShuffle /> -->
    </div>
</template>

<script setup>
import CardShuffle from "@/components/game/CardShuffle.vue"
</script>

<style lang="scss" scoped></style>