<template>
		<div :ref="elementoBusqueda" class="modal fade" id="cesta" tabindex="-1" aria-labelledby="etiquetaCesta" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="etiquetaCesta">Carrito de compras</h5>
						<button type="button" class="btn-close" 
							data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<div class="flex-column justify-content-center align-items-center">
							<ol  id="listProduct" class="list-group list-group-numbered list-group-flush">
								<producto-carrito-item v-for="item in items" 
									:key="item" :data="item"
									@eliminar="$emit('eliminar-prod',item)" 
								/>
							</ol>
							<div class="p-2 d-flex">
								<div class="col-9">
									<div class="articulos p-0">
										<p>
											<strong>Articulos: </strong>
											<span class="text-monospace" >{{ cantidad }}</span>
										</p>
										<p>
											<strong>Total: </strong>
											<span class="text-monospace" >{{ monto }}</span>
										</p>
									</div>
								</div>
								<div class="col-3 justify-content-end">
									<router-link to="/comprar" data-bs-dismiss="modal" class="btn btn-primary">Comprar</router-link>
									<!-- <a href="#" @click="$emit('pagar-carrito')"  class="btn btn-primary">Comprar</a> -->
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
					</div>
				</div>
			</div>
		</div> 
</template>

<script setup>
import { onMounted ,ref } from 'vue';
import ProductoCarritoItem from './items/productos/ProductoCarritoItem.vue';

var emits = defineEmits(["pagar-carrito","eliminar-prod","view-mounted"]);

var prop = defineProps({
	items:{
		type:Array,
		default:[]
	},
	monto:{
		type:Number,
		default:0.0
	},
	cantidad:{
		type:Number,
		default:0
	}
});

onMounted(() => {
	
})
</script>

<style>

</style>