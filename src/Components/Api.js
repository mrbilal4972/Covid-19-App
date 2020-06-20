import axios from 'axios';

export const fetchData = () => {
    const countryPromise = fetchCountries();
    return {
        country: wrapPromise(countryPromise) 
    }
}

const wrapPromise = (promise) => {
    let status = 'pending';
    let result;

    let suspender = promise.then(
        res => {
            status = 'success';
            result = res;
        },
        err => {
            status = 'error';
            result = err; 
        }
    );

    const read = () => {
        switch(status){
            case 'pending':
                throw suspender
            case 'error':
                throw result
            case 'success':
                return result;
            default:
                throw suspender;
        }
    }
    return { read }
} 

function fetchCountries(){
    return axios.get('https://api.covid19api.com/summary')
    .then(res => res.data)
    .catch(err => console.log(err))
}




