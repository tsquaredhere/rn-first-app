import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!')
  //gives array of 2 elements, first is the ^^ initial default of your state, and then the second is the method you will call to change it. 


  return (
    <View style={{padding: 70}}>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
        <TextInput placeholder="Goals" 
        style={{ width: '80%', borderColor: 'black', padding: 10, borderBottomWidth: 1}}
        />
        <Button title="ADD" />
      </View>

      <View>

      </View>

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
});
