export default () => {
    const viewHome = `
    <section id='suburbialDerecho'>
        <div id="containerDerecho">
            <div class="containerTitle1"><h2>Burger</h2></div>
            <div class="containerTitle2"><h3>Queen</h3></div>
            <p class="containerParrafo">Somos Burguer Queen, una cadena de comidas a las 24 hrs.</p>
            <div class="linkNext">
            <a href="#/mesero" class="btnMesero"><span class="spanMesero">Mesero</span></a>
            <a href="#/cocinero" class="btnCocinero"><span class="spanCocinero">Cocinero</span></a>
            </div>
        </div>
    </section>
    <section id="suburbialIzquierdo"> 
        <div id="containerIzquierdo">
            <div id="containerNothing"></div>
            <div id="containerTitle"><h1 class="title">Delicious Food</h1></div>
        </div>
        <div id="containerSocial">
            <div class="redesSociales">
            <a class="linkFacebook" href="https://es-la.facebook.com/"><img src="img/facebook.png" class="logoFacebook" alt="Facebook" /></a>
            <a class="linkTwitter" href="https://twitter.com/?lang=es"><img src="img/twitter.png" class="logoTwitter"
                    alt="Twitter" /></a>
            <a class="linkInstagram" href="https://www.instagram.com/"><img src="img/instagram.png" class="logoInstagram"
                    alt="Instagram" /></a>
            </div>
        </div>
        <div id="containerImagen">
            <img src="img/burger.png" alt="burgerQueen" class="img">
        </div>
    </section>
    `;

    const divElement = document.createElement('section');
    divElement.className = "body";
    divElement.innerHTML = viewHome;

    return divElement;
}