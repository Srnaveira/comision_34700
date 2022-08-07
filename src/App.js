import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Footer from './Components/Footer/Footer';


function App() {
  return (
      <BrowserRouter>
              <div className="cont__principal">
                  <NavBar />
                  <Routes>
                      <Route path='/' element={ <ItemListContainer /> }/>
                      <Route path='/products/:itemId' element={ <ItemDetailContainer/> }/>
                      <Route path='/gender/:genderId' element={ <ItemListContainer/> }/>
                      <Route path='*' element={ <ItemListContainer /> }/>
                  </Routes>
                  <Footer />
              </div>
      </BrowserRouter>
    
    );
}

export default App;
