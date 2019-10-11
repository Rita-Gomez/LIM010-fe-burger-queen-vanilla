export const btnEliminar = (doc) => {
  const btnPadre = document.createElement('button'); `
    <tr>
     <td id="productos">${doc.data().producto}</td>
     <td id="precios">${doc.data().precio}</td> 
     <td><button id="btn-eliminar">Eliminar</button></td>               
    </tr>
          `