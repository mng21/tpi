const valorTicket = 200;

let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria = document.getElementById("categoriaSelect");

function total_a_pagar(){

if(nombre.value ===""){
    alert("Por favor, escribí tu Nombre.");
    nombre.focus();
    return;
}
if(apellido.value ===""){
    alert("Por favor, escribí tu Apellido.");
    apellido.focus();
    return;
}

if(email.value ===""){
    alert("Por favor, escribí tu Correo.");
    email.focus();
    return;
}

const validarEmail = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if(!validarEmail(email.value)){
    alert("Por favor, escribí un Correo Electrónico válido");
    email.focus();
    return;
}

if((cantidadTickets.value == 0) || (isNaN (cantidadTickets.value))){
    alert("Ingresá una cantidad válida de Tickets");
    cantidadTickets.focus();
    return;
}

if(categoria.value == ""){
    alert("Por favor selecciona una categoría.");
    categoria.focus();
    return;
}
let totalValorTickets = (cantidadTickets.value) * valorTicket;

if(categoria.value == 0) {
    totalValorTickets = totalValorTickets;
}

if(categoria.value == 1) {
    totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
}

if(categoria.value == 2) {
    totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
}

if(categoria.value == 3) {
    totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
}

totalPago.innerHTML = "Total a Pagar: $ " + totalValorTickets;

}

btnResumen.addEventListener('click', total_a_pagar);

function reset_total_a_pagar(){
    totalPago.innerHTML ="Total a Pagar: $";
}

btnBorrar.addEventListener('click', reset_total_a_pagar);


