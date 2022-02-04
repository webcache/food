import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer TeRTkaQxcDfgyAhEj7X3w3Plb_kgkIvmgcnE62hy1SpAydh5cCiY0HF-cmXYeATpQS14r9MYHwsIVWv0PQfSqXswNbQankoG7I3xWueup5gr50N3J3wcRPJCf4z6YXYx'
    }
});

