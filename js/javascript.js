
const list = document.getElementById("lista")
const body= document.querySelector('body')
const header = document.querySelector('header')
const button = document.getElementById('buttonID')
const listShop=[]
let id = 0
let darkWeb=0
let total=0

/*PASA LOS DATOS DEL INPUT A VARIABLES */
function html_Js(){
    const nameHtml= document.getElementById("nameID").value
    const priceHtml = document.getElementById("priceID").value
    if (validation(nameHtml,priceHtml)===0){
    add_product(nameHtml,priceHtml)
    document.getElementById("nameID").value=""
    document.getElementById("priceID").value=""
    }
}
/*VALIDA QUE LOS DATOS SEA CORRECTOS */
function validation(input1,input2){
    if (input1===""){ 
        alert("Please enter a valid name product")
        return
    }
    if (input2===""){
         alert("Please enter a valid price")
         return
    }
    if (isNaN(input2)){
        alert("The price has to be a number")
        return
    }
    return 0
}


/*GENERE CONTENIDO EN EL HTML CON LA INF RECIBIDA */
function add_product(nameProd,priceProd){

    const article = document.createElement("article")
    const span = document.createElement("span")
    const h1 =document.createElement("h1")
    const parf = document.createElement("span")
    const buttonCheck = document.createElement("button")
    const buttonDelete = document.createElement("button")
    const span2 = document.createElement("span")
    span2.textContent="$"
    
    h1.textContent = nameProd
    h1.setAttribute("class","m-0 p-0")
    parf.textContent = priceProd
    parf.setAttribute("class","m-0 p-0")
    
    span.appendChild(h1)
    span.appendChild(span2)
    span.appendChild(parf)
    buttonCheck.setAttribute("class","imgprodcheck")
    buttonCheck.setAttribute("id","button"+id)
    buttonCheck.setAttribute("onclick","Check_prod('A',"+id+")")

    buttonDelete.setAttribute("class","imgdeleteprod")
    buttonDelete.setAttribute("id","button"+id)
    buttonDelete.setAttribute("onclick","Delete_prod('A',"+id+")")
    

    article.setAttribute("class","nuevoprod prod txt-left p-2 m-3")
    article.setAttribute("id","A"+id)
    article.appendChild(span)
    article.appendChild(buttonCheck)
    article.appendChild(buttonDelete)

    list.appendChild(article)
    id++
    skinnProd()
    
}
/*ALMACENA LOS VALORES INDEPENDIENTES EN UN OBJETO Y LOS PONE EN UN ARREGLO*/
function produc_a_object(string,num){
    const product = {
        namep : "",
        pricep : ""
    }
    product.namep = string
    product.pricep= num
    listShop.push(product)
}
/*ELIMINA EL PRODUCTO SELECCIONADO*/
function Delete_prod(Char,idprod){
 const idArticle = document.getElementById(Char+idprod)
 idArticle.remove()
}
/*CONFIRMA EL PRODUCTO SELECIONADO */
function Check_prod(Char,idprod){
    const idArticle = document.getElementById(Char+idprod)
    idArticle.style=null
    idArticle.classList.remove("nuevoprod")
    idArticle.classList.toggle("prodcheck")
    priceTotale(Char+idprod)
    saveProd(Char+idprod)
    for (let i=0;i<2;i++){
        const button  = document.getElementById("button"+idprod)
        button.remove()
    }
}
/* LIMPIA LA LISTA EN EL HTML*/
function new_list(){
    list.innerHTML=""
    updateTotale(false,0)
}
/*CAMBIA EL DISEÑO DE LA WEB A MODO OSCURO */
function modeDark(){
    if (darkWeb ==0){
        body.style.color = "white"
        body.style.backgroundColor = "dimgrey"
        header.style.color="dimgrey"
        header.setAttribute("class","imgheaderdarck bg-black")
        button.innerHTML="Ligth Mode"
        button.classList.remove('btn-secondary')
        button.classList.add('btn-primary')
        darkWeb=1
    }else{
        body.style.color = "black"
        body.style.backgroundColor = "white"
        header.style.color="black"
        header.setAttribute("class","imgheader bg-black")
        button.innerHTML="Dark Mode"
        button.classList.remove('btn-primary')
        button.classList.add('btn-secondary')
        darkWeb=0
    }
    skinnProd()
}
/* ACTULIZA EL STILO DE LOS PRODUCTOS DEPENDIENDO EN EL MODO QUE SE ENCUENTRE*/
function skinnProd(){
    const Art = document.querySelectorAll('.nuevoprod')
    if (darkWeb ==1){
        for (var i = 0; i < Art.length; i++) {
            Art[i].style.backgroundColor = "rgb(68, 68, 68)"
            }
    }else{
        for (var i = 0; i < Art.length; i++) {
            Art[i].style.backgroundColor = "rgb(208, 208, 208)"
            }
    }
}
/* SUMA EL VALOR DEL PRODUCTO CHEQUEADO AL TOTAL*/
function priceTotale(idprod) {
    const price = Number(document.querySelectorAll('#'+idprod+' > span > span')[1].textContent);
    updateTotale(true,price)
    
}
/* OBTIENE LOS VALORES DEL PRODUCTO (NOMBRE Y PRECIO)*/
function saveProd(prod){
 const tagprod = document.querySelectorAll('#'+prod+' > span > h1')[0].textContent
 const valueprod = Number(document.querySelectorAll('#'+prod+' > span > span')[1].textContent);
 produc_a_object(tagprod,valueprod)
}
/* AGREGA AL HTML LOS PRODUCTOS GUARDADOS EN EL ARREGLO*/
function retrieveProd(){

    for(let i=0;i<listShop.length;i++){
        add_product(listShop[i].namep,listShop[i].pricep)
    }
    listShop.splice(0,listShop.length)
    deleteProdCheck()
    updateTotale(false,0)
}
/* ELIMINA AQUELLOS PRODUCTO QUE ESTEN CONFIRMADOS*/
function deleteProdCheck(){
    const Art = document.querySelectorAll('.prodcheck')
    for (var i = 0; i < Art.length; i++) {
        Art[i].remove()
        }
}
/*ACTUALIZA EL VALOR DEL TOTAL */
function updateTotale(bool,num){
    if (bool==true){
    total +=num
    document.getElementById("totale").value="$"+total
    }else{
        total=0
        document.getElementById("totale").value="TOTALE"
    }
}