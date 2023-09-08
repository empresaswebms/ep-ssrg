const { decodeJson, encodeJson } = require("@/js/app");
const { ProductoCarrito, ProductoInfo } = require("./Producto");

const products_class = '.resultadosBusqueda'

/* elementos */
var htmlResultsProducts = null;
/* datos del carrito */
/**
 * 
 */
var  buyThings = []
var totalCard = 0
var countProduct = 0

var callbackFillItems;

function init(cargarDatos)
{
    //variables
    buyThings = [];
    totalCard = 0;
    countProduct = 0;

    callbackFillItems = cargarDatos;
    loadData();
    return this;
}

  

function loadResultsProduct(products)
{

    htmlResultsProducts = products.querySelector(products_class);
    htmlResultsProducts.addEventListener('click', addProduct);
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

function loadItemsFromJson(array)
{
    buyThings = array;
    countProduct = array.length;
    for (let i = 0; i < array.length; i++)
    {
        const element = array[i];
        totalCard += element.Cantidad * element.Precio;
    }

    sendData();
}
function loadEventListeners()
{
}

/**
 * 
 * @param {ProductoInfo} e 
 */
function addProduct(e)
{
    readTheContent(e);
    saveCart();
}

/**
 * 
 * @param {ProductoCarrito} e 
 */
function deleteProduct(e)
{
    const deleteId = e.Codigo

    buyThings.forEach(value => {
        if (value.id == deleteId)
        {
            let priceReduce = parseFloat(value.Precio) * parseFloat(value.Cantidad);
            totalCard = totalCard - priceReduce;
            totalCard = totalCard.toFixed(2);
        }
    });
    buyThings = buyThings.filter(product => product.Id !== deleteId);

    countProduct--;
    saveCart();
    sendData();
}
/**
 * Entra un JSON con la información del producto
 * @param {ProductoInfo} product 
 */
function readTheContent(product)
{
    const infoProduct = new ProductoCarrito(product,1)

    totalCard = parseFloat(totalCard) + parseFloat(product.Precio);
    totalCard = totalCard.toFixed(2);

    const exist = buyThings.some(product => product.Id === infoProduct.Id);
    if (exist) {
        const pro = buyThings.map(product =>
        {
            if (product.Id === infoProduct.Id)
            {
                product.Cantidad++;
                return product;
            } else
            {
                return product
            }
        });
        buyThings = [...pro];
    } else
    {
        buyThings = [...buyThings, infoProduct]
        countProduct++;
    }
    sendData();
    //console.log(infoProduct);
}

function sendData() 
{
    callbackFillItems(buyThings, totalCard, countProduct)
}

function saveCart()
{
    localStorage.setItem("datetimeLastUpdate", new Date().toISOString())
    localStorage.setItem("cartValues", JSON.stringify(buyThings))
}

module.exports = {
    init, loadResultsProduct, addProduct, deleteProduct
}