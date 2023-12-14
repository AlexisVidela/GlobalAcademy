const nameProd= document.getElementById("nameID")
const priceProd = document.getElementById("priceID")
const list = document.getElementById("lista")
let id = 0




function add_product(){
    const article = document.createElement("article")
    const span = document.createElement("span")
    const h1 =document.createElement("h1")
    const parf = document.createElement("p")
    const buttonCheck = document.createElement("button")
    const buttonDelete = document.createElement("button")
    
    
    h1.textContent = nameProd.value
    parf.textContent = priceProd.value
    
    span.appendChild(h1)
    span.appendChild(parf)
    buttonCheck.setAttribute("class","imgprodcheck")
    buttonCheck.setAttribute("id","button"+id)
    buttonCheck.setAttribute("onclick","Check_prod("+id+")")

    buttonDelete.setAttribute("class","imgdeleteprod")
    buttonDelete.setAttribute("onclick","Delete_prod("+id+")")
    buttonDelete.setAttribute("id","button"+id)

    article.setAttribute("class","nuevoprod prod txt-left p-2 m-3")
    article.setAttribute("id",id)
    article.appendChild(span)
    article.appendChild(buttonCheck)
    article.appendChild(buttonDelete)

    list.appendChild(article)
    document.getElementById("nameID").value=""
    document.getElementById("prideID").value=""
    id++
    
}

function Delete_prod(idprod){
 const idArticle = document.getElementById(idprod)
 idArticle.remove()
}

function Check_prod(idprod){
    const idArticle = document.getElementById(idprod)
    idArticle.classList.toggle("prodcheck")
    for (let i=0;i<2;i++){
        const button  = document.getElementById("button"+idprod)
        button.remove()
    }
}
function new_list(){
    list.innerHTML=""
}

function modeDark(){
    if (darkWeb ==0){
        body.style.color = "white"
        body.style.backgroundColor = "dimgrey"
        txtheader.style.color="dimgrey"
        button.innerHTML="Ligth Mode"
        button.classList.remove('btn-secondary')
        button.classList.add('btn-primary')
        darkWeb=1
    }else{
        body.style.color = "black"
        body.style.backgroundColor = "white"
        txtheader.style.color="black"
        button.innerHTML="Dark Mode"
        button.classList.remove('btn-primary')
        button.classList.add('btn-secondary')
        darkWeb=0
    }
}