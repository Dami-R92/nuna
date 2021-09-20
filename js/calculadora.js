class CalculadoraCarrito { //Objeto carrito renombraaa pelotudoooo

    constructor(carritoBirras) {
        let carrito = carritoBirras;
        this.calculoTotalCarrito = () => {
            let total = 0
            if (logueado != false) {
                debugger
                for (let birra of carrito) {
                    total += (parseFloat(birra.precio) * 0.8)
                }
            } else {
                for (let birra of carrito) {
                    total += parseFloat(birra.precio)
                }
            }
            return total
        }
    }
}

