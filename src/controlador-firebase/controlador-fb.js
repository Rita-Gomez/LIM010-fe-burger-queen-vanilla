export const verDataFb = (string) => {
   return firebase.firestore().collection(string).get();
};
 export const guardarPedidos = (arrObj) => {
   return firebase.firestore().collection('Pedidos').add(arrObj);
}
export const  getOrders = (arrayObj ) => {
   return firebase.firestore().collection(arrayObj).orderBy('fecha').get();
};
export const guardarFecha = (string, collection) => {
   return firebase.firestore().collection(collection).orderBy(string).get();
}

// export const orders = (string) => {
// return firebase.firestore().collection(string).orderBy('arrOrder');
// }
