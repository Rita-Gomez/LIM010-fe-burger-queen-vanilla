export const verDataFb = (string) => {
   return firebase.firestore().collection(string).get();
};