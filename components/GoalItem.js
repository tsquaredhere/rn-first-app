import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} activeOpacity={0.5}> 
            <View style={styles.listItem} on>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1
      }
})


export default GoalItem;
