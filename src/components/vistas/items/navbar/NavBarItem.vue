<template>
  <li class="nav-item active">
    <a href="{{ href }}" class="nav-link">{{ titulo }}</a>
  </li>
</template>

<script setup>
defineProps({
  href: { type: String, default:"#"},
  titulo: { type: String, required:true },
});

</script>

<style>
</style>