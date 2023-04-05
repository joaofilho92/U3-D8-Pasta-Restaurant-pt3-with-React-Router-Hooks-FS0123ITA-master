import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import menu from "../data/menu.json";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center gy-5">
        {menu.map(dish => (
          <Col xs={12} key={dish.id}>
            <Card className="mx-auto" style={{ width: "40vw" }}>
              <Card.Img variant="top" src={dish.image} />
              <Card.Body>
                <Card.Title>{dish.name}</Card.Title>
                <Card.Text>{dish.description}</Card.Text>
                <Badge bg="danger" className="me-1">
                  {dish.label}
                </Badge>
                <Badge bg="info">{dish.price}</Badge>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center">
                <Link to={"/dettagli/" + dish.id} className="w-100">
                  <Button variant="dark" className="w-100">
                    Vai {dish.name === "Amatriciana" ? "ad" : "a"} {dish.name}
                  </Button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;
