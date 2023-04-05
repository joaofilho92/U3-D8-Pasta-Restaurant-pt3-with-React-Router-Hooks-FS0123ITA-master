import { useEffect, useState } from "react";
import { Alert, Badge, Col, Container, Row, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import menu from "../data/menu.json";
import DishComments from "./DishComments";

const PastaDetails = () => {
  const [pasta, setPasta] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  console.log("PARAMS: ", params);
  // params è un oggetto che raccoglie al suo interno tutte le coppie
  // chiave-valore delle sezioni parametriche della vostra rotta

  useEffect(() => {
    const pastaObj = menu.find(dish => dish.id.toString() === params.pastaId);
    // il find ritorna undefined nel caso in cui non trovi corrispondenza

    console.log("PASTA OBJ", pastaObj);
    setTimeout(() => {
      setPasta(pastaObj);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof pasta === "undefined") {
      setTimeout(() => {
        navigate("/menu");
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pasta]);

  return (
    <Container fluid className="mt-5">
      {pasta ? (
        <>
          <img src={pasta.image} alt={pasta.name} width="100%" style={{ objectFit: "cover", height: "40vh" }} />
          <Row className="justify-content-center gy-5">
            <Col md={10} className="text-center">
              <h2 className="mt-5">{pasta.name}</h2>
              <p>{pasta.description}</p>
              <Badge bg="danger" className="me-1">
                {pasta.label}
              </Badge>
              <Badge bg="info">{pasta.price}</Badge>

              {/* DishComments visualizza il titolo condizionalmente, se non passiamo la prop activateTitle,
               il suo valore sarà undefined => falsy e di conseguenza il titolo sarà nascosto per questo utilizzo di DishComments */}
              <DishComments selectedPasta={pasta} />
            </Col>
          </Row>
        </>
      ) : typeof pasta === "undefined" ? (
        <Alert variant="danger">Piatto non trovato! Scegline un altro</Alert>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </Container>
  );
};

export default PastaDetails;
