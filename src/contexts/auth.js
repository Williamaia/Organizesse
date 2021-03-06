import React, { useState, createContext } from "react";
import firebase from "../services/firebaseConnection";
import AsyncStorage from "@react-native-community/async-storage";
import { useEffect } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem("Auth_user");

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }

      setLoading(false);
    }

    loadStorage();
  }, []);

  //logando usuario
  async function signIn(email, senha) {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(async (value) => {
        let uid = value.user.uid;
        await firebase
          .database()
          .ref("users")
          .child(uid)
          .once("value")
          .then((snapshot) => {
            let data = {
              uid: uid,
              nome: snapshot.val().nome,
              email: value.user.email,
            };
            setUser(data);
            storageUser(data);
          });
      })
      .catch((err) => {
        alert(err.code);
      });
  }

  //cadastrando usuario
  async function signUp(email, senha, nome) {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha) // criando usuario com email e senha
      .then(async (value) => {
        let uid = value.user.uid;
        await firebase
          .database()
          .ref("users")
          .child(uid)
          .set({
            saldo: 0,
            nome: nome,
          })
          .then(() => {
            let data = {
              uid: uid,
              nome: nome,
              email: value.user.email,
            };
            console.log(data);
            setUser(data); //
            storageUser(data);
          })
          .catch((err) => {
            alert(err.code);
          });
      });
  }

  // Gravar usuario logado no asyncStorage
  async function storageUser(data) {
    await AsyncStorage.setItem("Auth_user", JSON.stringify(data));
  }

  // Sair
  async function signOut() {
    await firebase.auth().signOut();
    await AsyncStorage.clear()
      .then(() => {
        setUser(null);
      })
      .catch((err) => {
        alert(err.code);
      });
  }

  return (
    //signed: !!user converter objeto para boolean
    <AuthContext.Provider
      value={{ signed: !!user, user, loading,  signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
