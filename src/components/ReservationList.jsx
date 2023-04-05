import { useEffect, useState } from "react";
import { Alert, Badge, Col, Container, ListGroup, Row, Spinner } from "react-bootstrap";

const ReservationList = () => {
  // state = {
  //   reservations: [],
  //   error: false,
  //   errorMsg: "",
  //   isLoading: true
  // };

  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchReservations = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/reservation");

      if (response.ok) {
        const data = await response.json();
        console.log("FETCH RESULT: ", data);

        // this.setState({ reservations: data, isLoading: false });

        setReservations(data);
        setIsLoading(false);

        console.log("SET STATE");
      } else {
        // this.setState({ error: true, isLoading: false });
        setError(true);
        setIsLoading(false);
      }
    } catch (error) {
      // this.setState({ error: true, errorMsg: error.message, isLoading: false });
      setError(true);
      setErrorMsg(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("COMPONENT DID MOUNT");

    // questa chiamata a fetchReservations avverrà una volta sola
    fetchReservations();
  }, []);

  console.log("RENDER");
  // fetch() // NO!
  // this.fetchReservations(); // NO! questo genererà un loop infinito dovuto al setState interno a fetchReservations: fare un setState richiama render()

  return (
    <Container className="mt-5">
      <h2 className="text-center">Prenotazioni attive</h2>
      {isLoading && !error && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      <Row className="justify-content-center">
        <Col md={10}>
          {error && !isLoading && <Alert variant="danger">{errorMsg ? errorMsg : "Errore nel reperire i dati"}</Alert>}

          <ListGroup>
            {reservations.length === 0 && !error && !isLoading && (
              <ListGroup.Item className="text-danger">Non ci sono ancora prenotazioni per oggi</ListGroup.Item>
            )}

            {reservations.map(reserv => (
              <ListGroup.Item key={reserv._id} className="d-flex justify-content-between">
                <span>
                  <Badge bg="dark">🧑‍🤝‍🧑{reserv.numberOfPeople}</Badge> {reserv.name} {reserv.smoking && <span>🚬</span>}
                </span>
                <span>{new Date(reserv.dateTime).toLocaleTimeString()}</span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ReservationList;
