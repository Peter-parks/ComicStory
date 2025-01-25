import { useEffect, useState } from "react";
import "./Personajes.css";
import icono from "./logoLoading.png";
import { Link } from "react-router-dom";

const Personajes = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=54dc3c7028c0096eabedf8ddd6fa9acc&hash=9ccf8d8d3235af7383bb24fb03d9b984`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        if (!data.ok) {
          setLoading(false);
        }
        console.log(data);
        setData(data);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-personajes">
        <img src={icono} alt="icono"></img>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container-personaje">
      {data &&
        data.data &&
        data.data.results.map((personaje) => (
          <div className="tarjeta-container" key={personaje.id}>
            <div className="tarjeta">
              <img
                src={personaje.thumbnail.path + ".jpg"}
                alt={personaje.name}
                className="tarjeta-image"
              />
              <h2 className="tarjeta-title">{personaje.name}</h2>
              <p className="tarjeta-content">{personaje.description}</p>
              <Link className="tarjeta-button" to={`/comics/${personaje.id}`}>
                Ver más
              </Link>
              <Link className="marvel-enlace" to="http://marvel.com">
                Data provided by Marvel. © 2025 MARVEL
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Personajes;
