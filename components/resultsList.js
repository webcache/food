//import liraries
import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ResultDetail from './ResultsDetail';

// create a component
const ResultsList = ({ title, results }) => {
    const navigation = useNavigation();

    if (!results.length) {
        return null;
    }
   
    return (
        <View style={styles.resultsContainer}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return  (
                    <TouchableOpacity onPress={() => navigation.navigate('Detail', { id: item.id })}>
                        <ResultDetail result={item}  />
                    </TouchableOpacity>    
                    )
                }}
                showsHorizontalScrollIndicator={false}
                
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    resultsContainer:{
        marginTop:10,
        paddingVertical:5,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderColor:'#d3d3d3'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom:5
    }
});

//make this component available to the app
export default ResultsList;
