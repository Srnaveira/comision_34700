import productos from "./data"


const CargarProductos = () => {
        
    return new Promise((resolve, reject) =>{
            setTimeout(() =>{
                resolve(productos)
            }, 3000)
        })
}

export default CargarProductos;

