import {templateTotal, templateOrders} from '../controlador-rutas/tabla.js'
 import {arr} from '../controlador-rutas/funciones.js'


 export let obj = {
  sabor: null,
  adicional: []
};
export const adicionales = (doc)=> {

  const containerAdi = document.createElement('div');
  containerAdi.className = 'btnAdicionales';
  // acumulador(sabores)
  let acum = '';
 doc.data().sabores.forEach(element => {
   acum += `<th><button class="sabor"data-sabor="${element.valor}">${element.valor}</button></th>`
   
 });
 // acumulador (adicionales)
let acum2 = '';
 doc.data().adicional.forEach(element => {
     acum2 += `<th><button class="adicional" data-adicional="${element.adicional}">${element.adicional}</button></th>`
 })
 
 containerAdi.innerHTML += `<p>Tipos :</p>
       ${acum}
      <p>Adicionales(S./1)</p>
      ${acum2}
      <br>
      <button class = "agregar">Agregar</button>
 `;
  
 const containerBurger = document.querySelector(`.btnProducto[data-id=${doc.id}]`); //papa
 const lastChild = containerBurger.lastElementChild; // el ultimo hijo de box 
if (lastChild.classList.contains('btnAdicionales')){ //si el ultimo hijo tiene esa clase remuevelo
    const removeLastChild = containerBurger.removeChild(lastChild);     
}else {   
 //NADA .
}
containerBurger.appendChild(containerAdi);



 const btnSabores = containerBurger.querySelectorAll('.sabor');

btnSabores.forEach(elemen =>{
    elemen.addEventListener('click', (e) =>{ 
    //    console.log( obj.sabor = e.target.dataset.sabor);
     obj.sabor= e.target.dataset.sabor;
     
      });

})
const btnAdicional = containerBurger.querySelectorAll('.adicional');
    btnAdicional.forEach(elemen =>{   
       elemen.addEventListener('click', (e) => {

            obj.adicional.push(e.target.dataset.adicional) ;

         });
    })

    const btnAgregar = containerBurger.querySelector('.agregar');

 btnAgregar.addEventListener('click', () =>{   
    const nuevoObj =  {
        id: doc.id,
        producto: doc.data().producto,
        precio:parseInt(doc.data().precio),
        cantidad: 1,
        sabor : obj.sabor,
        adicional: obj.adicional,
       
    }
  
    nuevoObj.precio = parseInt(doc.data().precio) + nuevoObj.adicional.length ;
    console.log(nuevoObj, 'pedido')
    arr.push(nuevoObj);
    templateOrders(nuevoObj);
    templateTotal(nuevoObj);
    obj.adicional=[]
    // console.log(obj.adicional)
    

 })

}
