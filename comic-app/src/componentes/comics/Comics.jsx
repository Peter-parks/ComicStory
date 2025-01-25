import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Comics.css";

const Comics = () => {
  const [data, setData] = useState();
  const id = useParams(0).id;
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  useEffect(() => {
    fetch(
      `https://gateway.marvel.com:443/v1/public/events/${id}?ts=1&apikey=54dc3c7028c0096eabedf8ddd6fa9acc&hash=9ccf8d8d3235af7383bb24fb03d9b984`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.data.results);
      });
  }, [id]);

  return (
    <>
      {data &&
        data.map((character) => (
          <div key={character.id} className="comics-card">
            <img
              src={character.thumbnail.path + ".jpg"}
              alt={character.name}
              className="comic-image"
            />
            <h2 className="comic-title">{character.title}</h2>
            <p className="comic-content">{character.description}</p>
            <p className="comic-price">Precio: ${character.creators.available}</p>
            <div className="comic-rating">
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <button
                    type="button"
                    key={index}
                    className={index <= rating ? "on" : "off"}
                    onClick={() => handleRating(index)}
                  >
                    <span className="star">&#9733;</span>
                  </button>
                );
              })}
            </div>
            <button className="add-to-cart-btn">Agregar al Carrito</button>
          </div>
        ))}
    </>
  );
};

export default Comics;
