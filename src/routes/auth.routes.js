import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';

// Criando a Home
const AuthStack = createStackNavigator();

// Criando compontente para telas
function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
                name="SignIn" 
                component={SignIn}
                options={{headerShown: false}}
                />
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;