var cuentas = [
    {
        id: 1,
		name:"Mauricio", 
    	saldo:200, 
    	password:"1234", 
    }, {
        
		id: 2,
		name:"Xime", 
    	saldo:290, 
    	password:"5678", 
    }, {
        id: 3,
		name:"Oscar", 
    	saldo:67, 
    	password:"9101", 
    }
];

function login(form){
    if (form.InputName.value == "Mauricio"){
        if (form.InputPassword.value == "1234"){
            location = "/html/usuario.html"
        usuario = cuentas[0];
		} else {
            alert("Contraseña incorrecta")
        }
} else if (form.InputName.value == "Xime"){
        if (form.InputPassword.value == "5678"){
            location = "/html/usuario.html"
		usuario = cuentas[1];
        } else {
            alert("Contraseña incorrecta")
}
} else if (form.InputName.value == "Oscar"){
        if (form.InputPassword.value == "9101"){
            location = "/html/usuario.html"
		usuario = cuentas[2];
        } else {
            alert("Contraseña incorrecta")
        }
 } else {
        alert("Intente nuevamente :)");
    }
}

var usuario1 = cuentas[0].saldo
var usuario2 = cuentas[1].saldo
var usuario3 = cuentas[2].saldo

let max = 990;
let min = 10;

function ver_saldo() {
    alert(usuario1);
}

function retirar() {
    
}

// if (document.getElementById(InputName) == "Mauricio") {
//         if (document.getElementById(InputPassword) == "1234"){
//             ;
// 		} else {
//             alert("Tenemos dificultades técnicas :(")
//         }
//     } else {
//         alert("Tenemos dificultades técnicasssssss :(")
//     }

// }

// usuario.saldo = document.getElementById(saldo)
// var usuario = usuario.saldo;

// cuentas[index] = usuario;

// //variable index, validación, igualar index al id
// // var index;

// function login(form){
//     if (form.InputName.value == "Mauricio"){
//         if (form.InputPassword.value == "1234"){
//             location = "/html/usuario.html"
//         usuario = cuentas[0];
//		} else {

// Ejemplo

// modulo de usuario
// contraseña_____________
// boton -> funcion acceso


// funcion acceso
// if(contraseña = password-dato que tenemos alojado en el arreglos, ){
//     mensaje:"La conraseña es correcta";
//     link = usuario.html
// }
// else{
//     mensaje:"valio el acceso"
// };

// var account [
//     datso, por, comas
// ];
// aconut.legth -> resultado 3

// var

// */