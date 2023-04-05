import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

// queste sono le proprietà che il server si aspetterà di ricevere da noi
// ogni volta che invieremo una prenotazione

// name <-- string
// phone <-- string/number
// numberOfPeople <-- string/number
// smoking <-- boolean
// dateTime <-- date/string
// specialRequests <-- string

// il nostro scopo sarà quello di LEGARE tutti gli input ad uno STATE interno al componente
// lo STATE dovrà MODIFICARSI contemporaneamente all'inserimento del dato nell'input
// e di conseguenza l'input dovrà LEGGERE il valore dallo stato

// TWO-WAY DATA BINDING - avviene su un input di tipo "controlled" (controllato) e necessita di un doppio collegamento, da-e-verso lo stato

//   esempio di funzionamento di un evento
//   const onSubmit = callback => {
//     const event = {};

//     callback(event);
//   };

const ReservationForm = () => {
  // state = {
  //   user: null, // esiste solo come esempio
  //   reservation: {
  //     name: "",
  //     phone: "",
  //     numberOfPeople: "1",
  //     smoking: false,
  //     dateTime: "",
  //     specialRequests: ""
  //   }
  // };

  const [reservation, setReservation] = useState({
    name: "",
    phone: "",
    numberOfPeople: "1",
    smoking: false,
    dateTime: "",
    specialRequests: ""
  });

  // per metodi della classe custom, usate SEMPRE le arrow function, che ereditano in automatico il this dalla loro istanza
  // altrimenti potreste avere errori nell'usare il this nel contesto del metodo.
  const handleChange = (propertyName, propertyValue) => {
    setReservation({
      ...reservation,
      [propertyName]: propertyValue
    });
  };

  const handleSubmit = async e => {
    // fare il preventDefault sul comportamento di base del form è ancora più fondamentale in react (la pagina non dovrà MAI essere refreshata)
    e.preventDefault();

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/reservation", {
        method: "POST",
        body: JSON.stringify(reservation),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        // se siamo qua dentro abbiamo ottenuto, verosimilmente, uno status positivo (200 o simili)
        // quindi possiamo resettare i campi
        setReservation({
          name: "",
          phone: "",
          numberOfPeople: "1",
          smoking: false,
          dateTime: "",
          specialRequests: ""
        });
      } else {
        alert("errore nell'invio dei dati");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Prenota il tuo tavolo</h2>
      <Row className="justify-content-center">
        <Col md={10}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome breve"
                // il value sta operando una lettura dallo stato
                value={reservation.name}
                // l'onChange sta operando la scrittura nello stato
                // le due cose assieme compongono la TWO-WAY DATA BINDING
                onChange={e => {
                  handleChange("name", e.target.value);
                }}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                type="text"
                placeholder="+3934....."
                value={reservation.phone}
                onChange={e => {
                  handleChange("phone", e.target.value);
                }}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="nOfPeople">
              <Form.Label>Numero di persone al tavolo</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={reservation.numberOfPeople}
                onChange={e => {
                  handleChange("numberOfPeople", e.target.value);
                }}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="smoking">
              <Form.Label>Fumatori</Form.Label>
              <Form.Check
                type="checkbox"
                label="Seleziona se fumatori al tavolo"
                checked={reservation.smoking}
                onChange={e => {
                  handleChange("smoking", e.target.checked);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="dateTime">
              <Form.Label>Data e ora</Form.Label>
              <Form.Control
                type="datetime-local"
                value={reservation.dateTime}
                onChange={e => {
                  handleChange("dateTime", e.target.value);
                }}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="specialReq">
              <Form.Label>Richieste speciali</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Allergie, intolleranze, richieste particolari..."
                rows={4}
                value={reservation.specialRequests}
                onChange={e => {
                  handleChange("specialRequests", e.target.value);
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ReservationForm;
