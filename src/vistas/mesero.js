import { verDataFb } from "../controlador-firebase/controlador-fb.js";

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
                            <input type="text" class="inputTexto" placeholder="Nombre cliente">
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
                    <h2 id="cliente">Cliente :</h2>
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
                                <td id="producto"></td>
                                <td id="precio"></td>
                                <td id="cantidad"></td>
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
        box.innerHTML = '';

        verDataFb('Desayuno')
            .then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    box.innerHTML += `<button class="btnProducto" data-set="${doc.id}">
                    <p>${doc.data().producto}</p>
                    <p>${doc.data().precio}</p>
                    <img class="fotoDesayuno" src="${doc.data().img}">
                    </button>`;
                });
                
            })
            .catch(()=> console.log('error'));
    
        })
        const almuerzo = divElement.querySelector('#btnAlmuerzo');
        almuerzo.addEventListener('click', () => {
            const box = document.getElementById('containerCentral');
            box.innerHTML = '';
        verDataFb('Menú')
        .then((snapshot) => {
            snapshot.docs.forEach(doc => {
                box.innerHTML += `<button class="btnProducto" data-set="${doc.id}">
                <p>${doc.data().producto}</p>
                <p>${doc.data().precio}</p>
                <img class="fotoDesayuno" src="${doc.data().img}">
                </button>`;
            });
            
        })
        .catch(()=> console.log('error'));
    })
    return divElement;
};
