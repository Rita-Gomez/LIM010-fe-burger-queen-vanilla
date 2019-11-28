// import { orders } from "../controlador-firebase/controlador-fb.js";
const printProducts = (arr, id) => {
        let lista = '';
        for (let i = 0; i < arr.length; i++) {
                texto += arr[i].adicional ? `<p>${arr[i].cantidad + ' ' + arr[i].producto + ' ' + arr[i].sabores + ' con ' + arr[i].adicional}</p><br>` :
                        arr[i].sabores ? `<p>${arr[i].cantidad + ' ' + arr[i].producto + ' ' + arr[i].sabores}</p><br>` : `<p>${arr[i].cantidad + ' ' + arr[i].producto}</p><br>`;
        }
        document.getElementById(id).innerHTML = lista;
}



export const templatePedidos = (doc) => {
        const containerGeneral = document.querySelector('#containerGeneral');
        if (containerGeneral) {
         containerGeneral.innerHTML = '';
         doc.forEach((doc) => {
          containerGeneral.innerHTML +=
         `<table class='table tableWidth'>
           <thead class="thead-light">
            <tr>
             <th scope="col">Productos</th>
             <th scope="col">Estado</th>
             <th scope="col">Tiempo</th>
            </tr>
           </thead>
           <tbody>
            <th id="order-${doc.id}"></th>
           <td>
        <select class="state-select selctState">
        <option>Pediente</option>
        <option>Preparando</option>
        <option>Entegado</option>
        </select>
        </td>
        <td>  
        ${doc.data().fecha.toDate().getHours()}:${doc.data().fecha.toDate().getMinutes()}:${doc.data().fecha.toDate().getSeconds()}
        </td>`
        console.log(doc.data().ordenes)
 printProducts(doc.data().ordenes, `order-${doc.id}`)

                })
        }


        const divProductss = document.createElement('div');
        divProductss.className = 'divPedidos';
        divProductss.setAttribute('data-id', doc.id);


        return divProductss;
}