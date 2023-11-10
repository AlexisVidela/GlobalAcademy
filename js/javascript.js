
const listShop = []
const listNouShop = []
let darkWeb=0
const body= document.querySelector('body')
const txtheader = document.querySelector('header')
const button = document.getElementById('buttonID')


//cambia el aspecto de la web
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


//funcion para comparar 2 cadenas
function compare(string1, string2) {
    if (string1 < string2) {
      return -1;
    } else if (string1 > string2) {
      return 1;
    } else {
      return 0;
    }
}

function add_product(){
    //variables
    const nameProduct = document.getElementById('nameID');
    const priceProduct = document.getElementById('priceID')
    const list = document.getElementById('listID')
    const product = {
        namep : "",
        pricep : ""
    }
    //guarda la informacion recibida en un objeto
    product.namep = nameProduct.value
    product.pricep= priceProduct.value
    //agrega un producto
    listShop.push(product)
    
    //actualiza la lista de compras
    list.innerHTML= null
    for (let ii =0;ii<listShop.length;ii++){
        list.innerHTML += listShop[ii].namep+" $"+listShop[ii].pricep+"\n"
    }

    //limpia los campos de 'agregar un producto'
    document.getElementById('nameID').value=""
    document.getElementById('priceID').value=""
    sumar_total()

}


function delete_product(){
    ///variables
    const nameProductDelete =  document.getElementById('namedeleteID');
    const listDelete = document.getElementById('listDeleteID')
    const list = document.getElementById('listID')
    const productDelete = {
        nameDeletep : "",
        priceDeletep : ""
    }

    for (let ii =0;ii<listShop.length;ii++){//recorre el arreglo de lista de compras
        
        //comprara las cadenas para identificar cual quiere borrar
        if (compare(nameProductDelete.value,listShop[ii].namep)===0) {
            
            //guarda el producto eliminado en un objeto
            productDelete.nameDeletep = listShop[ii].namep
            productDelete.priceDeletep= listShop[ii].pricep    
            //elimina el producto de la listad de compra
            listShop.splice(ii,1)
            //actualiza lista compra        
            list.innerHTML= null
            for (let jj =0;jj<listShop.length;jj++){
                list.innerHTML += listShop[jj].namep+" $"+listShop[jj].pricep+"\n"
            }
            //agrega el elemento borrado a la lista de eliminados
            listNouShop.push(productDelete)
            //actualiza la lista de eliminados
            listDelete.innerHTML= null
            for (let ii =0;ii<listNouShop.length;ii++){
                listDelete.innerHTML += listNouShop[ii].nameDeletep+" $"+listNouShop[ii].priceDeletep+"\n"
            }
            break;
        }
    }

    //limpia el campo de 'borrar un producto'
    document.getElementById('namedeleteID').value=""
    sumar_total()
}

//limpia las listas y los textarea
function new_list(){

    const listDelete = document.getElementById('listDeleteID')
    const list = document.getElementById('listID')

    list.innerHTML= null
    listDelete.innerHTML= null
    //limpia el arreglo de compras
    while(listShop.length!=0){
    listShop.pop()
    }
    //limpia el arreglo de productos eliminados
    while(listNouShop.length!=0){
        listNouShop.pop()
    }
    sumar_total()
}

//suma el total de los precios de los productos
function sumar_total(){
    let total=0
    for (let jj =0;jj<listShop.length;jj++){
        total += Number(listShop[jj].pricep)
    }
    document.getElementById('totaleID').value=" $"+total
}