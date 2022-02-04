//import liraries
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

// create a component
const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    
    return (
        <View style="styles.searchBg">
            <TextInput
                mode="outlined"
                label="Search"
                value={term}
                onChangeText={onTermChange}
                autoCapitalize='none'
                autoCorrect={false}
                left={<TextInput.Icon name="magnify" size={24} color="#6200ee" />}
                style={styles.searchInput}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    searchBg:{
        backgroundColor: '#f2f2f2',
        padding:15
    },
    searchInput:{
        margin:10
    }
    });

//make this component available to the app
export default SearchBar;
