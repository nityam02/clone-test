import React,{ useEffect, useState } from "react";


const useFetch=(query)=>{
  const [response,setResponse]=useState(null);

  useEffect(()=>{
    const url = `https://autocomplete.clearbit.com/v1/companies/suggest?query=${query}`;
    const doFetch = async()=>{
        const result = await fetch(url)
        const json= await result.json();
        setResponse(json);
    }
    doFetch()
  },[query])

  return response;
}

export default useFetch