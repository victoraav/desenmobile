import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import logado from './components/logado';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="Bem-Vindo!" component={Home} />
      <Stack.Screen name="Sistema" component={logado} />
    
     </Stack.Navigator>
     
   </NavigationContainer>

  )


};
