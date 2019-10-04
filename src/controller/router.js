import { components } from '../view/index.js';


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
        case '#/cocinero': 
        sectionMain.appendChild(components.cocinero());
        break;
        default:
        sectionMain.appendChild(components.different());
        break;
    }
};