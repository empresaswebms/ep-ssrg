<template>
    <div>
        <section class="ftco-section ftco-no-pb mt-2 pt-2">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 heading-section text-center ftco-animate mb-0">
          <span class="subheading">Encuentra elevadores para tu vehiculo</span>
          <h2 class="mb-2">Buscador</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="ftco-animate mb-5">
            <form action="#" class="search-property-1">
              <div class="row">
                <!-- Marcas -->
                <div class="col-lg align-items-end">
                  <SelectForm titulo="Fabricante" id="fabricanteSelect" placeholder="Selecciona una marca"
                    :opciones="marcasAutos" @item-selected="cargarModelos">
                  </SelectForm>
                </div>
                <!-- Modelos -->
                <div class="col-lg align-items-end">
                  <SelectForm titulo="Modelo" id="modeloSelect" placeholder="Selecciona el modelo"
                    :opciones="modelosAutos" @item-selected="cargarAños">
                  </SelectForm>
                </div>
                <!-- Año -->
                <div class="col-lg align-items-end">
                  <SelectForm titulo="Años" id="anoSelect" placeholder="Selecciona un año" :opciones="anosAutos"
                    @item-selected="cargarProductos">
                  </SelectForm>
                </div>
              </div>
              <div class="row">
                <p class="col">
                  Estamos para ayudarte
                  <a class="" href="http://wa.me/">¿No encuentras tu vehiculo? ¿no sabes que repuesto
                    necesitas?</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="resultados" class="row resultadosBusqueda mb-5" :ref="elementoBusqueda"
        v-if="productosResultados.length > 0">
        <ProductItem v-for="producto in productosResultados" :key="producto.Id" :data="producto"
          @agregar-prod="agregarProducto" @comprar-prod="comprarProducto" @consultar-prod="consultarProducto">
        </ProductItem>
      </div>
      <div id="resultados" class="container mb-5" v-else-if="enBusqueda">
        <div class="container text-center">
          <div class="row justify-content-center">
            <div class="col-md-6 col-sm-8">
              <img width="100" height="100" src="/images/busqueda.svg" class="rounded" alt="Caja de un producto y lupa">
              <div class="text-center">
                No se encontro producto para este modelo. Puedes contactarnos para ayudarte a encontrar
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="resultados" class="container mb-5" v-else>

      </div>

    </div>
  </section>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>