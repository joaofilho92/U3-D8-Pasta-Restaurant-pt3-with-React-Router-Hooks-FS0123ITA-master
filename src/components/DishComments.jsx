import { Alert, Badge, ListGroup } from "react-bootstrap";

const DishComments = ({ selectedPasta, activateTitle }) => (
  <ListGroup className="mt-5">
    {/* short circuit orperator (&&) o il ternary, permettono di verificare l'esistenza di un valore nello stato, prima di procedere ad accedere alle sue propietà ed evitare errori */}
    {/* this.state.selectedPasta inizia come null e quindi in un contesto come quello seguente verrà valutato a false */}

    {/* questo alert si visualizzerà SOLO quando selectedPasta è falsy */}
    {/* {!this.state.selectedPasta && <Alert variant="danger">Non ci sono recensioni</Alert>}*/}

    {/* questo h2 si visualizzerà SOLO quando selected pasta diventa truthy*/}
    {/*{this.state.selectedPasta && <h2>Abbiamo le tue recensioni:</h2>} */}

    {/* questo blocco si visualizzerà SOLO quando selected pasta diventa truthy */}
    {selectedPasta ? (
      <>
        {activateTitle && <h3>Recensioni per pasta alla {selectedPasta.name}</h3>}
        {selectedPasta.comments.map((review, index) => (
          <ListGroup.Item className="d-flex" key={`review-${index}`}>
            <Badge bg="dark">{new Date(review.date).toLocaleTimeString()}</Badge>
            <strong className="ms-2">{review.author}</strong>: <span className="ms-auto">{review.comment}</span>
          </ListGroup.Item>
        ))}
      </>
    ) : (
      <Alert variant="info">Clicca sull'immagine per visualizzare le recensioni</Alert>
    )}
  </ListGroup>
);

export default DishComments;
