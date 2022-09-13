import { AUTH , DB } from '../FirebaseAPI/Config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { collection, doc, query, getDocs, setDoc, where } from 'firebase/firestore';
import { createContext , useContext} from "react"
import { useState } from 'react'


export const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}


const AuthContextProvider = ({children}) => {
    
    const [login, setLogin ] = useState(false)
    const [ user, setUser ] = useState(null)
    const [ userInfo, setUserInfo ] = useState('')
    const [ userData, setUserData ] = useState('')
    
    

    const registUsuario = async(email, password, nombre, apellido, telefono, direccion) =>{
          const inforegistro = await createUserWithEmailAndPassword(AUTH, email, password)
                      .then((usuarioFirebase) => {
                          return usuarioFirebase
                      })
                      .catch((error) =>{
                          alert("Error usuario ya existente", error )
                      })            
                          
          const docuRef = doc(DB , `InfoUsuarios/${inforegistro.user.uid}` )             
          setDoc(docuRef , {id: inforegistro.user.uid, correo: email, password: password, nombre: nombre, apellido: apellido, telefono: telefono, direccion: direccion})                
          alert("Se a creado correctamente su usuario") 
    }

    const LogInCuenta = (email, password) => {
        const infouser = signInWithEmailAndPassword(AUTH, email, password)
                    .then((resp) => {
                        // Signed in
                        setUser(resp)
                        setLogin(true) 
                    })
                    .catch((error) =>{
                        alert("Error usuario o contraseña Incorrecta", error )
                    })
                    .finally(() =>{
                        let flagTemp = false;
                        let emailTemp = '';
                        for(let i=0; i <= email.length; i++){
                            if(email[i] !== '@' && flagTemp !== true){
                                emailTemp = emailTemp + email[i]; 
                            } else {
                                flagTemp = true;
                            }
                        }
                        getUserdata(email)
                        setUser(email)
                        setUserInfo(emailTemp)
                    })

    }

    const getUserdata = async (value) =>{

        console.log("Entre a la funcion===>" + value )

        const consulta = query( collection(DB, 'InfoUsuarios'), where('correo','==',value));
        
      
        getDocs(consulta)
            .then(snapshot => {
                 // es posible usar snapshot.size para ver si se encontraron elementos
                 if (snapshot.size === 0) {
                 console.log('No se encontraron productos');
                     return;
                 }
                 snapshot.docs.map((rawDoc) => {
                         setUserData({...rawDoc.data()})
                 });
                 }, error => { console.log("Ups algo salio mal ===>", error)});
    }

    const logout = () =>{
            setLogin(false)
            setUser(null)
            setUserInfo('')
            setUserData('')
    }


    return(
        <AuthContext.Provider value={{user, userInfo, login, registUsuario, LogInCuenta, logout, userData}}>

            { children }

        </AuthContext.Provider>
    )


}

export default AuthContextProvider

