
const headerVar = document.querySelector(".header")
const mainVar = document.querySelector("main")
const h1 = document.createElement("h1")
h1.textContent = "Proyectos"
h1.setAttribute("class","text-header text-center ")// agregar un atributo
headerVar.appendChild(h1)


const navegation = document.createElement("nav")
navegation.setAttribute("class","text-center")
mainVar.appendChild(navegation)

for  (let i=1;i<5;i++){

    let button = document.createElement("button")
    button.setAttribute("class","button-main m-4 ")
    navegation.appendChild(button)
    switch (i){
        case 1:  {button.innerHTML = "<a class=bt-link href=https://alexisvidela.github.io/html/calculadora.html > Calculadora"}
        break
        case 2:  {button.innerHTML = "<a class=bt-link  href=https://alexisvidela.github.io/html/admintareas.html > Administrador de tareas"}
        break
        case 3:  {button.innerHTML = "<a class=bt-link  href=https://alexisvidela.github.io/html/sistemadestock.html > Sistema de Stock"}
        break
        case 4:  {button.innerHTML = "<a class=bt-link  href=https://alexisvidela.github.io/html/pronostico.html > Pronostico del tiempo"}
        break
    }
}