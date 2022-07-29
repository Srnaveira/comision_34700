import './App.css'
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Footer from './Components/Footer/Footer';


function App() {
  return (
        <div className="cont__principal">
          <NavBar />
          <ItemListContainer />
          <Footer />
        </div>
    );
}

export default App;
