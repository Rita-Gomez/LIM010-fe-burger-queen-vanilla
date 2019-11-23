export default () => {
  const viewDelivery = `
  <section id="pantallaEntrega">
        <div id="imagenDelivery"><img class="entregaProducto" src="./img/entregaProducto.png"/></div>
        <div class="newviewDely">
            <div class="nextviewDely">
                <a href="" class="newiconoPrincipal"></a>
            </div>
            <div id="containerProductos">
                <div class="delivery"></div>
            </div>
        </div>
    </section>`;

  const divElement = document.createElement('section');
  divElement.innerHTML = viewDelivery;

  return divElement;
}