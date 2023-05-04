import PropTypes from "prop-types";

import { Col, Container, Row } from "react-bootstrap";
import { useFetchCoords } from "../hooks/useFetchCoords";

export const MapFrame = ({ latitude, longitude }) => {
  const { url, isLoading } = useFetchCoords(latitude, longitude);

  return (
    <Container>
      <Row>
        <Col>
          {isLoading && <h3 className="text-white">Loading...</h3>}
          <iframe
            width="100%"
            height="400"
            src={url}
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