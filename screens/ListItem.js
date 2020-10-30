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
      fontSize: 18,
      color: '#191970'
    },
    textStyle1: {
      fontSize: 22,
      color: '#008b8b',
      fontWeight: 'bold',
    }
});
 
export default ListItem;