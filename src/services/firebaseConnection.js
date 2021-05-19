import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Criando as configurações do projeto
let firebaseConfig = {
  apiKey: "AIzaSyABs9IH0oZ1todKqrowIOJ5lRS8uHF0W-Q",
  authDomain: "organizesse-5daf5.firebaseapp.com",
  databaseURL: "https://organizesse-5daf5-default-rtdb.firebaseio.com",
  projectId: "organizesse-5daf5",
  storageBucket: "organizesse-5daf5.appspot.com",
  messagingSenderId: "109794335308",
  appId: "1:109794335308:web:db3a50e951ac0d556b32e9",
  measurementId: "G-GCN225QNG0"
};

  // Verificar se tem uma instância
  if(!firebase.apps.length)
  {
    //Abrindo uma conexão
    firebase.initializeApp(firebaseConfig);
  }


  export default firebase;