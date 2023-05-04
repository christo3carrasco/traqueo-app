import { useEffect, useState } from "react";
import { getCoords } from "../helpers/getCoords";

export const useFetchCoords = (latitude, longitude) => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getUrl = () => {
    const newUrl = getCoords(latitude, longitude);
    setUrl(newUrl);
    setIsLoading(false);
  };

  useEffect(() => {
    getUrl();
  }, [latitude, longitude]);
  return { url, isLoading };
};
