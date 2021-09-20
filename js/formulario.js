//FORMULARIO DE LOGIN PARA CLIENTES FRECUENTES.

let logueado = false;

$("#btnRegistrar").click(() => {
    let user = $("#user");
    let contraseña = $("#contraseña");
    if (user.val() == "Pibecoder" && contraseña.val() == "Coderhouse") {
        logueado = true
        console.log("Loguedo cambio a true");
        $("#inicioSesion").append(` <div id="userCard" style="display:none;">
                                        <section class="container">      
                                            <div class="row">
                                                <div class="col-sm-3 col-md-3 col-lg-3 avatar">
                                                    <img id="avatar"class="userCard"  src="images/Pibecoder.png" width="100">
                                                    <h2 id="userName"class="sf">${user.val()}</h2>
                                                </div>
                                                <div class="col-sm-9 col-md-9 col-lg-9">
                                                    <div id="sideCard">
                                                        <h2 id="userName"class="sf">BIENVENIDO</h2>
                                                        <p class="sf" > ${user.val()} Tomate una birra con nosotros y sentite como en casa.</p>
                                                        <h3 id="userName"class="sf">Aprovecha un 20% de Descuento</h3>
                                                    <div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>`)
        $('#userCard').show(1500);
        $("#formSesion").hide(500);
        $("#cliente").hide(500);
    } else {
        alert("Debe Indicar Nombre de Usuario y/o Contraseña Correctos");
    }
});



//FORMULARIO DE CONSULTAS PARA CLIENTE.
$(() => {
    console.log("El DOM se ha cargado exitosamente.");
    $("#formulario").append(`   <div class= "consultas">
                                    <h2 style="text-align: justify;">Tenes alguna consulta o recomendacion?</h2>
                                    <form id="miFormulario">
                                        <div class="mb-3">
                                            <label class="form-label">Dejanos tu Nombre</label>
                                            <input type="text" class="form-control" id="nombreConsulta" placeholder="nombre">
                                        </div>
                                        <div class="mb-3">
                                            <label  class="form-label">Dejanos tu Email</label>
                                            <input type="email" class="form-control" id="email" placeholder="nombre@ejemplo.com">
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Dejanos tu consulta</label>
                                            <textarea class="form-control" id="areaDeTexto" rows="3"></textarea>
                                        </div>
                                        <div class="col-auto">
                                            <button id= "btnConsulta" type="submit" class="btn btn-primary mb-3">Enviar Consulta</button>
                                        </div>
                                    </form>
                                </div>`);
    $("#btnConsulta").click(() => {
        let user = $("#nombreConsulta");
        let email = $("#email");
        let consulta = $("#areaDeTexto");
        if (user.val() != "" && email.val() != "" && consulta.val() != "") {
            let nombre = $("#nombreConsulta");
            alert(`Muchas Gracias por tu consulta ${nombre.val()}`);
        } else {
            alert(`Debe indicar una Casilla de Correo, Nombre y colocar su consulta.`);
        }
    })
    $(":input").change((e) => {
        console.log(`El campo ${e.target.id} se ha completado con  ${e.target.value}`);
    })
})