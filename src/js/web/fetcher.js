// const _devEnable = false
const _devEnable = window.location.protocol == "http:"
const _serverLocal = `http://${window.location.hostname}:1234/`
const _server = `https://api.elevapuertas.com/`

function getData(metodo, datos, callback,fallido)
{
    console.debug("dev: " + _devEnable);
    console.debug("Metodo: " + metodo);
    console.debug("Datos:");
    console.debug(datos);
    const myUrlWithParams = new URL((_devEnable ? _serverLocal : _server) + metodo);
    for (const campo in datos)
    {
        myUrlWithParams.searchParams.append(campo, datos[campo]);
    }

    var settings = {
        "url": myUrlWithParams.href,
        "method": "GET",
        crossDomain: true,
        "timeout": 30000,
    };

    $.ajax(settings).done(function (response)
    {
        // console.log(response);
        callback(response);
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        if (fallido){
            fallido({status: textStatus,error:errorThrown})
        }else {
            callback({err:errorThrown,status:textStatus})
        }
    });
}
async function postData(metodo, datos)
{
    console.debug("dev: " + _devEnable);
    console.debug("Metodo: " + metodo);
    console.debug("Datos:");
    console.debug(datos);
    const myUrlWithParams = new URL((_devEnable ? _serverLocal : _server) + metodo);

    var settings = {
        "url": myUrlWithParams.href,
        "method": "POST",
        crossDomain: true,
        "timeout": 30000,
        data: datos
    };

    return new Promise((ok, ko) =>
    {
        $.ajax(settings)
            .done(function (response)
            {
                ok(response);
            })
            .fail(function ( jqXHR, textStatus, errorThrown )
            {
                ko(errorThrown)
            });
    });
}

function getMakes()
{
    getData("makesAvailables", null, (datos) =>
    {
        app.view.loadSelect($('#select-marcas'), datos, "Seleccione el fabricante");
    });
}
function getModels()
{
    const marca = $('#select-marcas').find(":selected").val();
    getData("search", { marca: marca }, (datos) =>
    {
        app.view.loadSelect($('#select-modelos'), datos, "Seleccione un modelo");
    });

}

function getYears()
{
    const marca = $('#select-marcas').find(":selected").val();
    const modelo = $('#select-modelos').find(":selected").val();
    getData("search",
        {
            marca: marca,
            modelo: modelo
        },
        (datos) =>
        {
            app.view.loadSelect($('#select-anno'), datos, "Seleccione el año");
        });
}
function getProducts()
{
    const marca = $('#select-marcas').find(":selected").val();
    const modelo = $('#select-modelos').find(":selected").val();
    const año = $('#select-anno').find(":selected").val();
    getData("search",
        {
            marca: marca,
            modelo: modelo,
            anno: año
        },
        (datos) =>
        {
            // console.log(datos);
            app.view.loadGrid($('#resultados'), datos);
        });
}

module.exports = {
    getData, postData, 
    getMakes, getModels, getProducts, getYears
}
