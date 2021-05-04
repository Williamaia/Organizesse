import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';

// Criando a stack
const AppDrawer = createDrawerNavigator();

// Criando compontente para telas
function AppRoutes(){
    return(
        <AppDrawer.Navigator drawerStyle={{
            backgroundColor: '#FFF'
        }}
        drawerContentOptions={{
            labelStyle:{
                fontWeight: 'bold'
            }, 
            activeTintColor: '#131313',
            activeBackgroundColor: '#00b94a',
            inactiveBackgroundColor: '#FFF',
            inactiveTintColor: '#131313',
            itemStyle: {
                marginVertical: 5,
            }
        }}
        >
            <AppDrawer.Screen name="Home" component={Home}/>
            <AppDrawer.Screen name="Novo" component={New}/>
            <AppDrawer.Screen name="Perfil" component={Profile}/>
        </AppDrawer.Navigator>
    );
}

export default AppRoutes;


