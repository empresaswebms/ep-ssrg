<template>
  <div class="py-5 text-center">
    <img class="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
    <h2>Checkout form</h2>
    <p class="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a
      validation state that can be triggered by attempting to submit the form without completing it.</p>
  </div>

  <div class="row g-5">
    <div class="col-md-5 col-lg-4 order-md-last">
      <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-primary">Your cart</span>
        <span class="badge bg-primary rounded-pill">3</span>
      </h4>
      <ul class="list-group mb-3">
        <producto-factura-item v-for="item in items" :key="item" titulo="item.titulo" desc="item.desc"
          precio="item.precio" unidades="item.cantidad">
        </producto-factura-item>
        <li class="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>$20</strong>
        </li>
      </ul>

      <form class="card p-2">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Promo code">
          <button type="submit" class="btn btn-secondary">Redeem</button>
        </div>
      </form>
    </div>
    <div class="col-md-7 col-lg-8">
      <h4 class="mb-3">Factura</h4>
      <form class="needs-validation" novalidate="">
        <div class="row g-3">
          <div class="col-12">
            <label for="firstName" class="form-label">Nombre y apellido</label>
            <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
            <div class="invalid-feedback">
              Se require de un nombre para la factura
            </div>
          </div>

          <div class="col-12">
            <label for="username" class="form-label">Username</label>
            <div class="input-group has-validation">
              <span class="input-group-text">Cédula/RIF</span>
              <input type="text" class="form-control" id="username" placeholder="Username" required="">
              <div class="invalid-feedback">
                Se requiere Cedula o RIF para la factura
              </div>
            </div>
          </div>


          <div class="col-12">
            <label for="address" class="form-label">Dirección</label>
            <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="">
            <div class="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div class="col-12">
            <p  class="form-label col-12">Metodo de envío</p>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
              <label class="form-check-label" for="inlineRadio1">Liberty Express <span class="text-muted">(Envio gratis)</span></label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
              <label class="form-check-label" for="inlineRadio2">Retiro en tienda <span class="text-muted">(Solo Barcelona)</span></label>
            </div>
            
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
              <label class="form-check-label" for="inlineRadio3">Otra agencia de encomiendas <span class="text-muted">(Cobro a destino)</span></label>
            </div>
            
          </div>


          <div class="col-md-5">
            <label for="country" class="form-label">Agencia Liberty Express más cercana</label>
            <select class="form-select" id="country" required="">
              <option value="">Choose...</option>
              <option>United States</option>
            </select>
            <div class="invalid-feedback">
              Selecciona la agencia más cercana
            </div>
          </div>

          <div class="col-md-5">
            <label for="country" class="form-label">Agencia de encomiendas más cercana</label>
            <select class="form-select" id="country" required="">
              <option value="">Selecciona una angencia</option>
              <option>MRW</option>
              <option>Zoom</option>
              <option>Tealca</option>
              <option>Domesa</option>
              <option>Otro ()</option>
            </select>
            <div class="invalid-feedback">
              Selecciona la agencia más cercana
            </div>
            <p class="text-muted" style="font-size: .8rem;"><i class="bi bi-exclamation-circle"></i> En caso de no haber disponibilidad de envio por una de estas agencias a tu destino, te contactaremos</p>
          </div>

          <div class="col-md-4">
            <label for="state" class="form-label">Estado</label>
            <select class="form-select" id="state" required="">
              <option value="">Choose...</option>
              <option>California</option>
            </select>
            <div class="invalid-feedback">
              Por favor, elija el Estado
            </div>
          </div>

          <div class="col-md-3">
            <label for="zip" class="form-label">Ciudad</label>
            <input type="text" class="form-control" id="zip" placeholder="" required="">
            <div class="invalid-feedback">
              Escriba su ciudad
            </div>
          </div>
        </div>

        <hr class="my-4">

        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="save-info">
          <label class="form-check-label" for="save-info">Actualizar información de facturación</label>
        </div>

        <hr class="my-4">

        <h4 class="mb-3">Método de pago</h4>

        <div class="my-3">
          <div class="form-check">
            <input id="pagomovil" name="paymentMethod" type="radio" class="form-check-input" checked="" required="">
            <label class="form-check-label" for="pagomovil">Transferencia o pago movil (Bs. D.)</label>
          </div>
          <div class="form-check">
            <input id="zelle" name="paymentMethod" type="radio" class="form-check-input" required="">
            <label class="form-check-label" for="zelle">Zelle (USD)</label>
          </div>
          <div class="form-check">
            <input id="panama" name="paymentMethod" type="radio" class="form-check-input" required="">
            <label class="form-check-label" for="panama">Mercantil Panamá (USD)</label>
          </div>
        </div>

        <hr class="my-4">

        <button class="w-100 btn btn-primary btn-lg" type="submit">Finalizar proceso</button>
        <p class="text-muted" style="font-size: .8rem;"><i class="bi bi-exclamation-circle"></i> Recibiras un correo con toda la información de la compra y los datos de pago del metodo elegido. Si tienes una duda, contáctanos</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import ProductoCarritoItem from "../vistas/items/productos/ProductoCarritoItem.vue";
import ProductoFacturaItem from "@/components/vistas/items/cheout/ProductoFacturaItem.vue"
defineProps(() =>
{
  user: { type: Object }
})
</script>

<style lang="scss" scoped></style>