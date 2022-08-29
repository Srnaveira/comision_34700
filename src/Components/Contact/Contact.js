import './contact.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { DB } from '../../FirebaseAPI/Config';





const Contact = () =>{

    const [ values, setValues ] = useState({
        nombre: "",
        email: "", 
        comentario: "" 
    })

    const volver = useNavigate()

    const handlerBack = () => {
        volver('/')
    }

    const handledSubmit = async (evt) =>{
        evt.preventDefault()
        const newComent = {
            ...values
        };
        const newContact = await addDoc(collection(DB, 'Contacts'), newComent);
        
        alert('Se a enviado correctamente su consulta su N° de seguimiento es     :'+ newContact.id)
        handlerBack()
    }


    const captureValues = (value) =>{
        setValues({
            ...values,
            [value.target.name]: value.target.value
        })
    }




    return(
            <div className='formu'>
                <form className='formu__contacts' onSubmit={handledSubmit}>
                    <h1>Contacte con nosotros</h1>
                    <h4>Si desea hacernos llegar algún comentario, duda o sugerencia, puede utilizar el siguiente formulario.</h4>
                    <div className='formu__contacts--container'>
                        <label className='labeldetitulo'>
                            Nombre completo
                        </label>
                        <input
                            name='nombre'
                            type={'text'}
                            value={values.nombre}                    
                            onChange={captureValues}
                        />
                    </div>
                    <div className='formu__contacts--container'>
                        <label className='labeldeemail'>
                            E-mail
                        </label>
                        <input
                            name='email'
                            type={'text'}
                            value={values.email}                    
                            onChange={captureValues}                    
                        />
                    </div>
                    <div className='formu__contacts--container'>    
                        <label className='labeldecomentarios'>
                            Comentarios
                        </label>
                        <textarea
                            name='comentario'
                            type={'text'}
                            rows='25' 
                            cols='80'
                            value={values.comentario}                    
                            onChange={captureValues}

                        />
                    </div>
                    <div className='formu__contacts--button'>
                        <button className='buttonEnviar'>
                            Enviar                        
                        </button>
                    </div>
                </form>
            </div>
    );
}


export default Contact;