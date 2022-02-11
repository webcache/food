//import liraries
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

// create a component
const ResultDetail = ({ result }) => {
    return (
        <View style={styles.resultItem}>
            <Image source={{uri: result.image_url}} style={styles.resultImage}/>
            <Text style={styles.resultName}>{result.name}</Text>
            <Text style={styles.resultRating}>{result.rating} Stars, {result.review_count} Reviews</Text>
            <Text>{result.id}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    resultItem: {
        marginTop:5,
        marginRight: 10,
        paddingBottom:10,
    },
    resultImage: {
        width: 250,
        borderRadius: 8,
        minHeight:200
    },
    resultName: {
        marginVertical:5,
        fontWeight:'bold',
        fontSize: 14,
        letterSpacing:1,
    },
    resultRating: {
        fontSize: 12,
        letterSpacing:.5,
    }
    });

//make this component available to the app
export default ResultDetail;
