import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

const GoalItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
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
