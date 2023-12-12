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
    resultadoCalculadora="0"
    actualizarResultado()
}
function actualizarResultado(){
 document.getElementById('viewCalt').value =operacion1+operacionActual+operacion2
 document.getElementById('result').value=resultadoCalculadora
}