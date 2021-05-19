import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

// Criando a Home
const AuthStack = createStackNavigator();

// Criando compontente para telas de autenticação (Login e Cadastro)
function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />

      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
            headerStyle:{
                backgroundColor: '#FFF',
                borderBottomWidth: 1,
                borderBottomColor: '#00b94a'
            },
            headerTintColor: '#131313',
            headerBackTitleVisible: false,
            headerTitle: '',
            
        }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
