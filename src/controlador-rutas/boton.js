export const btnInformacion = (doc) => { 

    const btnPintar = document.createElement('tr');
  
    btnPintar.innerHTML += `
     <td id="productos">${doc.data().producto}</td>
     <td id="precios">${doc.data().precio}</td> 
     <td></td> 
     <td><button class="btnEliminar" id="${doc.id}">Eliminar</button></td>  
                  
     `;
  
    const box1 = document.getElementById('contenedor-tabla');
    box1.appendChild(btnPintar);
   
  const btnEliminar = btnPintar.querySelector('.btnEliminar');
  btnEliminar.addEventListener('click',()=>{
  console.log('funcionando')
  
  
  });
  
  };