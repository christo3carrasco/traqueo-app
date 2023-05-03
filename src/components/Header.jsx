import { Container, Row } from "react-bootstrap";
import logo from "../../public/logo.png";
import icono from "../../public/icono.png";

export const Header = () => {
  return (
    <>
      <Container>
        <Row>
          <img src={logo} alt="Traqueo" className="logo" />
          <img src={icono} alt="Traqueo" className="icono" />
        </Row>
      </Container>
    </>
  );
};
