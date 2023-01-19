import axios from 'axios';

const url='https://disease.sh/v3/covid-19/all';

export const fetchData = async () => {
    try{
        const { data : { active, recovered, deaths, updated }} = await axios.get(url);
      
      return { active, recovered, deaths, updated };
    }catch (error){
  

    }
}
