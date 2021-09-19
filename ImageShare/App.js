import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/logo.png';
import * as ImagePicker from 'expo-image-picker'
import * as Sharing from 'expo-sharing'

export default function App() {

  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {

      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if(permissionResult.granted == false){
        alert("É necessário permissão para acessar as mídias!")
        return;
      }
      
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      
      if(pickerResult.cancelled == true){
        return;
      }

      setSelectedImage({ localUri: pickerResult.uri});
  };

  let openShareDialogAsync = async() => {
    if(!(await Sharing.isAvailableAsync())) {
      alert("Compartilhar não está disponivel na sua plataforma");
      return;
    }
    await Sharing.shareAsync(selectedImage.localUri);
  };

  if(selectedImage !== null){
    return(
      <View Style = {styles.container}>
        <Image source = {{uri: selectedImage.localUri}}
        style={styles.thumbnail} />
        <TouchableOpacity onPress = {openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Compartilhe essa foto</Text>
        </TouchableOpacity>
      </View>
    );
  }


  
    

  return (
    <View style={styles.container}>
      <Image source={logo} 
             style={styles.logo} />

      <Text style={styles.instructions}>Qual imagem você quer compartilhar?</Text>
      <StatusBar style="auto" />

      <TouchableOpacity
      onPress={openImagePickerAsync}
      style={styles.button}>
      <Text style={styles.buttonText}>Escolher imagem</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width:305,
    height:179,
    marginBottom:30,
    
  },
  instructions:{
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 20,
  },
  button:{
    backgroundColor: 'gray',
    padding: 20,
    borderRadius:10,
  },
  buttonText:{
    fontSize:20,
    color:'white',
  },
  thumbnail:{
    width: 300,
    height: 300,
    resizeMode: "contain",
    justifyContent: 'center',
    
  },
});
