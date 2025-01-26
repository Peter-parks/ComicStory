import "./App.css";
import Personajes from "./componentes/personajes/Personajes";
import Contacto from "./componentes/contacto/Contacto";
import Comics from "./componentes/comics/Comics";
import FetchData from "./componentes/fetchData/FetchData";
import Footer from "./componentes/footer/Footer";
import Navbar from "./componentes/navBar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { CartContext } from "./componentes/context/CartContext";

function App() {
  const [compras, setCompras] = useState([]);

  const user = "camps";
  const edad = 35;

  return (
    <div className="App">
      <CartContext.Provider value={{ user, edad }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/inicio" element={<FetchData/>} />
            <Route path="/comics" element={<FetchData />} />
            <Route path="/comics/:id" element={<Comics />} />
            <Route path="/personajes" element={<Personajes />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
