export const verDataFb = (string) => {
   return firebase.firestore().collection(string).get();
};
 export const guardarPedidos = (arrObj) => {
   return firebase.firestore().collection('Pedidos').add(arrObj);
}
