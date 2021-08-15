import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
        
        

        <TouchableOpacity
        style={{
            backgroundColor: "transparent",
            padding: 20,
            paddingHorizontal: 60,
            borderStyle: "solid",
            borderColor: "black",
            borderWidth: 1,
           
        }}
        onPress={() => navigation.navigate("Sistema")}>

            <Text style={{fontWeight: 'bold'}}>Entrar</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
