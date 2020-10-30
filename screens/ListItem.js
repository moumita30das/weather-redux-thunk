import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
const ListItem = props => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.textStyle1}>{props.child1}</Text>
             <Text style={styles.textStyle}>{props.child2}</Text>
            <Text style={styles.textStyle}>{props.child3}</Text>
        </View>
    );
};
 
const styles = StyleSheet.create({
 
    mainContainer: {
       backgroundColor: 'white',
       padding: 10,
    },
    textStyle: {
      fontSize: 22,
      color: 'black'
    },
    textStyle1: {
      fontSize: 22,
      color: 'black',
      fontWeight: 'bold',
    }
});
 
export default ListItem;