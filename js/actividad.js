

//HOMEWORK:
//? Con la siguiente estructura, acceder a los siguientes items:
//* A) rubro del negocio
//* B) el precio del segundo articulo
//* C) el stock del ultimo articulo
//* D) el nombre del primer empleado de la primer sucursal
//* E) el rol del segundo empleado de la segunda sucursal
/*
const miNegocio = {
    articulos: [
      { nombre: "Zapatillas", precio: 12000, stock: 100 },
      { nombre: "Remeras", precio: 8000, stock: 40 },
      { nombre: "Medias", precio: 1500, stock: 300 }
    ],
    detalles_negocio: {
      nombre: "Super Deportes",
      rubro: "Ropa y calzado deportivo",
      fundacion: 1990
    },
    sucursales: [
      { ubicacion: "Springfield", empleados: [ {nombre: "Homero Simpson",rol: "Jefe"}, {nombre:"Barney Gomez", rol: "Vendedor"}] },
      { ubicacion: "Bikini Bottom", empleados: [ {nombre: "Calamardo", rol: "Gerente"}, {nombre:"Arenita", rol:"Cajera"}] }
    ]
  };

  //A
  miNegocio.detalles_negocio.rubro

  //B
  miNegocio.articulos[1].precio

  //C
  miNegocio.articulos[2].stock

  //D
  miNegocio.sucursales[0].empleados[0].nombre

  //E
  miNegocio.sucursales[1].empleados[1].rol*/
/*
  function newPers (name,years,city){
    const user = {
      nameUser: name,
      yearsUser: years,
      cityUser: city
    }
    return user
  }

  const newName = prompt ("ingresar nombre")
  const newYears = prompt("ingresar edad")
  const newCity = prompt("ingrese su ciudad de origen")
  const people = newPers(newName,newYears,newCity)
  alert(`Hello ${people.nameUser},like the city ${people.cityUser},¿you have lived there ${people.yearsUser} years?`)
*/

let stock = 2 
function productStock (prod){
if (prod === 0){ 
  return "no stock"
}else if (prod <= 10){
  return "low stock"
}else if (prod > 10) {
  return "full stock"
}else { return "invalid data"}
}
const ver = productStock (stock)
console.log(ver)