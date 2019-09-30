var firebaseConfig = {
  apiKey: "AIzaSyD7TzcqH3cAYICbZYTVAR6-s1f8uhwrdrw",
  authDomain: "puebas-6281b.firebaseapp.com",
  databaseURL: "https://puebas-6281b.firebaseio.com",
  projectId: "puebas-6281b",
  storageBucket: "",
  messagingSenderId: "932578724010",
  appId: "1:932578724010:web:d62d8eaccd00102f0528d3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



const db = firebase.firestore();
const productList = document.querySelector('#cafe-list');


const renderProduct = (doc) => {
  let li = document.createElement('div');
  let product = document.createElement('p');
  let precio = document.createElement('p');
  // let img = document.createElement('img');
  li.setAttribute('data-id' , doc.id);
  product.textContent = doc.data().producto;
  precio.textContent = doc.data().precio;

  // img.textContent = doc.data().img;
  const imgEl = `<img src="${doc.data().img}">`

  li.appendChild(product);
  li.appendChild(precio);
  productList.appendChild(li);
  productList.innerHTML += imgEl;

};


document.getElementById('mostrar').addEventListener('click' , ()=>{
  db.collection('Desayuno').get().then((snapshot)=> {
    snapshot.docs.forEach(doc => {
     renderProduct(doc);
    })
  });

})
