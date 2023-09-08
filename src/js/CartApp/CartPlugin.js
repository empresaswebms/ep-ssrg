import { reactive } from "vue";
import { decodeJson, encodeJson } from "@/js/app";
import { ProductoCarrito, ProductoInfo } from "./Producto";


const products_class = ".resultadosBusqueda";

/* elementos */
let htmlResultsProducts = null;
/* datos del carrito */
const state = reactive({
  buyThings: [],
  totalCard: 0,
  countProduct: 0,
});

let callbackFillItems;

let initialized = false; // Variable para verificar si ya se inicializó

function loadModal(cargarDatos)
{
    callbackFillItems = cargarDatos;
    sendData();
}

function install (app, options) {
    if (!initialized) {
      initialized = true;
      // Inicializa el carrito solo si no se ha inicializado antes
      state.buyThings = [];
      state.totalCard = 0;
      state.countProduct = 0;
      loadData();
    }

    app.config.globalProperties.$cartApp = {
      modalListener(cargarDatos) {
        callbackFillItems = cargarDatos;
        sendData();
      },
      loadResultsProduct,
      addProduct,
      deleteProduct,
    };

    // Initialize the plugin when Vue is installed
    app.use(app);
  }

function loadResultsProduct(products) {
  htmlResultsProducts = products.querySelector(products_class);
  htmlResultsProducts.addEventListener("click", addProduct);
}

function loadItemsFromJson(array) {
  state.buyThings = array;
  state.countProduct = array.length;
  state.totalCard = array.reduce((total, item) => total + item.Cantidad * item.Precio, 0);
}

function addProduct(e) {
  readTheContent(e);
  saveCart();
}

function deleteProduct(e) {
  const deleteId = e.Codigo;

  state.buyThings = state.buyThings.filter((product) => product.Id !== deleteId);
  const priceReduce = state.buyThings.reduce(
    (total, item) => total + parseFloat(item.Precio) * parseFloat(item.Cantidad),
    0
  );
  state.totalCard = (state.totalCard - priceReduce).toFixed(2);
  state.countProduct--;

  saveCart();
  sendData();
}

function readTheContent(product) {
  const infoProduct = new ProductoCarrito(product, 1);

  state.totalCard = (
    parseFloat(state.totalCard) + parseFloat(product.Precio)
  ).toFixed(2);

  const exist = state.buyThings.some((product) => product.Id === infoProduct.Id);
  if (exist) {
    state.buyThings = state.buyThings.map((product) => {
      if (product.Id === infoProduct.Id) {
        product.Cantidad++;
      }
      return product;
    });
  } else {
    state.buyThings.push(infoProduct);
    state.countProduct++;
  }
  sendData();
}

function sendData() {
  if (callbackFillItems !== undefined) {
    callbackFillItems(
      state.buyThings,
      state.totalCard,
      state.countProduct
    );
  }
}
/**
 * 
 * @returns {CartInfo}
 */
function getData(){
  return new CartInfo(state);
}

function vaciarCarrito(){
  state.buyThings = [];
  state.totalCard = 0;
  state.countProduct = 0;
  saveCart();
}
function loadData()
{
    const lista = localStorage.getItem("cartValues") ? JSON.parse(localStorage.getItem("cartValues")) : [];
    const datetimeLastUpdate = localStorage.getItem("datetimeLastUpdate");
    if (lista)
    {
        loadItemsFromJson(lista);
        // if (utils.diffSegundos(datetimeLastUpdate) > 10)
        // 	app.web.updateList(lista, (actualizar) =>
        // 	{

        // 		loadItemsFromJson(actualizar)
        // 	});

    }
}
class CartInfo {
  constructor(obj){
    this.articles= obj.buyThings
    this.total= obj.totalCard
    this.count= obj.countProduct

  }
}
function saveCart() {
  localStorage.setItem("datetimeLastUpdate", new Date().toISOString());
  localStorage.setItem("cartValues", JSON.stringify(state.buyThings));
}

export default {
  install,
};

export {
  loadModal,
  loadResultsProduct,
  addProduct,
  deleteProduct,
  getData,
  vaciarCarrito,
  CartInfo
  // Otras funciones y propiedades
};
