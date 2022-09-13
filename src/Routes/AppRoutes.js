import { BrowserRouter } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRotes';


const AppRoutes = () =>{

    const { login } = useContext(AuthContext)

    return(
        <>
            <BrowserRouter>
                {
                  login
                  ? <PrivateRoutes />
                  : <PublicRoutes />
                }
            </BrowserRouter>
        </>

    )


}
export default AppRoutes