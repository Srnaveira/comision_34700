import Login from '../Components/Login/Login'
import NavBarUser from '../Components/NavBarUser/NavBarUser'
import CreateUser from '../Components/CreateUser/CreateUser'
import { Routes, Route } from 'react-router-dom'
import '../App.css';

const PublicRoute = () =>{

    return(
        <div className="cont__principal">
            <NavBarUser/>
            <Routes>
                  <Route path='/login' element={ <Login />} />
                  <Route path='/createuser' element={ <CreateUser />} />
                  <Route path='*' element={ <Login />} />
            </Routes>
        </div>
    )

}

export default PublicRoute
























