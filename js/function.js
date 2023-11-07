function sumar (n1,n2){
 const res = n1+n2   
 alert(`la suma es ${res}`)
}
function multiplicar(a,b){
    const res = a*b
    alert(`la multiplicacion es es ${res}`)
}

const num1 = parseInt (prompt("n1"))//para tomar el valor en forma de int
const num2 = parseInt (prompt("n2"))

sumar(4,5)
multiplicar(4,5)

function calPromedio(a,b,c){
    const promedio = (a+b+c)/3
    return promedio //devuleve el dato que contiene esa var
}
const almacenarPromedio = calPromedio(6,7,9)
alert(`el alumno tiene promedio ${almacenarPromedio}`) 

//FUNCION FLECHA

function calCubo(num){
    const res = num*num*num
    return res
}
//es lo mismo que (FUNCION FLECHA)
const calularCubo = (num) => num*num*num//return num*num*num

const resultado = calCubo(3)
console.log(resultado)
const resultado2 = calularCubo(2)
console.log(resultado2)

