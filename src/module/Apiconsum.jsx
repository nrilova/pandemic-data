import axios from 'axios';

const url = 'https://disease.sh/v3/covid-19/all';

 export const fetchData = async () => {
    try{
        const { data : {  cases, active, recovered, deaths, critical, updated }} = await axios.get(url);
        return { cases,  active, recovered, deaths, critical, updated };
    }catch (error) {

    }
 }

 
 export const fetchCountryData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        console.log(data);  
    }catch (error) {
        return error;
    }
 };