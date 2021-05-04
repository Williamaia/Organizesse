import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome as Icon } from "@expo/vector-icons";

import Home from "../pages/Home";
import New from "../pages/New";
import Profile from "../pages/Profile";

// Criando a stack
const AppDrawer = createDrawerNavigator();

// Criando compontente para telas
function AppRoutes() {
  return (
    <AppDrawer.Navigator
      drawerStyle={{
        backgroundColor: "#FFF",
      }}
      drawerContentOptions={{
        labelStyle: {
          fontWeight: "bold",
        },
        activeTintColor: "#131313",
        activeBackgroundColor: "#00b94a",
        inactiveBackgroundColor: "#FFF",
        inactiveTintColor: "#131313",
        itemStyle: {
          marginVertical: 5,
        },
      }}
    >
      <AppDrawer.Screen
        name="Início"
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="home" size={35} color={color} />
          ),
        }}
      />
      <AppDrawer.Screen
        name="Novo"
        component={New}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="plus-circle" size={35} color={color} />
          ),
        }}
      />
      <AppDrawer.Screen
        name="Perfil"
        component={Profile}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="user-secret" size={35} color={color} />
          ),
        }}
      />
    </AppDrawer.Navigator>
  );
}

export default AppRoutes;
