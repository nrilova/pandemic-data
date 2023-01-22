import axios from 'axios';

const url='https://disease.sh/v3/covid-19/all';

export const fetchData = async () => {
    try{
        const { data : { todayCases, todayDeaths, todayRecovered, updated,cases,deaths }} = await axios.get(url);
      
      return {todayCases, todayDeaths, todayRecovered, updated,cases,deaths };
    }catch (error){
  

    }
}

