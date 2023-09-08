<template>
  <div class="hero-wrap" style="background-image: url('images/bg_1.jpg')" data-stellar-background-ratio="0.2">
    <div class="overlay"></div>
    <div class="container">
      <div class="row g-0 slider-text justify-content-start align-items-center">
        <div class="col-lg-6 col-md-6 ftco-animate d-flex align-items-end">
          <div class="text">
            <h1 class="mb-4">
              <img src="images/logo-blanco-256px.png" alt="" />
            </h1>
            <p style="font-size: 18px">
              Somos una empresa dedicada a proporcionar elevadores de neumáticos
              para todo tipo de vehículos, desde autos hasta camiones pesados.
              Nuestra gama de productos es suministrada por nuestro aliado y
              proveedor, Tuff Support, quien nos garantiza una calidad
              excepcional.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

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
          <div class="search-wrap-1 ftco-animate mb-5">
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
                <p>
                  Estamos para ayudarte
                  <a class="" href="http://wa.me/">¿No encuentras tu vehiculo? ¿no sabes que repuesto
                    necesitas?</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="resultados" class="row resultadosBusqueda" :ref="elementoBusqueda" v-if="productosResultados.length > 0">
        <ProductItem v-for="producto in productosResultados" :key="producto.Id" :data="producto"
          @agregar-prod="agregarProducto" @comprar-prod="comprarProducto" @consultar-prod="consultarProducto">
        </ProductItem>
      </div>
    </div>
  </section>

  <seccion-servicios />
  <seccion-metodo-compra />
  <seccion-instagram />
  <!-- loader -->
</template>

<script setup>
import { onMounted, onBeforeMount, ref, watch } from "vue";
import InstagramReel from "@/components/vistas/social/InstagramReel.vue";
import SelectForm from "@/components/vistas/form/SelectForm.vue";
import ProductItem from "@/components/vistas/items/productos/ProductoHomeItem.vue";
import ItemSimple from "@/components/vistas/items/ItemSimple.vue";
import { getData } from "@/js/web/fetcher";

import { animarElementos, scrollToElement } from "@/js/views/animate";

import SeccionMetodoCompra from "./InicioComponentes/SeccionMetodoCompra.vue";
import SeccionInstagram from "./InicioComponentes/SeccionInstagram.vue";
import SeccionServicios from "./InicioComponentes/SeccionServicios.vue";
import { ProductoInfo } from "@/js/CartApp/Producto";

var elementoBusqueda = ref()

var marcasAutos = ref([]);
var modelosAutos = ref([]);
var anosAutos = ref([]);

var marcaSelected = ref(null);
var modeloSelected = ref(null);
var anosSelected = ref(null);

var productosResultados = ref([]);
var emits = defineEmits(["view-mounted", "agregar-producto", "comprar-producto", "consultar-producto"]);

onBeforeMount(() =>
{
  getData("makesAvailables", [], (datos) =>
  {
    console.log(datos)
    if (datos.d)
      marcasAutos.value = datos.d;
    else{
      marcasAutos.value = ["Acura", "Alfa Romeo", "American Motors", "Aston Martin", "Audi", "Austin", "Bentley", "BMW", "Buick", "Cadillac", "Chevrolet", "Chrysler", "Citroen", "Dacia", "Daewoo", "Delorean", "Dodge", "Ferrari", "Fiat", "Ford", "GMC", "Honda", "Hummer", "Hyundai", "International", "Isuzu", "Jaguar", "Jeep", "Kia", "Lada", "Lancia", "Land Rover", "Lexus", "Lincoln", "Maserati", "Mazda", "Mercedes-Benz", "Mercury", "Mg", "Mini", "Mitsubishi", "Nissan", "Opel", "Peugeot", "Ram", "Renault", "Rover", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen", "Volvo"]
    }

  });
});

onMounted(() =>
{
  emits("view-mounted", elementoBusqueda);
  animarElementos();
})

function agregarProducto(producto)
{
  emits("agregar-producto", producto);
}

function comprarProducto(producto)
{
  emits("comprar-producto", producto);
}

function consultarProducto(producto)
{
  emits("consultar-producto", producto);
}

function cargarModelos(marca)
{
  console.log("cargarModelos", marca);
  marcaSelected.value = marca;
  modeloSelected.value = null;

  modelosAutos.value = [];
  anosAutos.value = [];
  productosResultados.value = [];
  anosSelected.value = null;

  getData("search", { marca }, (datos) =>
  {
    modelosAutos.value = datos.d;
  });
}

function cargarAños(modelo)
{
  console.log("cargarAños");
  modeloSelected.value = modelo;
  anosSelected.value = null;
  anosAutos.value = [];
  productosResultados.value = [];
  getData(
    "search",
    { marca: marcaSelected.value, modelo },
    (datos) => (anosAutos.value = datos.d)
  );
}

function cargarProductos(anno)
{
  anosSelected.value = anno;
  productosResultados.value = [];
  getData(
    "search",
    { marca: marcaSelected.value, modelo: modeloSelected.value, anno: anno },
    (datos) =>
    {
      console.log("cargarProductos");
      if (datos.d)
      {

        productosResultados.value = datos.d.map((t, i, a) => new ProductoInfo(t));
        console.log(datos.d);
      } else
      {
        alert("Problemas de conexion. Revisa tu internet.")
      }
    });
}

</script>

<style></style>