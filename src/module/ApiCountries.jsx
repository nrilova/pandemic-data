//import { useFetch } from "./Fetch";
import { useState, useEffect } from "react";


export const Url = "https://disease.sh/v3/covid-19";

const Api = () => {
  const data = useFetch(`${Url}/countries`);
  return data;
};

export const useFetch = (url) => {
  const [data, setData] = useState([]);
      useEffect(() => {
  const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      console.log(json);
  };
  fetchData();
  }, [url]); 

return data; 
};

export default Api;