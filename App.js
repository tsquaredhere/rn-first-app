import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  
  //gives array of 2 elements, first is the ^^ initial default of your state, and then the second is the method you will call to change it. 
  const [myGoals, setMyGoals] = useState([]);

  
  const addGoalHandler = (goalName) => {
    setMyGoals([...myGoals, { key: Math.random().toString(), value: goalName }]);
    //setmyGoals(currentGoals => [..currentGoals, enteredGoal]); <- better because gives you guaranteed state snapshot.
    //FlatList wants objects with a key
  }

  return (
    <View style={styles.screen}>

      <GoalInput addGoal={addGoalHandler} />

      <FlatList 
        data={myGoals} 
        renderItem={itemData => <GoalItem title={itemData.item.value} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'aqua',
    padding: 50
  }
});
