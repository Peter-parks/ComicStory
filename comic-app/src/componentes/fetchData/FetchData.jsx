import React, { useState, useEffect } from 'react';
import Cards from '../cards/Cards';

const FetchData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                  "https://gateway.marvel.com:443/v1/public/events?ts=1&apikey=54dc3c7028c0096eabedf8ddd6fa9acc&hash=9ccf8d8d3235af7383bb24fb03d9b984"
                );
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
                
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
      console.log(data),
      data.data.results.map((character) => (
        <Cards key={character.id} character={character} />
      ))
    );
};

export default FetchData;




/* FETCH DE LOS PERSONAJES */
/* https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=54dc3c7028c0096eabedf8ddd6fa9acc&hash=9ccf8d8d3235af7383bb24fb03d9b984 */