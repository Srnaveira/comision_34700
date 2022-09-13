import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import './createuser.scss'

const CreateUser = () => {

    const { registUsuario } = useContext(AuthContext)

    const [ values, setValues ] = useState({
        nombre: "",
        apellido: "", 
        email: "",
        telefono: "",
        direccion: "",
        password: "",
        password2: ""
    })

    
    const volver = useNavigate()    

    const handlerback = () => {
        volver(-1)

    } 


    const handledSubmit = async (evt) =>{
        evt.preventDefault()

        
        if(values.password === values.password2){
           
            registUsuario( values.email, values.password, values.nombre, values.apellido, values.telefono, values.direccion );             
            
            setTimeout(() =>{

                handlerback()

            }, 1000)
                
        } else {
            alert("las passwords No concuerdan")
        }

    }
    

    const captureValues = (value) =>{
         setValues({
             ...values,
             [value.target.name]: value.target.value
         })
    }
    


    return(
        <div className="formulario__userCreate">
            <form className="formulario__userCreate__objetos" onSubmit={handledSubmit}>
                <label className="formulario__userCreate__objetos--titulo">CREAR CUENTA</label>
                <div className="formulario__userCreate__objetos__campos">
                    <div className="contenedorDatos"> 
                        <label className="contenedorDatos__label">Nombre:</label>
                        <input
                            className="contenedorDatos__input"
                            name="nombre"
                            type={'text'}
                            value={values.nombre}
                            placeholder={'Ingrese su Nombre'}
                            onChange={captureValues}
                            pattern="[a-zA-Z]{4,18}"
                            title="ingrese su Nombre este debe tener al menos 4 caracteres"
                            required
                        />
                    </div>
                    <div className="contenedorDatos">
                        <label className="contenedorDatos__label">Apellido:</label>
                        <input
                            className="contenedorDatos__input"
                            name="apellido"
                            type={'text'}
                            pattern="[a-zA-Z]{4,18}"
                            value={values.apellido} 
                            placeholder={'Ingrese su Apellido'}
                            title="ingrese su Apellido este debe tener al menos 4 caracteres"
                            onChange={captureValues}
                            required
                        />
                    </div>
                    <div className="contenedorDatos">
                        <label className="contenedorDatos__label">Email:</label>
                        <input 
                            className="contenedorDatos__input"
                            name="email"
                            type={'email'}
                            value={values.email}
                            placeholder={'Ingrese su E-mail'}
                            onChange={captureValues}
                            required
                        />
                    </div>
                    <div className="contenedorDatos">
                        <label className="contenedorDatos__label">Telefono:</label>
                        <input 
                            className="contenedorDatos__input"
                            name="telefono"
                            type="tel"
                            value={values.telefono}
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{4}-[0-9]{4}"
                            title="ingrese su numero completo con pais y codigo de Area"
                            placeholder={'054-11-3054-2022'}
                            onChange={captureValues}
                            required
                        />
                    </div>
                    <div className="contenedorDatos">
                        <label className="contenedorDatos__label">Direccion:</label>
                        <input 
                            className="contenedorDatos__input"
                            name="direccion"
                            type={'direccion'}
                            value={values.direccion}
                            placeholder={'Ingrese su Direccion'}
                            onChange={captureValues}
                            required
                        />
                    </div>
                    <div className="contenedorDatos">           
                        <label className="contenedorDatos__label">Password:</label>
                        <input
                            className="contenedorDatos__input"
                            name="password"
                            placeholder={'Ingrese su Password'}
                            type={'password'}
                            value={values.password}
                            onChange={captureValues}
                            pattern="[0-9a-zA-Z]{8,20}"
                            title="su passwod debe tener al menos 8 caracteres"
                            required                   
                        />
                    </div>
                    <div className="contenedorDatos">
                        <label className="contenedorDatos__label">Password:</label>
                        <input
                            className="contenedorDatos__input"
                            name="password2"
                            placeholder={'Ingrese nuevamente su Password'}
                            type={'password'}
                            value={values.password2}
                            pattern="[0-9a-zA-Z]{8,20}"
                            title="su passwod debe ser el mismo al antes ingresado"
                            onChange={captureValues}
                            required

                        />
                    </div>
                    <div className="contenedorbuttom">
                        <button
                            className="buttonSubmit" type="submit">
                                CREAR CUENTA
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )





}

export default CreateUser