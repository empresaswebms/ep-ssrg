const { reactive } = require("vue");
const { decodeJson, encodeJson } = require("../../js/app");
const { ProductoCarrito, ProductoInfo } = require("./Producto");
const products_class = ".resultadosBusqueda";

/* elementos */
let htmlResultsProducts = null;
/* datos del carrito */
const state = reactive({
  buyThings: [],
  totalCard: 0,
  countProduct: 0,
  countItems: 0,
});

const Modo = {
  AGREGAR: 1,
  FIJAR: 0,
  RESTAR: -1
}
let callbackFillItems;

let initialized = false; // Variable para verificar si ya se inicializó

function loadModal(cargarDatos)
{
  callbackFillItems = cargarDatos;
  sendData();
}

function install(app, options)
{
  if (!initialized)
  {
    initialized = true;
    // Inicializa el carrito solo si no se ha inicializado antes
    state.buyThings = [];
    state.totalCard = 0;
    state.countItems = 0;
    state.countProduct = 0;
    loadData();
  }

  app.config.globalProperties.$cartApp = {
    modalListener(cargarDatos)
    {
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

function loadResultsProduct(products)
{
  htmlResultsProducts = products.querySelector(products_class);
  htmlResultsProducts.addEventListener("click", addProduct);
}

function loadItemsFromJson(array)
{
  state.buyThings = array;
  state.countItems = array.length;
  state.totalCard = array.reduce((total, item) => total + item.Cantidad * item.Precio, 0);
  state.countProduct = array.reduce((total, item) => total + item.Cantidad, 0);
}

function addProduct(e, cantidad)
{
  readTheContent(e, cantidad, Modo.AGREGAR);
  saveCart();
}

function setProduct(e, cantidad)
{
  readTheContent(e, cantidad, Modo.FIJAR);
  saveCart();
}


function deleteProduct(e)
{
  const deleteId = e.Codigo;
  state.buyThings = state.buyThings.filter((product) => product.Id !== deleteId);
  const priceReduce = state.buyThings.reduce(
    (total, item) => total + parseFloat(item.Precio) * parseFloat(item.Cantidad),
    0
  );
  const cantidadReducida = state.buyThings.reduce(
    (total, item) => total + parseFloat(item.Cantidad),
    0
  );
  state.totalCard = (state.totalCard - priceReduce).toFixed(2);
  state.countProduct = (state.countProduct - cantidadReducida).toFixed(2);

  state.countItems--;

  saveCart();
  sendData();
}



/**
 * 
 * @param {ProductoInfo} product 
 * @param {Number} cantidad 
 * @param {ModoSet} modo 
 */
function readTheContent(product, cantidad, modo)
{
  const infoProduct = new ProductoCarrito(product, cantidad ? cantidad : 1);

  const exist = state.buyThings.some((product) => product.Id === infoProduct.Id);
  //Existe en el carrito?
  if (exist) {
    state.buyThings = state.buyThings.map((product) =>
    {
      if (product.Id === infoProduct.Id)
      {
        if (modo == Modo.AGREGAR)
        {
          product.Cantidad += cantidad;
        }
        else if (modo == Modo.FIJAR)
        {
          product.Cantidad = cantidad;
        }
        else if (modo == Modo.RESTAR)
        {
          product.Cantidad -= cantidad;
        }
      }

      return product;
    });
  } else { //No esta en el carrito
    state.buyThings.push(infoProduct);
    state.countItems++;
  }
  const cantidadReducida = state.buyThings.reduce(
    (total, item) => total + parseFloat(item.Cantidad),
    0);
  state.countProduct = (cantidadReducida).toFixed(2);
  
  state.totalCard = state.buyThings.reduce(
    (total, item) => total + (parseFloat(item.Cantidad) * item.Precio),
    0);

  sendData();

}

function sendData()
{
  if (callbackFillItems !== undefined)
  {
    callbackFillItems(
      state.buyThings,
      state.totalCard,
      state.countProduct,
      state.countItems,
    );
  }
}
/**
 * 
 * @returns {CartInfo}
 */
function getData()
{
  return new CartInfo(state);
}

function vaciarCarrito()
{
  state.buyThings = [];
  state.totalCard = 0;
  state.countProduct = 0;
  state.countItems = 0;
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
class CartInfo
{
  constructor(obj)
  {
    this.articles = obj.buyThings
    this.total = obj.totalCard
    this.count = obj.countProduct
    this.itemsCount = obj.countItems

  }
}
function saveCart()
{
  localStorage.setItem("datetimeLastUpdate", new Date().toISOString());
  localStorage.setItem("cartValues", JSON.stringify(state.buyThings));
}

// Exportando como un objeto con una propiedad llamada "install"
module.exports = {
  install,
};

// Exportando funciones y propiedades individualmente
module.exports.loadModal = loadModal;
module.exports.loadResultsProduct = loadResultsProduct;
module.exports.addProduct = addProduct;
module.exports.deleteProduct = deleteProduct;
module.exports.getData = getData;
module.exports.vaciarCarrito = vaciarCarrito;
module.exports.CartInfo = CartInfo;
module.exports.setProduct = setProduct;
// Otras funciones y propiedades
