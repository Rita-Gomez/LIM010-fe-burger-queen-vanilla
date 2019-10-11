
let arr = [];
export const templates = (doc) => {
  const btnPadre = document.createElement('button');
  btnPadre.className = 'btnProductos'
  btnPadre.setAttribute('data-id', doc.id);

  const temp = `
  <p>${doc.data().producto}</p>
  <p>${doc.data().precio}</p>
  <img class="fotoDesayuno" src="${doc.data().img}">
  `;
  btnPadre.innerHTML = temp;

  btnPadre.addEventListener('click', () => {
    const template2 = `
    <tr>
     <td id="productos">${doc.data().producto}</td>
     <td id="precios">${doc.data().precio}</td> 
     <td><button id="btn-eliminar">Eliminar</button></td>               
    </tr>
          `;
 const box1 = document.getElementById('contenedor-tabla');
 box1.innerHTML += template2;
 
 const obj ={
  producto : doc.data().producto,
  precio : doc.data().precio,
}
arr.push(obj);
const arrStorage = (localStorage.setItem('ordenes', JSON.stringify(arr)));
console.log(arr)
});
  return btnPadre;
};