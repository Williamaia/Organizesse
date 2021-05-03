import React, { useState, createContext } from "react";
import firebase from "../services/firebaseConnection";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  //cadastrando usuario, then: função anonima
  async function signUp(email, senha, nome) {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(async (value) => {
        let uid = value.user.uid;
        await firebase
          .database()
          .ref('users')
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
            setUser(data);
          });
      });
  }

  return (
    //signed: !!user converter objeto para boolean
    <AuthContext.Provider value={{ signed: !!user, user, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
