import React, { useContext } from "react";
import { AuthContext } from "../contexts/auth";

import AuthRouts from "./auth.routes";
import AppRouts from "./app.routes";
import { ActivityIndicator, View } from "react-native";

// Juntando as rotas Auth e App
function Routes() {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator  size = "large" color = "#131313"/>
      </View>
    );
  }

  //Verifica se o usuário está logado
  return signed ? <AppRouts /> : <AuthRouts />;
}

export default Routes;
