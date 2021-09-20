//DECLARO VARIABLES
let carrito = []
const birrasEnCarrito = document.getElementById("birrasEnCarrito")
const grillaDetalleCheckOut = document.getElementById("grillaDetalleCheckOut")

let birra = new CalculadoraCarrito(carrito)


// CREACION DE TARJETAS DE COMPRA DESDE EL JSON CON PRODUCTOS
const URLLISTABIRRAS = "js/jsonBirras.JSON";
$(() => {
  $.get(URLLISTABIRRAS, function (response, status) {
    if (status === "success") {
      let misBirras = response;
      for (const birra of misBirras) {
        $("#celdaDeBirras").append(`<div id="casilla-merch" class="col-sm-6 col-md-4 col-lg-3 text-dark">
                                      <div class="casillaMerch">
                                        <img class="img-merch" src="${birra.imagen}" alt="imagen_de_producto">
                                        <h5>${birra.nombre}</h5>
                                        <h2>$ ${birra.precio}</h2>
                                        <div class="btn3">
                                          <button  type="button" class="btn3 btn btn-danger" onclick="agregoBirrasAlCarrito(${birra.birraid})">Añadir al 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket2-fill" viewBox="0 0 16 16">
                                              <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z"/>
                                            </svg>
                                          </button></div>
                                        </div>
                                    </div>`)
      }
      let casillaMerchs = $(".casillaMerch");
      for (let i = 0; i < casillaMerchs.length; i++) {
        casillaMerchs[i].addEventListener("mouseover", () => casillaMerchs[i].style.backgroundColor = 'rgb(255, 166, 0, 0.85)');
        casillaMerchs[i].addEventListener("mouseout", () => casillaMerchs[i].style.backgroundColor = 'rgba(255, 255, 255, 0.2)');
      }
    };
  });
  recuperoCarrito();
});



//GESTION DEL CARRITO
const agregoBirrasAlCarrito = (id) => {
  $.get(URLLISTABIRRAS, function (response, status) {
    if (status === "success") {
      let birrasEnCarrito = response
      let r = birrasEnCarrito.find(b => b.birraid == id);
      carrito.push(r);
      console.log(`Se agrego el elemento ${r.nombre}`);
      console.table(r);
      actualizoCarrito();
      guardoCarrito();
    }
  })
}

const actualizoCarrito = () => {
  let leyendaCarrito = `<span>ELEMENTOS EN CARRITO: ${carrito.length}</span>`
  birrasEnCarrito.innerHTML = leyendaCarrito;
}

const armoCheckOut = () => {
  let birra = new CalculadoraCarrito(carrito);
  let fila = "";
  grillaDetalleCheckOut.innerHTML = "";
  if (carrito.length > 0) {
    for (let birra of carrito) {
      fila = `<tr>
                  <td>${birra.nombre}</td>
                  <td class="col right">$ ${birra.precio}</td>
              </tr>`
      grillaDetalleCheckOut.innerHTML += fila;
    }
    fila = `<tr>
              <td>Total de Compra</td>
              <td class="col right">$ ${birra.calculoTotalCarrito()}</td>
          </tr>`
    grillaDetalleCheckOut.innerHTML += fila;
    alternarVistaCheckout();
  } else {
    alert("Disculpa, tenes que agregar algo al carrito");
  }
}

const alternarVistaCheckout = () => {
  checkOut.classList.toggle("hide");
}

const finalizarCompra = () => {
  alert("Gracias por tu Compra !!");
  setTimeout(() => {
    carrito = [];
    actualizoCarrito();
    alternarVistaCheckout();
    borroCarrito();
  }, 1000)
}

//GESTION DE CONTENIDO DEL CARRITO EN LOCAL STORAGE
const guardoCarrito = () => {
  if (carrito.length > 0)
    localStorage.carrito = JSON.stringify(carrito);
}

const recuperoCarrito = () => {
  if (localStorage.carrito != undefined) {
    carrito = JSON.parse(localStorage.carrito);
    actualizoCarrito();
  }
}

const borroCarrito = () => {
  localStorage.clear();
}

//BOTONES DE MERCH
$("#btnVerCarrito").click(() => {
  armoCheckOut();
})

$("#btnVolver").click(() => {
  alternarVistaCheckout();
})

$("#btnFinalizarCompra").click(() => {
  finalizarCompra();
})