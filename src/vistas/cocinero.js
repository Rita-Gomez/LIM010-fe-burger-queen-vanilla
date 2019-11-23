export default () => {
  const viewAccesories = `
  <section id="pantallaCocinero">
        <div id="imagenHamburguesa"><img src="./img/hamburguesa2.png"/></div>
        <div class="nextGroup">
                <a href="" class="newlogoPrincipal"></a>
                <a href="#/delivery" class="vermeseroEntrega"></a>
        </div>
        <div class="newGroup">
          <div id="containerprepareProducto">
            <div class="cocinero"></div>
          </div>
        </div>
    </section>`;

  const divElement = document.createElement('section');
  divElement.innerHTML = viewAccesories;

  return divElement;
}