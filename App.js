import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  //gives array of 2 elements, first is the ^^ initial default of your state, and then the second is the method you will call to change it. 
  const [myGoals, setMyGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }
  const addGoalHandler = () => {
    setMyGoals([...myGoals, enteredGoal]);
    console.log(enteredGoal)
    //setmyGoals(currentGoals => [..currentGoals, enteredGoal]); <- better because gives you guaranteed state snapshot.
  }

  return (
    <View style={styles.screen}>

      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Goals" 
          style={styles.textInput} 
          onChangeText={goalInputHandler}
          value={enteredGoal}
          />
          
        <Button title="ADD"  onPress={addGoalHandler} />
      </View>
        {myGoals.map((goal) => <View style={styles.listItem}><Text key={goal}>{goal}</Text></View>)}
      <View>

      </View> 

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'aqua',
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput: { 
    width: '80%', 
    borderColor: 'black', 
    padding: 10, 
    borderBottomWidth: 1 
  },
  listItem: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1
  }
});
