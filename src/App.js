import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Footer from './Components/Footer/Footer';
import Ups from './Components/Ups/Ups'
import Cart from './Components/Cart/Cart';
import CartProvider from './Context/CartContext';
import AddProduct from './Components/AddProduct/AddProduct';
import Contact from './Components/Contact/Contact';


function App() {
  return (
        <CartProvider> 
            <BrowserRouter>
                  <div className="cont__principal">
                      <NavBar />
                      <Routes>
                          <Route path='/' element={ <ItemListContainer /> }/>
                          <Route path='/products/:itemId' element={ <ItemDetailContainer/> }/>
                          <Route path='/gender/:genderId' element={ <ItemListContainer/> }/>
                          <Route path='*' element={ <Ups/>} />
                          <Route path={'/cart'} element={ <Cart/>} />
                          <Route path={'/addproduct'} element={ <AddProduct/>} />
                          <Route path={'/contact'} element={ <Contact/>} />
                      </Routes>
                      <Footer />
                  </div>
            </BrowserRouter>
      </CartProvider> 
    );
}

export default App;



           
/* Componentes a Agregar:

                  <Route path='/login' element={ <Login/>} />
                  <Route path='/contacto' element={ <Contactos/>} />
                  <Route path='/team' element={ <Team/>} />
*/
