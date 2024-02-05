<template>
    <div :class="'alert alert-'+tipo" role="alert">
        <h4 class="alert-heading">{{ titulo }}</h4>
        <p>{{ mensaje }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    titulo:{type:String},   
    mensaje:{type:String, require:true},
    tipo:{type:String, default:"primary"},
})

var x = document.getElementById(props.ide);
  x.className = "show";
  setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);

</script>

<style lang="scss" scoped>

@-webkit-keyframes fadein {
	from {
		bottom: 0;
		opacity: 0;
	}
	to {
		bottom: 30px;
		opacity: 1;
	}
}
@keyframes fadein {
	from {
		bottom: 0;
		opacity: 0;
	}
	to {
		bottom: 30px;
		opacity: 1;
	}
}
@-webkit-keyframes fadeout {
	from {
		bottom: 30px;
		opacity: 1;
	}
	to {
		bottom: 0;
		opacity: 0;
	}
}
@keyframes fadeout {
	from {
		bottom: 30px;
		opacity: 1;
	}
	to {
		bottom: 0;
		opacity: 0;
	}
}
</style>