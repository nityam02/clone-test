import { useEffect, useState } from "react";


const useFetch=(url)=>{
  const [response,setResponse]=useState(null);

  useEffect(()=>{
    const doFetch = async()=>{
        const result = await fetch(url)
        const json= await result.json();
        setResponse(json);
    }
    doFetch()
  },[url])

  return response;
}

export default useFetch