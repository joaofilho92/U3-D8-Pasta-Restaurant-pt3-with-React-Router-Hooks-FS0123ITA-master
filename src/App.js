import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ReservationForm from "./components/ReservationForm";
import ReservationList from "./components/ReservationList";
import TopBar from "./components/TopBar";
import NotFound from "./components/NotFound";
import Menu from "./components/Menu";
import PastaDetails from "./components/PastaDetails";
import ClassComponent from "./components/ClassComponent";

// BrowserRouter è un componente che abilita le funzioni di routing ai suoi figli;
// non si traduce in un componente visibile con nessun nodo del DOM

// Routes è un altro contenitore, ma contiene solamente i componenti che desideriamo montare dinamicamente (o condizionalmente) a seconda del contenuto della barra URL

// I figli di Routes possono essere solamente delle Route
// le Route saranno quei componenti che includeranno i nostri componenti custom (le nostre pagine), e decideranno loro quando visualizzarli
function App() {
  return (
    <BrowserRouter>
      <TopBar brand="React Restaurant" claim="Best pasta in town!" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/prenotazioni" element={<ReservationList />} />
        <Route path="/prenota-tavolo" element={<ReservationForm />} />
        <Route path="/dettagli/:pastaId" element={<PastaDetails />} />
        <Route path="/class-component/:dynamicId" element={<ClassComponent myName="Heisenber" />} />
        <Route path="*" element={<NotFound spacings="mt-5" variant="danger" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
