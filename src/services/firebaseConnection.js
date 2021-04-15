import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Criando as configurações do projeto
let firebaseConfig = {
    apiKey: "AIzaSyA-qAFAEZtK-jqxenMsaY9j3ZG94WD3t7I",
    authDomain: "organizessefb.firebaseapp.com",
    projectId: "organizessefb",
    storageBucket: "organizessefb.appspot.com",
    messagingSenderId: "475513780742",
    appId: "1:475513780742:web:e8d993222f8922274e2187",
    measurementId: "G-HZFBL0387K"
  };

  // Se (firebase == 0) não tem firebase criado, abre a conexão
  // Se (firebase > 0) pula o if para não abrir duas conexões
  if(!firebase.apps.length)
  {
    //Abrindo uma conexão
    firebase.initializeApp(firebaseConfig);
  }


  export default firebase;