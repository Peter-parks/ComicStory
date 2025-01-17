import  { useEffect,useState} from "react";
import "./Personajes.css";
import icono from "./logoLoading.png";


const Personajes = () => {
  const [data, setData] = useState();
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=54dc3c7028c0096eabedf8ddd6fa9acc&hash=9ccf8d8d3235af7383bb24fb03d9b984`
    )
      
      .then((res) => {
        if(!res.ok){
          throw new Error('Network response was not ok')
        }
        return res.json();
      })
      .then((data) => {
        if(!data.ok){
            setLoading(false)
        }
        console.log(data);
        setData(data);
      })

      
      ;
  }, []);

  if(loading){

    return (
  <div className="loading-container">
    <img src={icono} alt="icono"></img>
    <p>Loading...</p>
  </div>
);

  }

  return( 
    
    <div className="card-container">
    {data && data.data && data.data.results.map((personaje) => (
    <div className="container" key={personaje.id}>
      <div className="card">
        <img
          src={personaje.thumbnail.path + ".jpg"}
          alt={personaje.name}
          className="card-image"
        />
        <h2 className="card-title">{personaje.name}</h2>
        <p className="card-content">{personaje.description}</p>
      </div>
    </div>
    ))}
  </div>
  );
}


  


export default Personajes;
