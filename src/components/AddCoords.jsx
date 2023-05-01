import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from "react-bootstrap";

export const AddCoords = () => {
  return (
    <>
      <Container>
            <Form>
              <Row>
                <Col >
                  <Form.Group className="inputCoords " >
                    <Form.Control type="number" step="0.0001" placeholder="Latitud"/>
                  </Form.Group>
                </Col>

                <Col >
                  <Form.Group className="inputCoords">
                    <Form.Control type="number" step="0.0001" placeholder="Longitud" />
                  </Form.Group>
                </Col>
              </Row> 
              
              <Row style={{margin:"20px auto 28px auto"}}>
                <Button className='buttonCoords'  style={{ fontWeight:"600"}} variant="secondary" type="submit">
                  Submit
                </Button>
              </Row>
            </Form>
      </Container>
    </>
  );
};