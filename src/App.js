
import Home from './components/header/Home';
import Footer from './components/footer/Footer';
import SectionInfo from './components/body/SectionInfo';
import Habitaciones from './components/habitaciones/Habitaciones';
import Cabaña from './components/varios/Cabaña';
import MapContainer from './components/llegar/MapContainer';
import Ruta from './components/llegar/Ruta'
import './App.css';


function App() {
  return (
    <div className="App">
      <Home />
      <SectionInfo />
      <Cabaña />
      <Habitaciones />
      <Footer />
      <Ruta />
      <MapContainer />
    </div>
  );
}

export default App;
