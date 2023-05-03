import { Container, Row } from "react-bootstrap";
import traqueoLogo from "/logo.png";
import traqueoIcon from "/icono.png";

export const Header = () => {
  return (
    <Container>
      <Row>
        <img className="logo" src={traqueoLogo} alt="Traqueo" />
        <img className="icon" src={traqueoIcon} alt="Traqueo" />
      </Row>
    </Container>
  );
};
