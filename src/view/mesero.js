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
                            <input type="text" class="inputTexto" placeholder="Escribe tu nombre">
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

    const db = firebase.firestore();
    const desayuno = divElement.querySelector('#btnDesayuno');
    desayuno.addEventListener('click', () => {
        const box = document.getElementById('containerCentral');
        box.innerHTML = '';
        db.collection('Desayuno').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                box.innerHTML += `<button class="btnProducto" data-set="${doc.id}">
                <p>${doc.data().producto}</p>
                <p>${doc.data().precio}</p>
                <img class="fotoDesayuno" src="${doc.data().img}">
                </button>`;
            // const btnProducto = productList.querySelector('.btnProducto');
            // btnProducto.addEventListener('click', () => {
            // product.innerHTML = `<td>${doc.id}</td><td>${doc.data().precio}</td>`;
            // });
            })
        });
    })

    return divElement;
}