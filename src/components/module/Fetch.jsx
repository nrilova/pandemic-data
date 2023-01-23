import { useState, useEffect } from "react";

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