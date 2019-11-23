import Cocinero from '../vistas/cocinero.js';
import Delivery from '../vistas/entrega.js';
import Mesero from '../vistas/mesero.js';
import Home from '../vistas/home.js';
import Different from '../vistas/notFound.js';

const components = {
    cocinero: Cocinero,
    delivery: Delivery,
    mesero: Mesero,
    home: Home,
    different: Different
}

export {
    components
}