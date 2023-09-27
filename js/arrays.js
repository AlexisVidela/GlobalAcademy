
//array
const nombre = ["alexis","denis","videla"]
//agregar items
//push(): nos ubica un elemento al final
nombre.push("shei")
//unshift(): nos ubica un elemento al principio
nombre.unshift("torres")
//pop(): elimina el ultimo elemento y nos indica cual fue
const elemDelet = nombre.pop() //elimino shei
//shift(): elimina el primer elemento y lo muestra
const elemDelet2 = nombre.shift() //elimino torres

//Slice y splice

//SLICE (): corta el array (indice, cant de indices) 
//NO MODIFICA EL ARRAY ORIGINAL
const frutas = ["manzana","uva","kiwi","banana","anana","frutilla"]
//                 0         1     2       3      4         5
const fruta_slice = frutas.slice(1,3) //arranca de indice 1 y corta 3 indice[0,1,2] por lo que
//quedaria un arrar de 2 indices el 1 y 2 [1,2]

//SPLICE(): SI MODIFICA EL ARRAY ORIGINAL
const frutas_splice = frutas.splice(1,3,"naranja") //corta 3 indices desde el indice 1 [1,2,3] y coloca
//en ese espacio a "naranja"
frutas //quedo sin los indices [1,2,3] y se agrego otro elemento, ahora estaria
//compuesto ["manzana","naranja","anana","frutilla"] 

//length : indica la cantidad de elementos del array
nombre.length //salida 3

//sort: nos permite ordenar el array de manera ASENDENTE
//agregar ".reverse()" en caso de ordenar de manera DESENDENTE
nombre.sort().reverse()

//! CASO CON NUMEROS
const numeros = [19,14,2,43,41,5]
numeros.sort((a,b) => a-b)//ASENDENTE [2, 5, 14, 19, 41, 43]
numeros.sort((a,b) => b-a)//DESENDENTE [43, 41, 19, 14, 5, 2]
numeros.sort()//ordena segun el primer numero del conjunto [14,19,2,41,43,5]

//concat(): unifica arrays

const animales_domesticos = ["perro","gato","pez"]
const animales_salvajes = ["lobo","pantera","leon"]
const animales_marinos = ["foca","ballena","orca"]
const animales = animales_domesticos.concat(animales_salvajes,animales_marinos)

//destructuring (): a los elementos de un array los maneja de forma individual como var unica

//const arrayCombinados = [animales_domesticos,animales_marinos,animales_salvajes]=> [Array(3), Array(3), Array(3)]
const arrayCombinados = [...animales_domesticos,...animales_marinos,...animales_salvajes]
// ['perro', 'gato', 'pez', 'foca', 'ballena', 'orca', 'lobo', 'pantera', 'leon']
console.log(arrayCombinados)