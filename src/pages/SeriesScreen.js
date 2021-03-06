import React from 'react';
import { View, StyleSheet, FlatList} from 'react-native';

import series from '../../series.json';

import SerieCard from '../components/SerieCard';
import AddSerieCard from '../components/AddSerieCard';

const isEven = number => number% 2 === 0;

const SeriesScreen = props => (
    <View>
        <FlatList
            data={[...series, { isLast: true }]}
            renderItem={({ item, index }) => (
                item.isLast 
                    ? <AddSerieCard
                        isFirstColumn={isEven(index)}
                        onNavigate={() => props.navigation.navigate('SerieForm')}></AddSerieCard>
                    : <SerieCard 
                        serie={item}
                        isFirstColumn={isEven(index)}
                        onNavigate={() => props.navigation.navigate('SerieDetail', { serie: item })} />
            )}
            keyExtractor={item => item.id}
            numColumns={2}
            ListHeaderComponent={props => (
                <View style={styles.marginHeader} />
            )}
            ListFooterComponent={props => (
                <View style={styles.marginBottom} />
            )} />
    </View>    
);

const styles = StyleSheet.create({
    marginHeader: {
        marginTop: 5
    },
    marginBottom: {
        marginBottom: 15
    }
});

export default SeriesScreen;