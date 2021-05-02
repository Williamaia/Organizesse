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
        let id = value.user.id;
        await firebase
          .database()
          .ref('users')
          .child(id)
          .set({
            saldo: 0,
            nome: nome,
          })
          .then(() => {
            let data = {
              id: id,
              nome: nome,
              email: value.user.email,
            };
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
