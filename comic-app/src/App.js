import './App.css';

import FetchData from './componentes/fetchData/FetchData';
import Footer from './componentes/footer/Footer';
import Navbar from './componentes/navBar/Navbar';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>

      <br />
      <div className="card-container">
        <FetchData />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
