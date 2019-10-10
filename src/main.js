// Este es el punto de entrada de tu aplicacion
import { changeTmp } from './controlador-rutas/router.js';

const firebaseConfig = {
    apiKey: "AIzaSyD7TzcqH3cAYICbZYTVAR6-s1f8uhwrdrw",
    authDomain: "puebas-6281b.firebaseapp.com",
    databaseURL: "https://puebas-6281b.firebaseio.com",
    projectId: "puebas-6281b",
    storageBucket: "",
    messagingSenderId: "932578724010",
    appId: "1:932578724010:web:d62d8eaccd00102f0528d3"
};

firebase.initializeApp(firebaseConfig);

const init = () => {
    changeTmp(window.location.hash)
    window.addEventListener('hashchange', () => changeTmp(window.location.hash))
    
}
window.addEventListener('load', init)