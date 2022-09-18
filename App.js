import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';



export default function App() {
  const [text,setText] = useState('');
  function clickMe(){
    console.log(text);
    
  }
  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style = {styles.top}>
        <Text> Hello </Text>
        <TextInput 
          placeholder= "typing some texts here" 
          style= {styles.textInput}
         ></TextInput>
        <Button title='click me!' onPress={clickMe()} ></Button>
      </View>
      <View style = {styles.bottom}>
        <Text>I am bottom</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  top: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  bottom:{
    flex: 1,
    backgroundColor: 'bluesky',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput:{
    backgroundColor: 'white',
    borderWidth:1,
    width: '90%',
    height: 48
  }
});
