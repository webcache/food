import { useState, useEffect } from 'react';
import yelp from '../screens/api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (term) => {
        try {
            const response =  await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: term,
                    location: '66219',
                    radius: 8000
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
    },[]);

    return [searchApi, results, errorMessage];
};