import React from 'react';
import { View, StyleSheet, TextInput, Picker, Slider, Text, Button, ScrollView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import FormRow from '../components/FormRow';
import { setField, saveSerie } from '../actions/serieFormActions'

const SeriesFormScreen = ({ serieForm, setField, saveSerie }) => (
    <KeyboardAvoidingView
        style={styles.keyboardViewContainer}>
        <ScrollView>
            <FormRow first>
                <TextInput 
                    style={styles.input}
                    placeholder="Título"
                    value={serieForm.title}
                    onChangeText={value => setField('title', value)}/>
            </FormRow>
            <FormRow>
                <TextInput 
                    style={styles.input}
                    placeholder="URL da imagem"
                    value={serieForm.img}
                    onChangeText={value => setField('img', value)}/>
            </FormRow>
            <FormRow>
                <Picker
                    selectedValue={serieForm.gender}
                    onValueChange={itemValue => setField('gender', itemValue)}>

                    <Picker.Item label="Pocial" value="policial" />
                    <Picker.Item label="Drama" value="drama" />
                    <Picker.Item label="Comédia" value="comedia" />

                </Picker>
            </FormRow>
            <FormRow>
                <View style={styles.sameRow}>
                    <Text>Nota:</Text>
                    <Text>{serieForm.rate}</Text>
                </View>
                <Slider 
                    onValueChange={value => setField('rate', value)}
                    value={serieForm.rate}
                    minimumValue={0}
                    maximumValue={100}
                    step={5}/>
            </FormRow>
            <FormRow>
                <TextInput 
                    style={styles.input}
                    placeholder="Descrição"
                    value={serieForm.description}
                    onChangeText={value => setField('description', value)}
                    numberOfLines={4}
                    multiline={true}/>
            </FormRow>
            <Button 
                title="Salvar"
                onPress={() => {
                    saveSerie(serieForm)
                }} />
        </ScrollView>
    </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 5,
        paddingBottom: 5
    },
    sameRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingBottom: 10
    },
    keyboardViewContainer: {
        width: '100%',
        padding: 18
    }
});

function mapStateToProps(state) {
    return {
        serieForm: state.serieForm
    }
}

const mapDispatchToProps = {
    setField,
    saveSerie
}

export default connect(mapStateToProps, mapDispatchToProps)(SeriesFormScreen);