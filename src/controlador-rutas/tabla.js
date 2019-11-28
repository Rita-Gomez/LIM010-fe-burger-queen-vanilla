// import {   getPosts } from "../controlador-rutas/funciones.js";
import { guardarPedidos} from '../controlador-firebase/controlador-fb.js'
import { arrProducto} from '../controlador-rutas/funciones.js'
let sumaTotal = 0


export const templateOrders = (doc) => {
  const templateOrdersPrint = document.createElement('tr');
  templateOrdersPrint.innerHTML += `
  <td id="productos">${doc.producto}</td>
          <td id="precios">s/.${doc.precio}</td>
          <td><p class="colour">${doc.cantidad}</p></td> 
          <td><button class="btnEliminar" id="${doc.id}">X</button></td>
  `
    ;
  const containerOrders = document.querySelector('#containerTabla');
  containerOrders.appendChild(templateOrdersPrint);
  const subtotal = doc.precio * doc.cantidad;

  sumaTotal += subtotal;

  const btnEliminar = templateOrdersPrint.querySelector('.btnEliminar');
  btnEliminar.addEventListener('click', (event) => {
    const even = event.target.id;
    containerOrders.removeChild(templateOrdersPrint);
    removeLocalStorage(arrProducto('ordenes'), even);
    templateTotal(sumaTotal -= subtotal);

  });

};



export const templateTotal = () => {

  const templateTotalPrint = document.createElement('tr');
  templateTotalPrint.innerHTML = `
  <td>TOTAL:</td>
       <td>s/${sumaTotal}.00</td>
       <td></td>
       <td><button class = "btnEnviar">Enviar</button></td>
  `
     ;
  const containerTotal = document.querySelector('#total');
  containerTotal.innerHTML = '';
  containerTotal.appendChild(templateTotalPrint);

  const btnEnviar = templateTotalPrint.querySelector('.btnEnviar');
  btnEnviar.addEventListener('click',()=>{
  

     const hours = firebase.firestore.FieldValue.serverTimestamp();
    
    // const fecha = moment().format('LTS');
  //  guardarFecha(fecha);`  ${parseInt(new Date().getHours())} : ${parseInt(new Date().getMinutes())}`
  const obj= {
   fecha:  hours ,
   ordenes:arrProducto('ordenes'),
   estado: 'en preparación'
  }
    guardarPedidos(obj);
  //  console.log(guardarPedidos)
    templateTotal(sumaTotal );
  
    const containerOrders = document.querySelector('#containerTabla');
    containerOrders.innerHTML = '';
    const containerTotal = document.querySelector('#total');
    containerTotal.innerHTML = '';
  arrProducto.splice(0,arrProducto.length);
   
   localStorage.removeItem('ordenes');
  })

}



const removeLocalStorage = (arrP, index) => {

  arrP = arrProducto('ordenes');
  arrP.splice(index, 1);
  localStorage.setItem('ordenes', JSON.stringify(arrP));
}