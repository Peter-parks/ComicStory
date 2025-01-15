import React from 'react';
import './Cards.css';

const Cards = ({ character }) => {
    return (
      <div className="card ">
        <img
          src={character.thumbnail.path + "." + character.thumbnail.extension}
          alt={character.name}
          className="card-image"
        />
        <h2 className="card-title">{character.title}</h2>
        <p className="card-content">{character.description}</p>
        <button
          className="card-button"
          onClick={() => (window.location.href = character.moreInfoUrl)}
        >
          Más información
        </button>
        <a className='marvel-enlace ' href="http://marvel.com">Data provided by Marvel. © 2025 MARVEL</a>
      </div>
    );
};

export default Cards;