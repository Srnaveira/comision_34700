import NavBar from './Components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div style={{backgroundColor: "wheat", height: "100vh"}}>
      <NavBar />
      <ItemListContainer texto="Entrega COMPONENTES I" mensaje="HOLA MUNDO!!!"/>
    </div>
    );
}

export default App;
