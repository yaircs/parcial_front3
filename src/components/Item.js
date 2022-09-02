import React, {useState} from "react";



// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

function Item({ id, producto,stock, aumenta}) {

  const [stockItem, setstockItem] = useState(stock)
  const { nombre, descripcion } = producto
  
  const decrementarStock = () => {
    if(stockItem > 0){
      aumenta();
    setstockItem(stockItem -1)
    }
    
  }

  return (
    <div className='producto'>
      <h3>{nombre}</h3>
      <h5> {descripcion}  En stock:
        
        <span>{stockItem || "Agotado"}</span></h5>
      
      <button onClick={decrementarStock} disabled={!stockItem} >{stockItem ? "Comprar" : "Sin Stock"}</button>
     
    </div>
  )
}

export default Item;
