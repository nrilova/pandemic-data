import React from 'react';
import {useState, useEffect} from 'react';
import Item from './ItemCard';

 const CardFlag =()=>{
  const [url, setUrl] = useState("https://disease.sh/v3/covid-19/all");
  const [item, setItem] = useState("");
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    return () => {
      fetch(url).then(res=>res.json()).then(data=>{
        console.log(data.meals);
        setItem(data.meals);
        setShow(true);
      })
    };
  }, [url])
 }