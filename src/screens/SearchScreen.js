//import liraries
import React, { useState} from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../../components/searchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../../components/resultsList';

// create a component
const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
        return result.price === price;
 });
};
    return (
        <>
            <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Text style={{paddingVertical:5, paddingHorizontal:15, fontSize:12}}>We found {results.length} results in your search.</Text>
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title="Lowest Cost" />
                <ResultsList results={filterResultsByPrice('$$')} title="Mid Price" />
                <ResultsList results={filterResultsByPrice('$$$')} title="Higher Cost" />
            </ScrollView>    
        </>
    );
};


// define your styles
const styles = StyleSheet.create({
    errorMessage:{
        padding:15,
        color: 'red',
        fontWeight: 'bold'
    },
});

//make this component available to the app
export default SearchScreen;
