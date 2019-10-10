export  const templates = (doc)=> {
 export const btnPadre = document.createElement('button');
  btnPadre.className = 'btnProducto'
  btnPadre.setAttribute('data-id', doc.id );

  const temp =`
  <p>${doc.data().producto}</p>
  <p>${doc.data().precio}</p>
  <img class="fotoDesayuno" src="${doc.data().img}">
  `; 
 
  btnPadre.innerHTML = temp;
  return btnPadre ;


 };

 
 
 
 






