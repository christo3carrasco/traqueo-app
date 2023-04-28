import { AddCoords, Footer, Header, MapFrame } from "./components";

export const TraqueoApp = () => {
  return (
    <>
      <Header />
      <h1>TraqueoApp</h1>
      <AddCoords />
      <MapFrame latitude={-8.12689} longitude={-79.0287} />
      <Footer />
    </>
  );
};
