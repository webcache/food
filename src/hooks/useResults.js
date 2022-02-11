import { useState, useEffect } from 'react';
import yelp from '../screens/api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchTerm => {
        try {
            const response =  await yelp.get('/search', {
                params: {
                    limit: 25,
                    term: searchTerm,
                    location: '66219',
                    radius: 5000
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Search is currently unavailable');
        }
        
    };

    //Call searchApi when component is first rendered
    useEffect(() => {
       searchApi('Lunch');
    }, []);

    return [searchApi, results, errorMessage];
};