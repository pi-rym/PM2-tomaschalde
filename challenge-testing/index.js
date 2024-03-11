class CarritoCompra {

    constructor(){
        
        this.productos = [];
    }

    agregarProducto(producto){
        this.productos.push(producto);
    }

    calcularTotal(){
        let total = 0;

        for (const producto of this.productos) total+= producto.price * producto.quantity;
            
        return total;
    }

    aplicarDescuento(porcentaje){
        const subtotal = this.calcularTotal();
        const descuento = this.calcularTotal() * (porcentaje /100);

        return subtotal - descuento;
    }

}

module.exports = CarritoCompra;