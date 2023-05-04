import { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";

export const AddCoords = ({ onNewLatitude, onNewLongitude }) => {
  const [latitudeValue, setLatitudeValue] = useState("");
  const [longitudeValue, setLongitudeValue] = useState("");

  const onLatitudeChange = ({ target }) => {
    setLatitudeValue(target.value);
  }
  const onLongitudeChange = ({ target }) => {
    setLongitudeValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (latitudeValue.length <= 1 || longitudeValue.length <= 1) return;
    onNewLatitude(parseFloat(latitudeValue));
    onNewLongitude(parseFloat(longitudeValue));
    setLatitudeValue("");
    setLongitudeValue("");
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col>
            <Form.Group className="inputCoords">
              <FloatingLabel controlId="floatingLatitude" label="Latitude">
                <Form.Control
                  type="number"
                  step="0.000001"
                  placeholder="Latitude"
                  value={latitudeValue}
                  onChange={onLatitudeChange}
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
                  value={longitudeValue}
                  onChange={onLongitudeChange}
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

AddCoords.propTypes = {
  onNewLatitude: PropTypes.func.isRequired,
  onNewLongitude: PropTypes.func.isRequired,
};
