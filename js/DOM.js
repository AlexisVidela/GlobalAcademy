//Document Object Model: es una representacion jerarguica de la estructura de un documento HTML.
// permite a javaScript acceder y manipular elementos HTML, asi como responder eventos de la pagina

/*
Seleccion de elementos

document.getElementById('id') => Devuelve un elemento HTML con el id espesificado

document.getElementByClassName('class') => Devuelve una coleccion de elementos HTML con la clase especificada

document.getElementByTagName('tag') => Devuelve una collecion de elementos HTML con el Tag especificado

document.querySelector('selector') => Devuelve el primer elemento que coicida con el selector especificado
document.querySelectorAll('selector') => Devuelve todos los elementos que coicida con el selector especificado
*/

const tituloTag = document.getElementsByTagName('h1')//muestra todo sus propiedades
const tituloSelc = document.querySelector('h1')//muestra el h1 limpio
const subtitulo = document.querySelector('.subtitulo') //usamos el . para seleccionar una class(igual que en CSS)
const parrafoId = document.getElementById('parrafo')
const parrafoSelc = document.querySelector('#parrafo')//usamos el # igual que en CSS para acceder a un ID

tituloSelc.innerHTML = "DOM en Javascript"//pudes agregar un h2 dento
//        .textContent = "agrega texto normal sin HTML"


subtitulo.style.color = "blue"
subtitulo.style.backgroundColor = "gray" //background-color es la propiedad en HTML pero en style de js 
//lo escribimos como camelkeys 


//Modificamos las clases de un elemento usando classList
parrafoId.classList.add('js')//agregar class
//parrafoId.classList.remove() remueve el dato
//parrafoId.classList.toggle () si ya tiene esa Class se la deja sino se la suma

//Modificamops atributos de un elemento usando setAttribute/ getAttribute
//../img/kratos.jpg
const img = document.querySelector ('img')
let Attribute = img.getAttribute('alt')//obtiene el valor de ese atrivuto
console.log(Attribute)
img.setAttribute("src","../img/kratos.jpg")
if (Attribute == "Atreus"){
    img.setAttribute('alt','Kratos')
    Attribute = img.getAttribute('alt')
}
console.log(Attribute)


///  JUEGO---------------------------------------------------
const numberoAleatoreo = Math.floor(Math.random()*10)+1


function verificarNumero (){

    const numUser = Number(document.getElementById('adivinarNumero').value)
    const resultado = document.getElementById('resultado')
    if (numUser=== numberoAleatoreo){
        resultado.textContent="Adivinaste"
    }else{
        resultado.textContent="No adivinaste"
    }
}

/// CALCULADORA --------------------------------------------
let operacion1=""
let operacion2=""
let operacionActual=""
let resultadoCalculadora="0"

function agregarNumero(num){
    if (operacionActual === ""){
        operacion1 += num
        console.log("n1: "+num)
    }else{
        operacion2 += num
        console.log("n2: "+num)
    }
    actualizarResultado()
}

function operacion(opr){
    operacionActual=opr
}

function calcular(){
    const num1 = parseFloat(operacion1)
    const num2 = parseFloat(operacion2)
    

    switch (operacionActual) {
        case '+':
            resultadoCalculadora = num1 + num2
            console.log(num1+" + "+num2)
            break;
        case '-':
            resultadoCalculadora = num1-num2
            console.log(num1+" - "+num2)
            break;
        case '/':
            resultadoCalculadora = num1 / num2
            console.log(num1+" / "+num2)
            break;
        case '*':
            resultadoCalculadora = num1 * num2
            console.log(num1+" * "+num2)
            break;
    }
    actualizarResultado()
    operacion1=resultadoCalculadora.toString()
    operacion2=""
    operacionActual=""
    
}

function borrarNumero(){
    operacion1=""
    operacion2=""
    operacionActual=""
    actualizarResultado()
}
function actualizarResultado(){
 document.getElementById('viewCalt').value =operacion1+operacionActual+operacion2
 document.getElementById('result').value=resultadoCalculadora
}