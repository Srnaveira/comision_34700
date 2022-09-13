import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import { DB } from '../../FirebaseAPI/Config';
import './addproduct.scss'


const AddProduct = () => {

    const [ values, setValues ] = useState({
        titulo: "",
        autor: "", 
        genero: "",
        stock: "",
        precio: "",
        descuento: "",
        imagen: "",
        resumen: "" 
    })

    const handledSubmit = async (evt) =>{
        evt.preventDefault()

        const newProduct = {
            ...values
        };

    
        const newProductadd = await addDoc(collection(DB, 'Productos'), newProduct);
        
        console.log('>>---> newID: ', newProductadd.id)
    }


    const captureValues = (value) =>{
        setValues({
            ...values,
            [value.target.name]: value.target.value
        })
    }



    return(
            <div className='formulario'>
                <h1>Add Product</h1>
                <form className='formulario__productos' onSubmit={handledSubmit}>
                    <input
                        name="titulo"
                        placeholder="Ingrese el Titulo del Libro"
                        type={'text'}
                        value={values.titulo}
                        onChange={captureValues}                  
                    />
                    <input
                        name="autor"
                        placeholder="Ingrese el autor del Libro"
                        type={'text'}
                        value={values.autor}
                        onChange={captureValues}                       
                    />
                    <input
                        name="genero"
                        placeholder="Ingrese el Genero"
                        type={'text'}
                        value={values.genero}
                        onChange={captureValues}                    
                    />
                    <input
                        name="stock"
                        placeholder="Ingrese el Stock del producto"
                        type={'number'}
                        value={values.stock}
                        onChange={captureValues}                    
                    />
                    <input
                        name="precio"
                        placeholder="Ingrese el Precio del Libro"
                        type={'number'}
                        value={values.precio}
                        onChange={captureValues}                    
                    />                
                    <input
                        name="descuento"
                        placeholder="Ingrese el descuento del producto"
                        type={'number'}
                        value={values.descuento}
                        onChange={captureValues}
                    />
                    <input
                        name="imagen"
                        placeholder="Ingrese la url de la imagen"
                        type={'text'}
                        value={values.imagen}
                        onChange={captureValues}
                    />
                    <input
                        name="resumen"
                        placeholder="Ingrese el resumen del Libro"
                        type={'text'}
                        value={values.resumen}
                        onChange={captureValues}                   
                    />
                    <button>
                        Enviar
                    </button>
                </form>
            </div>
    );

}


export default AddProduct;