import { getOrders } from "../controlador-firebase/controlador-fb.js";
// import { orders } from "../controlador-firebase/controlador-fb.js";
import { templatePedidos } from "../controlador-rutas/funciones-cocinero.js"
export default () => {
  const viewAccesories = `
  <section>
  <h2 class="text-center">Cocinero</h2>
  <input id="buttonViewOrders" type="button"></input>  
  </section>
  <section id="containerGeneral"></section>`;

  const divElement = document.createElement('section');
  divElement.innerHTML = viewAccesories;
  const btnCocinero = divElement.querySelector('#buttonViewOrders')
  btnCocinero.addEventListener('click', () => {
    const containerGeneral = divElement.querySelector('#containerGeneral');
    containerGeneral.innerHTML = '';

    getOrders("Pedidos")
      .then((querySnapshot) => {
      
        querySnapshot.forEach(doc => {
          containerGeneral.appendChild(templatePedidos(doc))
        console.log(doc)
        });

      })
      .catch((e) => console.log(e));


  })
  return divElement;
}
  // orders('Pedidos').orderBy(doc)
      // .then((querySnapshot )=> {

      //   querySnapshot.forEach(doc => {
      //   containerGeneral.appendChild(templatePedidos(doc))

      //       console.log( doc.id, doc.data());
      //   });

      // })
      //   .catch((e) => console.log(e));