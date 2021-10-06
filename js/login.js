// verificar usuario y contraseña 
// si no son correctos no = alerta (incorrecto)
// si son CORRECTOS = ingresar
// usuarios = [];

// function usuario() {
//     let nameUsuario = document.getElementById('nombre').value
//     let saldo = 
// }
var nombre = document.getElementById('InputName');
var password = document.getElementById('InputPassword');

function enviarFormulario(){
    console.log('Enviando formulario...');

    var mensajesError = [];

    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingresa tu nombre');
    }
    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingresa tu contraseña');
    }

    error.innerHTML = mensajesError.join(', ');

    return false;
}




// Usuarios = [];

// function Submit() {
//     let nombre = document.getElementById('nombre').value
//     let saldo = document.getElementById('saldo').value
//         usuarios.push(new Usuario(nombre, saldo))
// }

// class Usuario {
//     constructor (nombre, saldo){
//         this.nombre = nombre;
//         this.saldo = saldo;
//     }
// }

// function Submit() {
//     alert("Hola, excelente día");
// }
