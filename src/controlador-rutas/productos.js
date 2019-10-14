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
   localStorage.setItem('ordenes', JSON.stringify(arr));
  } else if(metodoFind) {
    obj.cantidad++;
    arr.push(obj);
    // localStorage.setItem('ordenes', JSON.stringify(arr));
  }
      
    
   
  






    // arr.push(obj);
    // const arrStorage = (localStorage.setItem('ordenes', JSON.stringify(arr)));
    // console.log(arr)
  btnInformacion(doc);


 

});
  return btnPadre;
};