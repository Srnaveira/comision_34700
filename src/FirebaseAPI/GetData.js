import { collection, getDocs , getDoc, doc } from 'firebase/firestore'
import { DB } from "./Config"


export const getProducts = () => {
    return new Promise((resolve, reject) =>{
        const productosRef = collection(DB, "Productos")   
        resolve(getDocs(productosRef))
        })
}


export const getProdID = async ( id ) => {
            const docRef = doc(DB, "Productos", id);
            const datosSend = await getDoc(docRef);
            return datosSend;
        }   
