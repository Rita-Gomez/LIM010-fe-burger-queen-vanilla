import {btnInformacion} from "../controlador-rutas/boton.js";
let arr = [];

export const templates = (doc) => {
  const btnPadre = document.createElement('button');
  btnPadre.className = 'btnProductos'
  btnPadre.setAttribute('data-id', doc.id);

  const temp = `
  <p>${doc.data().producto}</p>
  <p>${doc.data().precio}</p>
  <img class="fotoDesayuno" src="${doc.data().img}">
  `;
  btnPadre.innerHTML = temp;

  btnPadre.addEventListener('click', () => {
    const obj = {
      productoId : doc.id,
      nombreProducto: doc.data().producto,
      precio : doc.data().precio,
      cantidad : 1,
    }

   const metodoFind = arr.find(eleId=>eleId.productoId===obj.productoId) ;
  if(!metodoFind){
    arr.push(obj);
    btnInformacion(obj);
  } else  {
    metodoFind.cantidad++;
  
    
  }
  
  localStorage.setItem('ordenes', JSON.stringify(arr));  


});
  return btnPadre;
};

// JSON.parse(localStorage.getItem('ordenes')).forEach(ele=>{
//   btnInformacion(ele);
//   console.log(ele);
//  });

