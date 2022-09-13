import { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import  './login.scss'

const Login = () => {

    const { LogInCuenta } = useContext(AuthContext)
    const [email, setEmail ] = useState('')
    const[ password, setPassword] = useState()

    const capturarEmail = (e) =>{
            setEmail(e.target.value)
        }

    const capturarPass = (e) =>{
            setPassword(e.target.value)
        }

    const handleSubmit = (e) =>{
        e.preventDefault()
        LogInCuenta(email, password)
    }



    return(
        <div className="formulario__Login">
            <form className="formulario__Login--objetos" onSubmit={handleSubmit}>
                <label className="LoginTitulo">INGRESAR</label>
                <input 
                    className="email"
                    type={'email'}
                    value={email}
                    placeholder={'Ingrese su E-mail'}
                    onChange={capturarEmail}
                />
                <input
                    className="password"
                    placeholder={'Ingrese su Password'}
                    type={'password'}
                    value={password}
                    onChange={capturarPass}
                />
                <button
                    className="buttonSubmit" type="submit">INGRESAR</button>
            </form>
        </div>


    )

}

export default Login