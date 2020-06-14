import React from 'react';

import { View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

const AddSerieCard = ({ isFirstColumn, onNavigate }) => (

    <TouchableOpacity 
        style={[styles.container, isFirstColumn ? styles.firstColumn : styles.lastColumn]}
        onPress={onNavigate}>
        <View style={styles.card}>
            <Image 
                source={require('../../resources/add.png')}
                style={styles.image}/>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '50%',
        height: Dimensions.get('window').width / 2
    },
    card: {
        flex: 1,
    },
    cartTitleWrapper: {
        backgroundColor: 'black',
        height: 50,
        position: 'absolute',
        bottom: 0,
        opacity: 0.7,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 3,
        alignItems: 'center'
    },
    cardTitle: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    firstColumn: {
        paddingLeft: 10
    },
    lastColumn: {
        paddingRight: 10
    },image: {
        width: '100%',
        height: '100%',
    }
});

export default AddSerieCard;