import React from 'react'
import { StyleSheet, View } from 'react-native'

const FormRow = props => {
    const {children} = props;

    return (
        <View style={styles.container}>
            { children }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 4,
        margin: 10,
        elevation: 1
    }
});

export default FormRow