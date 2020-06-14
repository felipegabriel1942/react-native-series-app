import React from 'react';

import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

const AddSerieCard = ({ serie, isFirstColumn, onNavigate }) => (

    <TouchableOpacity 
        style={[styles.container, isFirstColumn ? styles.firstColumn : styles.lastColumn]}
        onPress={onNavigate}>
        <View style={styles.card}>{
            /*<Image 
                source={{
                    uri: serie.img
                }}
                aspectRatio={1}
                resizeMode="cover"/>*/
            }
            
            <View><Text>Botão</Text></View>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        padding: 5,
        width: '50%',
        height: Dimensions.get('window').width / 2
    },
    card: {
        flex: 1,
        elevation: 1,
        borderRadius: 2
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
    }
});

export default AddSerieCard;