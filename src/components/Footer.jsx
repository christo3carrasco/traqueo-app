import { Col, Container, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>
          <p className="footerText">&copy; Copyright 2023 TRAQUEO</p>
        </Col>
      </Row>
    </Container>
  );
};
