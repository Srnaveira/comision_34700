import './App.css'
import CartProvider from './Context/CartContext';
import AuthContextProvider from './Context/AuthContext';
import AppRouter from './Routes/AppRoutes'
function App() {
  
  
    return (
        <AuthContextProvider>
              <CartProvider>            
                  <AppRouter />
              </CartProvider>
        </AuthContextProvider>
    );
  }
  
  export default App;



           
/* Componentes a Agregar:

                  <Route path='/login' element={ <Login/>} />
                  <Route path='/team' element={ <Team/>} />
*/


