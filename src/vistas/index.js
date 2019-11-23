import Cocinero from './cocinero.js';
import Delivery from './entrega.js';
import Mesero from './mesero.js';
import Home from './home.js';
import Different from './notFound.js';

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