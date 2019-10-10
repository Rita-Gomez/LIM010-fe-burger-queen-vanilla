import { verDataFb } from "../controlador-firebase/controlador-fb.js";
import { templates } from "../vistas/productos.js";
import { btnPadre } from "../vistas/productos.js";
export default () => {
    const viewCatalogue = `
  <section id="perifericoDerecho">
        <div class="nuevoGrupo">
            <div class="childGrupo">
                <a href="" class="logoPrincipal"></a>
                <div id="containerExtremoDerecho">
                    <div id="imagenMenu"><img src="./img/menu.png"/></div>
                    <div class="linkFoods">
                        <div class="botonName">
                            <input type="text" id="nombre-cliente"class="inputTexto" placeholder="Nombre cliente">
                            <button id="btnOk">→</button>
                        </div>
                        <button id="btnDesayuno" class="breakfast">Desayuno</button>
                        <button id="btnAlmuerzo" class="lunch">Almuerzo y Cena</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="perifericoCentral">
        <div id="containerCentral"></div>
    </section>
    <section id="perifericoIzquierdo">
        <div class="nuevoFlex">
            <div class="childFlex">
                <a href="#" class="verListado">Ver Pedidos</a>
                <div id="containerExtremoIzquierdo">
                    <h2 id="cliente">Cliente :<p id="push-nombre"></p></h2>
                    <table id="tblDatos">
                        <thead>
                            <tr>
                                <th id="producto">Producto</th>
                                <th id="precio">Precio</th>
                                <th id="cantidad">Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td id="productos"></td>
                                <td id="precios"></td>
                                <td id="cantidades"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>`;

    const divElement = document.createElement('section');
    divElement.className = "body";
    divElement.innerHTML = viewCatalogue;

    const desayuno = divElement.querySelector('#btnDesayuno');
    desayuno.addEventListener('click', () => {
        const box = document.getElementById('containerCentral');
        box.innerHTML= '';
        verDataFb('Desayuno')
            .then((snapshot) => {
                snapshot.docs.forEach(doc => {
                      box.appendChild(templates(doc)) ;
                });
                
            })
            .catch(()=> console.log('error'));
    
        })
     
        btnPadre.addEventListener('click', (event)=>{
         const y = event.target.id;
         console.log(y) 
        })

        const almuerzo = divElement.querySelector('#btnAlmuerzo');
        almuerzo.addEventListener('click', () => {
            const box = document.getElementById('containerCentral');
        verDataFb('Menú')
        .then((snapshot) => {
            snapshot.docs.forEach(doc => {
              box.appendChild(templates(doc));    
                }
            ); 
        })
        .catch(()=> console.log('error'));
    })
   

    return divElement;
};
