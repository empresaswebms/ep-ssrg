import { decodeJson, encodeJson } from "../app"

const btn_add = 'btn-add-cart'
const products = '.resultadosBusqueda'
const card_items = '#listProduct'
const price_total = '#totalCarrito'
const count_product = '#cantidadArticulosCarrito'

/* elementos */
var htmlResultsProducts = null;
var htmlListProducts = null;
var htmlTotalPayAmount = null;
var htmlAmountProduct = null;
/* datos del carrito */
var buyThings = []
var totalCard = 0
var countProduct = 0

export default function init () {
    //variables
    buyThings = [];
    totalCard = 0;
    countProduct = 0;
    return this;
}

export function loadModalCart(element){
    
    htmlListProducts = element.querySelector(card_items);
    htmlTotalPayAmount = element.querySelector(price_total)
    htmlAmountProduct = element.querySelector(count_product);
    htmlListProducts.addEventListener('click', deleteProduct);
    loadData();
}

export function loadResultsProduct() {

    htmlResultsProducts = document.querySelector(products);
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
        totalCard += element.amount * element.price;
    }

    loadHtml();
}
function loadEventListeners()
{
}

function addProduct(e)
{
    e.preventDefault();
    if (e.target.classList.contains(cnts.btn_add))
    {
        const selectProduct = e.target;
        readTheContent(selectProduct);
        saveCart();
    }
}

function deleteProduct(e)
{
    if (e.target.classList.contains('delete-product'))
    {
        const deleteId = e.target.getAttribute('data-id');

        buyThings.forEach(value =>
        {
            if (value.id == deleteId)
            {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard = totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);
            }
        });
        buyThings = buyThings.filter(product => product.id !== deleteId);

        countProduct--;
    }
    //FIX: El contador se quedaba con "1" aunque ubiera 0 productos
    if (buyThings.length === 0)
    {
        htmlTotalPayAmount.innerHTML = 0;
        htmlAmountProduct.innerHTML = 0;
    }

    saveCart();
    loadHtml();
}

function readTheContent(producto)
{
    const dataProductoId = document.querySelector(`.product-id-${producto.getAttribute("data-product")}`);
    const dataProducto = decodeJson(dataProductoId.getAttribute("data-product"));
    const infoProduct = {
        idProducto: dataProducto.Codigo,
        image: dataProducto.img,
        title: dataProducto.Uso,
        price: dataProducto.Precio,
        id: dataProducto.Codigo,
        amount: 1
    }

    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);

    const exist = buyThings.some(product => product.id === infoProduct.id);
    if (exist)
    {
        const pro = buyThings.map(product =>
        {
            if (product.id === infoProduct.id)
            {
                product.amount++;
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
    loadHtml();
    //console.log(infoProduct);
}

function loadHtml() 
{
    if (htmlListProducts){

        clearHtml();
        buyThings.forEach(product =>
            {
                const row = template.cart_product_item(product)
                htmlListProducts.appendChild(row.get()[0]);
                htmlTotalPayAmount.innerHTML = totalCard;
                htmlAmountProduct.innerHTML = countProduct;
            });
        }else{ 
            console.log("No esta cargado")
        }
}
function clearHtml() 
{
    htmlListProducts.innerHTML = '';
    htmlListProducts.innerHTML = '';
    htmlListProducts.innerHTML = '';
}
function saveCart() {
    localStorage.setItem("datetimeLastUpdate", new Date().toISOString())
    localStorage.setItem("cartValues", JSON.stringify(buyThings))
}

module.exports = {
    init,loadModalCart,loadResultsProduct
}