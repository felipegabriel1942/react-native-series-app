import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, ActivityIndicator, Alert } from 'react-native';
import  firebase  from 'firebase';
import '@firebase/auth';

import { connect } from 'react-redux';

import { tryLogin } from '../actions/_index';
 
import FormRow from '../components/FormRow';

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            isLoading: false,
            message: ''
        }
    }

    componentDidMount() {
        const config = {
            apiKey: "AIzaSyAhuVIx1r5qUtpcmE_9HSJklLMGPs8VFIM",
            authDomain: "react-native-series-app-ea879.firebaseapp.com",
            databaseURL: "https://react-native-series-app-ea879.firebaseio.com",
            projectId: "react-native-series-app-ea879",
            storageBucket: "react-native-series-app-ea879.appspot.com",
            messagingSenderId: "77606116089",
            appId: "1:77606116089:web:c2b80109c4a2c2fe766028",
            measurementId: "G-M9ZQB3KQXL"
        };

        // Initialize Firebase
        !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
       
    }

    onChangeHandler(field, value) {
        this.setState({[field]: value});
    }

    login() {
        this.setState({ isLoading: true, message: '' });
        const { email, password } = this.state;

        this.props.tryLogin({email, password})
            .then(() => {
                this.setState({ message: 'Sucesso!'});
                this.props.navigation.replace('Main');
            });
    }

    getMessageByErrorCode(errorCode) {
        switch(errorCode) {
            case 'auth/wrong-password':
                return 'Senha incorreta';
            case 'auth/user-not-found':
                return 'Usuário não encontrado';
            default:
                return 'Erro desconhecido';
        }
    }

    renderMessage() {
        const { message } = this.state;

        if (!message) {
            return null;
        } else {
            return <View>
                        <Text>{ message }</Text>
                    </View>
        }
    }

    renderButton() {
        if (this.state.isLoading) {
            return <ActivityIndicator />
        }

        return (
            <Button 
                title='Entrar'
                onPress={() => { this.login() }} />
        );
    }

    render() {
        return(
            <View style={styles.container}>

                <FormRow first>
                    <TextInput
                        style={styles.input}
                        placeholder='user@mail.com'
                        value={this.state.email}
                        onChangeText={value => this.onChangeHandler('email', value)} />
                </FormRow>

                <FormRow last>
                    <TextInput
                        style={styles.input}
                        placeholder='******'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler('password', value)}  />
                </FormRow>

                { this.renderButton() }
                { this.renderMessage() }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    }, 
    input: {
        paddingHorizontal: 5,
        paddingBottom: 5
    }
});

export default connect(null, { tryLogin } || { actionCreator})(LoginScreen)