import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';

const Cards = ({ character }) => {
    return (
      <div className="card ">
      <img
        src={character.thumbnail.path + ".jpg"}
        alt={character.name}
        className="card-image"
      />
      <h2 className="card-title">{character.title}</h2>
      <p className="card-content">{character.description}</p>
      <Link className="card-button" to={`/comics/${character.id}`}>
        Ver mas
      </Link>
      <Link className='marvel-enlace ' to="http://marvel.com">Data provided by Marvel. © 2025 MARVEL</Link>
      </div>
    );
};

export default Cards;