import {
    btnDatos,
    btnTotal
} from "../controlador-rutas/tabla.js";
let arr = [];

export const templates = (doc) => {
    const btnBoton = document.createElement('button');
    btnBoton.className = 'btnProducto';
    btnBoton.setAttribute('data-id', doc.id);

    const temp = `<img class="fotoDesayuno" src="${doc.data().img}">
    <p>${doc.data().producto}</p>
    <p>S/. ${doc.data().precio}</p>
   
    
    `;
    btnBoton.innerHTML = temp;
    // ----------------------------
    const sabores = (doc)=> {
      const btnAdi = document.createElement('div');
      btnAdi.className = 'btnAdicionales';
      //mi primer acumulador de templates (sabores)
      let acum = '';
     doc.data().sabores.forEach(element => {
       acum += `<th><button class="x">${element.valor}</button></th>`
       
     });
     //creando mi segundo acumulador (adicionales)
    let acum2 = '';
     doc.data().adicional.forEach(element => {
         acum2 += `<th><button class="x">${element.adicional}</button></th>`
     })
     
     btnAdi.innerHTML += `<p>Tipos :</p>
           ${acum}
          <p>Adicionales(S./1)</p>
          ${acum2}
          <br>
          <button class = "agregar">Agregar</button>
     `;
      
     const box = document.querySelector(`.btnProducto[data-id=${doc.id}]`); //papa
     const lastChild = box.lastElementChild; // el ultimo hijo de box 
    if (lastChild.classList.contains('btnAdicionales')){ //si el ultimo hijo tiene esa clase remuevelo
        const removeLastChild = box.removeChild(lastChild);     
    }else {    
    }
     box.appendChild(btnAdi);
     const btnSabores = box.querySelector('.agregar');
     btnSabores.addEventListener('click', (e) =>{
      const target =  e.target;
     console.log(target)
   
     })
    }
    // const btnsAdi = (e)=>{
    //     const x = document.querySelector('.x');
    //     return console.log(x)

    //   }
     
    //-------------------
    const obj = {
        id: doc.id,
        producto: doc.data().producto,
        precio: doc.data().precio,
        cantidad: 1,
    }
 //------------------------
    btnBoton.addEventListener('click', (e) => {
        const metodoFind = arr.find(eleId => eleId.id === obj.id);

        if (doc.data().sabores) {
       sabores(doc, e.target);
    
        } else if (!metodoFind) {
            arr.push(obj);
            btnDatos(obj)
            btnTotal(obj);
        } else {
            metodoFind.cantidad++;
            btnDatos(metodoFind)
            btnTotal(metodoFind);
        }
            localStorage.setItem('ordenes', JSON.stringify(arr));
    });
    return btnBoton;
};

// export const local = string => (JSON.parse(localStorage.getItem(string)));

export const arrProducto = JSON.parse(localStorage.getItem('ordenes', JSON.stringify(arr)));