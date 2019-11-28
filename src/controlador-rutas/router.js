import { components } from '../vistas/index.js';
import { getOrders } from '../controlador-firebase/controlador-fb.js';
import { templatePedidos } from './funciones-cocinero.js';





export const changeTmp = (hash) => {
    const sectionMain = document.getElementById('container');
    sectionMain.innerHTML = '';
    switch (hash) {
        case '': 
        sectionMain.appendChild(components.home());
        break;
        case '#/mesero': 
        sectionMain.appendChild(components.mesero());
        break;
        case '#/cocinero':  {
            sectionMain.appendChild(components.cocinero());
          getOrders('Pedidos',(call)=>{
              console.log(call)
              templatePedidos(call);
          })
            break;
        }
      
        default:
        sectionMain.appendChild(components.different());
        break;
    }
};