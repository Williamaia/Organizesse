import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';

// Criando a stack
const HomeStack = createStackNavigator();

// Criando compontente para telas
function HomeRoutes(){
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home}></HomeStack.Screen>
        </HomeStack.Navigator>
    );
}

export default HomeRoutes;


