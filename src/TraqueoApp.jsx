import { AddCoords, Footer, Header, MapFrame } from "./components";

export const TraqueoApp = () => {
  return (
    <>
      <Header />
      <AddCoords />
      <MapFrame latitude={-8.12689} longitude={-79.0287} />
      <Footer />
    </>
  );
};
