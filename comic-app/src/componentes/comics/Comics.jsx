import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Comics.css";

const Comics = () => {
    const [data, setData] = useState();
    const id = useParams().id;

    
    useEffect(() => {
        fetch(
            `https://gateway.marvel.com:443/v1/public/events/${id}?ts=1&apikey=54dc3c7028c0096eabedf8ddd6fa9acc&hash=9ccf8d8d3235af7383bb24fb03d9b984`
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(id);
                setData(data.data.results);
            });
    }, [id]);

    return (
        <>
            {data &&
                data.map((character) => (
                    <div key={character.id} className="card-Personaje">
                        <img
                            src={character.thumbnail.path + ".jpg"}
                            alt={character.name}
                            className="card-image"
                        />
                        <h2 className="card-title">{character.title}</h2>
                        <p className="card-content">{character.description}</p>
                    </div>
                ))}
        </>
    );
};

export default Comics;