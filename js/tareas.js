const nameTarea = document.getElementById("nametarea")
const despTarea = document.getElementById("description")
const list = document.getElementById("lista")
let id = 0




function Agregar_Tarea(){
    const article = document.createElement("article")
    const span = document.createElement("span")
    const h1 =document.createElement("h1")
    const parf = document.createElement("p")
    const buttonCheck = document.createElement("button")
    const buttonDelete = document.createElement("button")
    
    h1.textContent = nameTarea.value
    parf.textContent = despTarea.value
    
    span.appendChild(h1)
    span.appendChild(parf)
    buttonCheck.setAttribute("class","imgtareacheck")
    buttonCheck.setAttribute("id","button"+id)
    buttonCheck.setAttribute("onclick","Check_Tarea("+id+")")

    buttonDelete.setAttribute("class","imgdeletetarea")
    buttonDelete.setAttribute("onclick","Delete_Tarea("+id+")")
    buttonDelete.setAttribute("id","button"+id)

    article.setAttribute("class","nuevatarea tarea txt-left p-2 m-3")
    article.setAttribute("id",id)
    article.appendChild(span)
    article.appendChild(buttonCheck)
    article.appendChild(buttonDelete)

    list.appendChild(article)
    document.getElementById("nametarea").value=""
    document.getElementById("description").value=""
    id++
    
}

function Delete_Tarea(idtarea){
 const idArticle = document.getElementById(idtarea)
 idArticle.remove()
}

function Check_Tarea(idtarea){
    const idArticle = document.getElementById(idtarea)
    idArticle.classList.toggle("tareacheck")
    //idArticle.setAttribute("id","0")
    for (let i=0;i<2;i++){
        const button  = document.getElementById("button"+idtarea)
        button.remove()
    }
}
function Limpiar(){
    list.innerHTML=""
}