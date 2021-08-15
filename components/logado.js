import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function logado() {
  return (
    <View style={styles.container}>
        <Image style={{
            width:150,
            height:150,

        }}source={require('./selfie.png')} />

    <Text style={{fontWeight: 'bold', alignContent: 'center'}}> Victor Vianna {'\n'}  5º periodo {'\n'} {'\n'} UnilasalleRJ</Text>
    
        
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
