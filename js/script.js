//para crear una variables usaremos ciertas reglas
// let , const => nos permiten crear variables
//usaremos la sintaxis correcta... primero crearemos el nombre y despu le asignamos el valor
let nombre="alexis"
const mascota="Jr"

//con let podramos cambiar el contenido almacenado---- const nunca cambiara el valor de adentro

//metodo para visualizar nustras variables

//console.log() para visualizar resultados en la consola del programador 
console.log("hola mundo")
//Alert para que el usuario visualice los reultados
/*alert("ALERTA")*/
//pedir info desde la pag Alert, para eso utilizaremos prompt: es una ventada 
//de alerta pero con la posibilidad de ingresasr info

let nombre_user = prompt("ingrese su nombre: ")
alert(nombre_user)

console.log(typeof nombre_user); // muestra el tipo de dato guardado (float,int,bool ..ect)

let num1 = prompt("ingrese n1 ")
let num2 = prompt("ingrese n2 ")
let suma = parseInt(num1) + parseInt(num2) //parseo los transfomar a numero
alert("la suma es: "+suma)

let nom ="alexis"
let ciudad="rio 4"
let edad=26
alert("FORMA COMUN: soy "+nom+" de "+ciudad+" y tengo "+edad+" años!")


//template string : forma mas facil de escribir las var adentro del string
//con (``):comillas invertidas (alt+96) y poniento ${var}
alert(`FORMA TEMPLATE STRING: soy ${nom} de ${ciudad} y tengo ${edad} años`)
