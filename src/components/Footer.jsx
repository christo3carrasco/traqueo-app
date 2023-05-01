import { Col, Container, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <>
      <Container>
        <Row>
            <Col>
              <p style={{ 
                margin:"8px auto 8px auto",
                textAlign:"center",
                color:"#FFFFFF",
                fontWeight:"600"
              }}>Copyright 2023</p>
            </Col>
        </Row>
      </Container>
    </>
  );
};
