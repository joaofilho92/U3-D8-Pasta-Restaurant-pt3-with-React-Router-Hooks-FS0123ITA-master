import { useState } from "react";
import { Container, Row, Col, Carousel, Badge } from "react-bootstrap";
import menu from "../data/menu.json";
import DishComments from "./DishComments";
// per fa in modo che la lista di recensioni rispecchi il piatto cliccato, avrà bisogno di far uso di uno STATO interno al componente
// o component STATE
// lo STATE è una specie di memoria interna (e incapsulata) al componente

// lo STATE può essere applicato solo in un Class Component (per il momento)
// andremo a fare il refactor dei componenti a funzione per crearli a classi
const Home = () => {
  // lo STATE si può creare in un componente a classe
  // dovrà chiamarsi "state"
  // e sarà sempre un oggetto!

  // state = {
  //   // dontTouchMe: false,
  //   // initialValue: 0,
  //   selectedPasta: null
  // };

  const [selectedPasta, setSelectedPasta] = useState(null); // [valoreDiStato, funzione(){}]

  return (
    <Container>
      <Row className="justify-content-center mt-4 text-center">
        <Col md={10}>
          <h2>Benvenuti nel nostro reactstorante</h2>
          {/* <p>Niente secondi piatti, valore dello stato iniziale: {this.state.initialValue}</p> */}
          <p>Niente secondi piatti 🍝🍝👏</p>
          {/* <Button
              variant="success"
              className="mb-3"
              onClick={() => {
                // voglio modificare lo stato al click di questo bottone.
                // 1) lo stato non dovrà MAI e po MAI essere mutato direttamente!!!
                // non si potrà assolutamente fare: this.state.initialValue = "qualcos'altro"
                // 2) invece si utilizzerà un metodo asincrono che si prenderà carico di fare la modifica per noi.

                this.setState({ initialValue: "Ciao ragazzi" });
                
                // il setState richiede un oggetto come argomento, e si premurerà di cambiare solo le proprietà che abbiamo passato.
                // altre proprietà preesistenti rimarranno intoccate.

                // il metodo setState notifica React di un cambio di stato, e quindi si attiverà il processo di aggiornamento dell'interfaccia! :)
              }}
            >
              Click me
            </Button> */}
        </Col>
        <Col xs={6}>
          <Carousel>
            {/* React è capace di generare elementi dinamicamente e in sequenza a partire da un array sfruttando il metodo .map() */}
            {menu.map((dish, index) => (
              <Carousel.Item
                key={`dish-${index}`}
                onClick={() => {
                  console.log("abbiamo cliccato: " + dish.name);

                  // this.state.selectedPasta = dish; // VIETATISSIMO! perché usciamo dalle logiche React, non verrà notificato il cambiamento, e l'interfaccia non si aggiornerà
                  // console.log(this.state);
                  setSelectedPasta(dish);
                  // quando parte un setState, viene chiamato di nuovo il metodo render(), viene fatto un diff tra il DOM precedente e il VirtualDOM di React.
                  // solo gli elementi effettivamente diversi verranno aggiornati nell'interfaccia.
                }}
              >
                <img className="d-block w-100" src={dish.image} alt="First slide" />
                <Carousel.Caption>
                  <h3>{dish.name}</h3>
                  <p>
                    <Badge bg="dark">{dish.price}€</Badge>
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col xs={10}>
          {/* <Button variant="primary" onClick={() => this.setState({ selectedPasta: null })}>
              Reset Pasta
            </Button> */}
          {/* quando activeTitle è presente il suo valore sarà implicitamente true, come se avessimo scritto acriveTitle={true} */}
          <DishComments selectedPasta={selectedPasta} activateTitle />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
