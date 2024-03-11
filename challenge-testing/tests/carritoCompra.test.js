const CarritoCompra = require('../index')

describe('Clase CarritoCompra',() => {

    let carritoCompra;
    beforeEach(() => {
        carritoCompra = new CarritoCompra()
    })


    describe('Sobre el constructor de la clase CarritoCompra', () => {

        it('CarritoCompra deberia ser una clase', () => {
            expect(typeof CarritoCompra.prototype.constructor).toBe('function')
        })

        it('carritoCompra deberia ser una instancia de CarritoCompra', () => {
            expect(carritoCompra instanceof CarritoCompra).toBe(true)
        })

        it('carritoCompra deberia guardar productos en una lista', () => {
            expect(carritoCompra.productos).toEqual([])
        })
    })

    describe('Metodos de la clase CarritoCompra', () => {
        
        //Creamos productos para utilizar y reutilizar en los its
        const producto1 = {
            id:1,
            name:'Lapicera',
            price: 1000,
            quantity: 3
        }

        const producto2 = {
            id:2,
            name:'Lapiz',
            price: 900,
            quantity: 5
        }

        it('Deberia tener un metodo llamado agregarProducto', () => {
            expect(typeof carritoCompra.agregarProducto).toBe('function')
        })

        it('Deberia tener un metodo llamado calcularTotal', () => {
            expect(typeof carritoCompra.calcularTotal).toBe('function')
        })

        it('Deberia tener un metodo llamado aplicarDescuento', () => {
            expect(typeof carritoCompra.aplicarDescuento).toBe('function')
        })

        it('El metodo agregarProducto deberia poder agregar un producto a la lista', () => {
            carritoCompra.agregarProducto(producto1);
            expect(carritoCompra.productos).toContain(producto1)
        })

        it('El metodo calcularTotal deberia poder calcular el total de la compra sumando los precios de todos los productos en el carrito', () => {
            
            carritoCompra.agregarProducto(producto1);
            carritoCompra.agregarProducto(producto2);

            const totalExpect = producto1.price * producto1.quantity + producto2.price * producto2.quantity; //Este es el total que espero
            const total = carritoCompra.calcularTotal(); //Este es el total del metodo que vamos a testear

            expect(total).toBe(totalExpect)
        })

        it('El metodo aplicarDescuento deberia poder aplicar un descuento al total de la compra', () => {
            
            carritoCompra.agregarProducto(producto1);
            carritoCompra.agregarProducto(producto2);

            const subtotal = producto1.price * producto1.quantity + producto2.price * producto2.quantity;
            const porcentajeDescuento = 10;

            const totalExpect = subtotal - (subtotal * (porcentajeDescuento/100)); //Este es el total que espero
            const total = carritoCompra.aplicarDescuento(porcentajeDescuento); //Este es el total que voy a obtener del metodo a testear

            expect(totalExpect).toBe(total)
        })
    })



})