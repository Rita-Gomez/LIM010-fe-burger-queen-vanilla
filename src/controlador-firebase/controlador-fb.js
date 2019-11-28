export const verDataFb = (string) => {
   return firebase.firestore().collection(string).get();
};
 export const guardarPedidos = (arrObj) => {
   return firebase.firestore().collection('Pedidos').add(arrObj);
}
export const  getOrders = (arrayObj,callback) => {
   return firebase.firestore().collection(arrayObj).orderBy('fecha').onSnapshot(callback);
};
export const guardarFecha = (string, collection) => {
   return firebase.firestore().collection(collection).orderBy(string).get();
}

// export const orders = (string) => {
// return firebase.firestore().collection(string).orderBy('arrOrder');
// }
