import { Col, Container, Row } from "react-bootstrap";
import traqueoLogo from "/logo.png";
import traqueoIcon from "/icono.png";

export const Header = () => {
  return (
    <Container>
      <Row>
        <Col>
          <img className="logo" src={traqueoLogo} alt="Traqueo" />
          <img className="icon" src={traqueoIcon} alt="Traqueo" />
        </Col>
      </Row>
    </Container>
  );
};
