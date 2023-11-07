/*Operadores logicos MATEMATICO 
> , >= ,< ,<=
Oeradores logicos DE DATO
== (igual) , !=(distinto)
===(igua tipo y valor) , !==(distinto tipo y valor)  USO RECOMENDADO siempre en comparaciones
 */
const categoria = "ropa"

switch(categoria){
case "ropa":
    console.log("remeras,pantalon")
    break
case "calzado":
    console.log("zapatillas")
    break
default:
    console.log("categoria no encontrada")
}

/*
const Edad = 1
while(Edad !== 27){
    const edadAdivinar = parseInt( prompt("que edad tengo"))
    if (edadAdivinar === 27){
        alert("acertaste")
        break //para finalizar el bucle
    }else {
        alert("no es la correcta")
    }
}*/

let var_ini = 1
const var_end = 10
for (var_ini;var_ini<=var_end;var_ini++)
{
    console.log("ciclo: ",var_ini);
}

const listCars = ["Bugatti","Munstang","Ford","Fiat","Lamborgini","Chevrolet"]
for (let ii =0;ii<listCars.length;ii++){
console.log("Cars : ",listCars[ii])
}

//For-Each: ejecuta un codigo en base a cada una de los elemtos que se encuentran dentro
const animales = ["gato" , "perro","loro","iguana"]

animales.forEach((animal,index)=> console.log(`El animal ${animal}, esta en el indice ${index}`))//recorre el array

//For-of / For-in

const user = {
    username : "Alex",
    email : "aledenvid@gmail.com",
    years : 27
}


//util para recorrer arrays 
for (const animal of animales){
    console.log(animal)
}
//util para recorrer Objetos
for (const prop in user){
    console.log(prop);
    //teniendo la prop del objeto, puedo acceder a ella para visulizar el dato a travez de BRACKET NOTATION
    console.log(user[prop]);
}

//Map la diferencia entre el map y el foreach , es que nos devuelve ALGO UTILIZABLE (un array)
const numPares = [2,4,6,8,10]
//multiplcarlo por 3 y crear un nuevo array
const newNum = numPares.map((num)=> {
    return num*3
})
console.log(newNum)

//calcular factorial de 10 ej : 10*9*8*7*6*5*4*3*2*1 = 3628800
//funcion recursiva (se llama a si misma)

const factorial = (num) => {
    //condicion base - corta la ejecucion
    if (num == 0 ||num == 1){
        return 1
    } else {
        return num*factorial(num-1)
    }
}

console.log(factorial(10))