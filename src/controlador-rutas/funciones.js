import {btnDatos, btnTotal} from "../controlador-rutas/tabla.js";
let arr = [];
export const templates = (doc) => {
    const btnBoton = document.createElement('button');
    btnBoton.className = 'btnProducto';
    btnBoton.setAttribute('data-id', doc.id);

    const temp = `<img class="fotoDesayuno" src="${doc.data().img}">
    <p>${doc.data().producto}</p>
    <p> S./ ${doc.data().precio}</p>`;
    btnBoton.innerHTML = temp;


    const btnAdi = document.createElement('div');
    btnAdi.className = 'btnProducto';

 const adicionales = `<p>Tipos :</p>
      <th><button>${doc.data().sabores[0]}</button></th>
      <th><button>${doc.data().sabores[1]}</button></th>
      <th><button>${doc.data().sabores[2]}</button></th>
      <p>Adicionales (S./1)</p>
      <th><button>${doc.data().adicional[0]}</button></th>
      <th><button>${doc.data().adicional[1]}</button></th>
      <button>Agregar</button>
 `;
   btnAdi.innerHTML = adicionales;


    


    btnBoton.addEventListener('click', () => {

        console.log(doc.data().sabores)

        

        
        const obj = {
            id: doc.id,
            producto: doc.data().producto,
            precio: doc.data().precio,
            cantidad: 1,
        }
        const metodoFind = arr.find(eleId => eleId.id === obj.id);
      

           if (!metodoFind) {
               arr.push(obj);
               btnDatos(obj)
               btnTotal(obj);
               console.log(btnAdi);
           } else {
               metodoFind.cantidad++;
               btnDatos(metodoFind)
               btnTotal(metodoFind)
           }
           localStorage.setItem('ordenes', JSON.stringify(arr));
    });


    return btnBoton;
};
export const arrProducto = JSON.parse(localStorage.getItem('ordenes', JSON.stringify(arr)));


