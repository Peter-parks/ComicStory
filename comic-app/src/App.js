import "./App.css";
import Personajes from "./componentes/personajes/Personajes";
import Contacto from "./componentes/contacto/Contacto";
import Comics from "./componentes/comics/Comics";
import FetchData from "./componentes/fetchData/FetchData";
import Footer from "./componentes/footer/Footer";
import Navbar from "./componentes/navBar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<FetchData />} />
          <Route path="/inicio" element={<FetchData />} />
         
          <Route path="/comics/:id" element={<Comics/>} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
