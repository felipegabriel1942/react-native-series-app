import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput} from 'react-native';
import FormRow from '../components/FormRow';

const SeriesFormScreen = props => (
    <View>
        <FormRow first>
            <TextInput 
                style={styles.input}
                placeholder="Título"
                value=""
                onChangeText={value => console.log(value)}/>
        </FormRow>
    </View>    
);

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 5,
        paddingBottom: 5
    }
});

export default SeriesFormScreen;