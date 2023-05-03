import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";

export const AddCoords = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="inputCoords">
              <FloatingLabel controlId="floatingLatitude" label="Latitude">
                <Form.Control
                  type="number"
                  step="0.000001"
                  placeholder="Latitude"
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="inputCoords">
              <FloatingLabel controlId="floatingLongitude" label="Longitude">
                <Form.Control
                  type="number"
                  step="0.000001"
                  placeholder="Longitude"
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>
        <Row style={{ margin: "25px auto" }}>
          <Button className="buttonCoords" variant="secondary" type="submit">
            Submit
          </Button>
        </Row>
      </Form>
    </Container>
  );
};
