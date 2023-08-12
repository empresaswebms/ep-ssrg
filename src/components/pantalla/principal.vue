<template>
  <div class="col-lg align-items-end">
    <div class="form-group">
      <label for="#">Fabricante</label>
      <div class="form-field">
        <div class="select-wrap">
          <div class="icon"><span class="ion-ios-arrow-down"></span></div>
          <select name="" id="" class="form-control">
            <option value="">Seleccion el fabricante</option>
            <option v-for="opcion in opciones" :key="opcion" > </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>