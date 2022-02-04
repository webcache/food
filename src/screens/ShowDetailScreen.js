//import liraries
import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import yelp from './api/yelp';
import { useNavigation } from '@react-navigation/native';

// create a component
const ShowResultDetail = ({ route }) => {
    const [result, setResult] = useState(null);
    const id = route.params.id;
    const back = useNavigation(back);
    
    //console.log(result);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    },[]);

    if(!result) {
        return null;
    }
   
    return (
        <View style={styles.itemContainer}>
            <Button icon="arrow-left-circle" mode="outlined" compact={true} color="#6200ee" style={styles.backBtn} onPress={() => back.navigate('Search')} >Back To Results</Button>
            
            <Text style={styles.itemTitle}>{result.name} <Text style={styles.rating}>| {result.rating} Stars, {result.review_count} Reviews</Text></Text>
            <FlatList style={styles.photoRow}
                horizontal
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.Image} source={{uri:item}} />}}
                showsHorizontalScrollIndicator={false}
            />
            <Text>
                Address: {result.location.display_address}
            </Text>
            <Text>
                Phone: {result.display_phone}
            </Text>
        </View>
    )
};

// define your styles
const styles = StyleSheet.create({
    itemContainer:{
        padding: 15,
    },
    itemTitle:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:20
    },
    photoRow:{
        marginBottom:20
    },
    Image:{
        width: 300,
        minHeight: 200,
        marginRight: 10,
        borderRadius:8
    },
    rating: {
        fontSize: 12,
        letterSpacing:.5,
    },
    backBtn:{
        width:200,
        marginBottom:20
    }
});

//make this component available to the app
export default ShowResultDetail;
