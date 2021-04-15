import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';
import firebase from './src/services/firebaseConnection';

import Routes from './src/routes/index';


export default function Organizesse() {

  // function pegaNome()
  // {
  //   firebase.database();
  // }

 return (
   <NavigationContainer style={{marginTop: 25}}>
     <StatusBar backgroundColor="#131313" barStyle="light-content">Ok</StatusBar>
     <Routes/>
   </NavigationContainer>
  );
} 