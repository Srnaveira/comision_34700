import '../App.css';
import NavBar  from '../Components/NavBar/NavBar';
import ItemDetailContainer from '../Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer';
import Ups from '../Components/Ups/Ups';
import Cart from '../Components/Cart/Cart';
import Contact from '../Components/Contact/Contact';
import OrderContainer from '../Components/OrderContainer/OrderContainer';
import Footer from '../Components/Footer/Footer';
import { Routes, Route } from 'react-router-dom'

const PrivateRoute = () =>{

    return(
        <div className="cont__principal">
            <NavBar/>
            <Routes>
                  <Route path='/' element={ <ItemListContainer/> }/>
                  <Route path='/products/:itemId' element={ <ItemDetailContainer/> }/>
                  <Route path='/gender/:genderId' element={ <ItemListContainer/> }/>
                  <Route path='*' element={ <Ups/>} />
                  <Route path={'/cart'} element={ <Cart/>} />
                  <Route path={'/contact'} element={ <Contact/>} />
                  <Route path={'/orders'} element={ <OrderContainer/>} />
            </Routes>
            <Footer />
        </div>
    )

}

export default PrivateRoute
