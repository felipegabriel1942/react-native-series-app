import React from 'react';
import { View, StyleSheet, TextInput, Button, ActivityIndicator } from 'react-native';
import  firebase  from 'firebase';
import '@firebase/auth';
 
import FormRow from '../components/FormRow';

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            isLoading: false
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
        this.setState({isLoading: true});

        const { email, password } = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => {
                console.log('Usuário autenticado');
            })
            .catch(error => {
                console.log('Usuário não autenticado');
            })
            .then(() =>this.setState({isLoading: false}) );
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