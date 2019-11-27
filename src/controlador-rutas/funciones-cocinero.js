// import { orders } from "../controlador-firebase/controlador-fb.js";
export const templatePedidos = (doc) => {


  // btnProductss.setAttribute('data-id', doc.id);
  const divProductss = document.createElement('div');
  divProductss.className = 'divPedidos';
  divProductss.setAttribute('data-id', doc.id);
  let acum = '';
  const data = doc.data()
  
  if (data.ordenes) {
          data.ordenes.forEach(element => {
                  acum += `
                  <p>${element.producto}</p>
                  <p>S/. ${element.precio}</p>
                
                 
          `;

          });
  }
  const date = data.fecha;
  const date2 = date.toDate();

  divProductss.innerHTML += `
   <p>${date2.getHours()}:${date2.getMinutes()}:${date2.getSeconds()}</p>
  ${acum}
  <select>
  <option>Pediente</option>
  <option>Preparando</option>
  <option>Entegado</option>
  </select>`

  return divProductss;
}