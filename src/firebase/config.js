import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDcMtt4ZAp-lLRSOdeT2Jj7trv3hGSF4_U",
  authDomain: "kaustubhai-photowall.firebaseapp.com",
  databaseURL: "https://kaustubhai-photowall.firebaseio.com",
  projectId: "kaustubhai-photowall",
  storageBucket: "kaustubhai-photowall.appspot.com",
  messagingSenderId: "918875514077",
  appId: "1:918875514077:web:b5ce4b3b3ed5576551e734",
  measurementId: "G-KP3MGJKRQY"
})

const db = firebaseApp.firestore();

export default db;