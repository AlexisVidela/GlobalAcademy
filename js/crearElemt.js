/*crear elemt*/
const h1=document.createElement("h1")
/*agregar contenido*/
h1.textContent="Soy un titulo"
/*agregar atributo*/
h1.setAttribute("class","titulo")
/*agregar al html */
document.body.appendChild(h1)
/*otro ejemplo*/
const game = document.getElementById("idd")
const img = document.createElement("img")
img.setAttribute("scr","https://libretilla.com/wp-content/uploads/2022/02/codigos-iso-paises-1536x1114.png")
img.setAttribute("id","coso")
setTimeout(()=>{
    game.appendChild(img)
},2000)

/*eliminar elemt DOM*/
const parf = document.querySelector("p")
setTimeout(()=>{
    parf.remove()
},2000)

/*EVENTOS*/
//seleccionar un elemt
const image = document.getElementById("coso")
//agregar el evento
image.addEventListener("click",(e)=>{
    image.style.borderRadius="50%"
    image.style.transform="rotate(360deg)"
})