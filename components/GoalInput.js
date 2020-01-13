import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      }
    return (
        <View style={styles.inputContainer}>
        <TextInput
          placeholder="Goals"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />

        <Button title="ADD" onPress={props.addGoal.bind(this, enteredGoal)} />
      </View>
    )
}


const styles = StyleSheet.create({
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
      }
})
export default GoalInput