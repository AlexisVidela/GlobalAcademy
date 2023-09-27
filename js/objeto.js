//Objetos: son estructuras armadas por PROPIEDADDES que almacenan VALORES
const Formulario = {
    nombre:"alexis Videla",
    edad: 27,
    ciudad: "rio 4",
    profecion: "programador",
    404: "no fount"
}

//acceder a los valores a traves de
//metodo 1: DOT NOTATION
Formulario.nombre

//metodo 2: BRACKET  NOTATION
Formulario["edad"] //la PROPIEDAD debe ir como stringe

//para ver var numericas no hace falta convertirlas a stringe
Formulario[404]

//como agregar una PROPIEDAD
Formulario["sexo"]= "Masculino"

//crear una propiedad y un valor desde un alet(prompt)
const proiedad = prompt("nombre de la propiedad")
const valor = prompt("valor")
const test = {}

//IMPORTANTE para que el nombre de la propiedad la tome el objeto hay que ingresarlo asi
test[proiedad] = valor
console.log(test)

//Metodos para OBJETOS, no tienen METODOS ASOCIADOS para ellos se usa la Class "Object"
Object.keys(Formulario) //muestra las PROPIEDADES dentro del objeto
Object.values(Formulario)//muestra los VALORES de cada PROPIEDAD
Object.entries(Formulario)//muestra un array con arrays dentro que tienen las PROPIEDADDES y sus VALORES
