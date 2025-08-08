import React, { useState } from "react";
import "./Contacto.css";
const Contacto = () => {
  const [valores, setValores] = useState({
    nombre: "",
    mail: "",
    telefono: ""
  });

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(valores)
  };

  const handleValores = (e) => {
    setValores({
      ...valores,
      [e.target.name]: e.target.value,
    });
    
  };

  return (
    <div className="container">
      <div className="container-form">
        <h2>Crear Usuario</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="textarea"
            type="text"
            placeholder="ingresa tu nombre"
            value={valores.nombre}
            onChange={handleValores}
             name="nombre"
          />
          <input
            className="textarea"
            type="email"
            placeholder="ingresa tu mail"
            value={valores.mail}
            onChange={handleValores}
            name="mail"
          />

          <input
            className="textarea"
            type="phone"
            placeholder="ingresa telefono"
            value={valores.telefono}
            onChange={handleValores}
            name="telefono"

          />

          <button type="submit">enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
