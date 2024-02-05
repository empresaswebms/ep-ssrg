class ProductoCarrito{
    constructor(obj,cantidad){
        if (obj){
        this.Id= obj.Codigo || null;
        this.Codigo = obj.Codigo || null;
        this.Cuerpo = obj.Cuerpo || null;
        this.Img = obj.Img || "images/placeholder_product.jpg";
        this.Uso =obj.Uso || null;
        this.Precio =obj.Precio || 0;
        this.Cantidad = cantidad || obj.Cantidad || 0;
        }
    }

    /**
     * 
     * @returns {*}
     */
    
    static getTotal(prod) {
        return prod.Precio * prod.Cantidad;
    }
    
}

class ProductoInfo {
    constructor(obj){
        if (obj){
            this.Cuerpo = obj.Cuerpo || null;
            this.Img = obj.Img || "images/placeholder_product.jpg";
            this.Uso = obj.Uso || null;
            this.Codigo = obj.Codigo || null;
            this.Precio = obj.Precio || 0;
            this.Disponible = obj.Disponible || false;
        }
    }
}


module.exports={
    ProductoCarrito, ProductoInfo
}