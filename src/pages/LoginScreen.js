import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, ActivityIndicator, Alert } from 'react-native';
import  firebase  from 'firebase';
import '@firebase/auth';
 
import FormRow from '../components/FormRow';

export default class LoginScreen extends React.Component {

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

        const loginUserSucess = user => {
            this.setState({ message: 'Sucesso!'});
        }

        const loginUserFailed = error => {
            this.setState({
                message: this.getMessageByErrorCode(error.code)
            });
        }

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(loginUserSucess)
            .catch(error => {
                if(error.code === 'auth/user-not-found') {
                    Alert.alert(
                        'Usuário não encontrado',
                        'Desenha criar um cadastro com as informações inseridas?',
                        [
                            {
                                text: 'Não'

                            }, {
                                text: 'Sim',
                                onPress: () => {
                                    firebase
                                        .auth()
                                        .createUserWithEmailAndPassword(email, password)
                                        .then(loginUserSucess)
                                        .catch(loginUserFailed);
                                }

                            }
                        ],
                        {cancelable : false}
                    );
                } else {
                    loginUserFailed
                }                
            })
            .then(() =>this.setState({isLoading: false}) );
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