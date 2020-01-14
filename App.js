import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  
  //gives array of 2 elements, first is the ^^ initial default of your state, and then the second is the method you will call to change it. 
  const [myGoals, setMyGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  
  const addGoalHandler = (goalName) => {
    setMyGoals([...myGoals, { key: Math.random().toString(), value: goalName }]);
    //setmyGoals(myGoals => [..myGoals, { key: Math.random().toString(), value: goalName }); <- better because gives you guaranteed state snapshot.
    //FlatList wants objects with a key
    setIsAddMode(false);
  }

  const cancelGoalAddHandler = () => {
    setIsAddMode(false);
  }

  const deleteGoalHandler = goalId => {
    setMyGoals(myGoals => {
      return myGoals.filter((goal)=>goal.key !== goalId ); 
    });
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} /> 

      <GoalInput addGoal={addGoalHandler} onCancel={cancelGoalAddHandler} visible={isAddMode}/>

      <FlatList 
        data={myGoals} 
        renderItem={itemData => <GoalItem id={itemData.item.key} title={itemData.item.value} onDelete={deleteGoalHandler}/>} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'aqua',
    padding: 50
  }
});
