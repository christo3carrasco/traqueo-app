import PropTypes from "prop-types";

import { Col, Container, Row } from "react-bootstrap";
import { getCoords } from "../helpers/getCoords";

export const MapFrame = ({ latitude, longitude }) => {
  return (
    <Container>
      <Row>
        <Col>
          <iframe
            width="100%"
            height="400"
            src={getCoords(latitude, longitude)}
            style={{ border: "5px solid #f5434a", borderRadius: "10px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

MapFrame.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};
