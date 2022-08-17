import { useNavigate } from "react-router-dom";
import  dondeEstoy from '../../Imagenes/Ups.jpg'

const Ups = () => {

    const navi = useNavigate()

    const volver = () => {
        navi(-1)
    }

    return(


        <div>

            <img src={ dondeEstoy }></img>
            <input type="button" value="Volver" onClick={volver}></input>            
        </div>
    )
}

export default Ups;