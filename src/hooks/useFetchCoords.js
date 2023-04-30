import { useEffect, useState } from "react";
export const useFetchCoords = () => {
  const [coordenadas, setCoordenadas] = useState([]); 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); 
  useEffect(()=>{
    setIsLoading(true); 
    fetch(`Url`)
    .then(response => response.json()) 
    .then(data => {
      setCoordenadas(data); 
      setIsLoading(false); 
    })
    .catch(error => {
      setError(error); 
      isLoading(false); 
    })
  },[]); 

  return {coordenadas, isLoading, error};
};

