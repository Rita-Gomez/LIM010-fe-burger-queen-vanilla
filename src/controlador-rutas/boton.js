
export const btnInformacion = (doc) => { 
console.log(doc)
  const btnPintar = document.createElement('tr');

  btnPintar.innerHTML += `

   <td id="productos">${doc.nombreProducto}</td>
   <td id="precios">${doc.precio}</td> 
    <td><p>${doc.cantidad}</p></td> 
   <td><button class="btnEliminar" id="${doc.id}">Eliminar</button></td>  
                
   `;

  const box1 = document.getElementById('contenedor-tabla');

  box1.appendChild(btnPintar);
 
const btnEliminar = btnPintar.querySelector('.btnEliminar');
btnEliminar.addEventListener('click',()=>{
  console.log('YE ')
// METODO ELIMINAR AQUI ! FALTA INDICE
const metodoSplice = x.splice (indice, 1)


});

};
