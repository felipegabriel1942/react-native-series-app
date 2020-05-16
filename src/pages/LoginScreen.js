import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import FormRow from '../components/FormRow';

export default class LoginScreen extends React.Component {
    render() {
        return(
            <View>
                <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder='user@mail.com' />
                </FormRow>
                <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder='******'
                        secureTextEntry />
                </FormRow>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 5,
    } 
});