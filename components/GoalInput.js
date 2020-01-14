import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Modal} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
      setEnteredGoal(enteredText);
    }

    const addGoalHander = () => {
      if(goalTitle.length == 0) {
        return;
      }
      props.addGoal(enteredGoal);
      setEnteredGoal('');
    }
    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Goals"
            style={styles.textInput}
            onChangeText={goalInputHandler}
            value={enteredGoal}
          />
          <View style={styles.buttonContainer}> 
            <View style={styles.button} >
              <Button title="CANCEL" color="red" onPress={props.onCancel}/>
            </View>
            <View style={styles.button} >
              <Button title="ADD" onPress={addGoalHander} />
            </View>
          </View>
        </View>
      </Modal>
    )
}


const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    textInput: {
      width: '80%',
      borderColor: 'black',
      padding: 10,
      marginBottom: 20,
      borderBottomWidth: 1
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '60%'
    },
    button: {
      width: '45%'
    }
})

//view does not take up full width of the modal. so it only takes up the space of the children (Textinput and button)
// to make the view take up the whole space, set flex to 1, if it is the only item, it will take up the whole space. 
// you have to set flex to something. (anything if its the only child)
//to style Buttons, must wrap in a view. 
export default GoalInput