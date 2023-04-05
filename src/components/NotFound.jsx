import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NotFound = props => {
  const navigate = useNavigate();
  console.log("NAVIGATE", navigate);

  // navigate è una funzione
  // serve a redirezionare l'utente ad una nuova rotta via codice

  return (
    <div className={`text-center ${props.spacings}`}>
      <h1>404 — Pagina non trovata</h1>
      <p>
        La risorsa richiesta non esiste, <Link to="/">torna indietro</Link>
      </p>
      {/* alternativa 1) */}

      <Link to="/">
        <Button variant={props.variant || "info"}>Torna alla Homepage</Button>
      </Link>

      {/* alternativa 2) */}
      {/* <Button
        variant={props.variant || "info"}
        onClick={() => {
          navigate("/");
        }}
      >
        Torna alla Homepage
      </Button> */}
    </div>
  );
};

export default NotFound;
