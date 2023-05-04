import { useState } from "react";
import { AddCoords, Footer, Header, MapFrame } from "./components";

export const TraqueoApp = () => {
  const [latitude, setLatitude] = useState(-8.12689);
  const [longitude, setLongitude] = useState(-79.02871);

  const onAddLatitude = (newLatitude) => {
    if (latitude == newLatitude) return;
    setLatitude(newLatitude);
  };
  const onAddLongitude = (newLongitude) => {
    if (longitude == newLongitude) return;
    setLongitude(newLongitude);
  };

  return (
    <>
      <Header />
      <AddCoords
        onNewLatitude={onAddLatitude}
        onNewLongitude={onAddLongitude}
      />
      <MapFrame latitude={latitude} longitude={longitude} />
      <Footer />
    </>
  );
};