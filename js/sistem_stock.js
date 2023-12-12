const ProductStock = []

function llenarLista(){

for (let i=0;i<10;i++){
    ProductObject("Producto"+ProductStock.length,200,10)
}
viewlist()

}

function AgregarProducto(){
    const nameProduct = document.getElementById('nameProduct')
    const priceProduct = Number(document.getElementById('priceProduct').value)
    const cantProduct = Number(document.getElementById('cantProduct').value)
    if (DepurarArray(nameProduct.value,ProductStock)===-1)
    {
        ProductObject(nameProduct.value,priceProduct,cantProduct) /*pasa el producto a objeto*/
    }else {
        ActualizarProduct(cantProduct, priceProduct,DepurarArray(nameProduct.value,ProductStock)) /*actualiza producto*/
    }
    viewlist()
    document.getElementById('nameProduct').value=""
    document.getElementById('priceProduct').value=""
    document.getElementById('cantProduct').value=""
}




function ProductObject(string,num1,num2){
let Product = {
    namep : "" ,
    pricep : 0,
    cantp : 0
}
Product.namep = string
Product.pricep = num1
Product.cantp = num2

ProductStock.push(Product)

}

function DepurarArray( string,  arrays){
    for (let i=0; i<arrays.length; i++) {
     if (compare(string,arrays[i].namep)===0)
         {
          return i
         }
    }
    return -1
}


function ActualizarProduct (num1 , num2 , id){
    ProductStock[id].cantp +=num1
    ProductStock[id].pricep = num2
}
function RestarProducto(){
    const nameProductExit = document.getElementById('nameProduct')
    const cantProductExit = Number(document.getElementById('cantProduct').value)
    let idExit = DepurarArray(nameProductExit.value,ProductStock)
    if (idExit!==-1)
    {
        ProductStock[idExit].cantp -= cantProductExit
    }
    viewlist()
}

function EliminarProducto(){
const string1 = document.getElementById('namedelete')
let idDelet = DepurarArray(string1.value,ProductStock)
if (idDelet!==-1)
    {
        console.log("producto eliminado")
        ProductStock.splice(idDelet,1)/*id a eliminar , cunatos elementos*/
    }
    document.getElementById('namedelete').value=""
    viewlist()
}

function compare(string1, string2) {
    if (string1 < string2) {
      return -1;
    } else if (string1 > string2) {
      return 1;
    } else {
      return 0;
    }
}

function viewlist(){
    const list = document.getElementById('list')
    list.innerHTML= null
            for (let i =0;i<ProductStock.length;i++){
                list.innerHTML += ProductStock[i].namep+" $"+ProductStock[i].pricep+" [ "+ProductStock[i].cantp+" ]\n"
            }
}
