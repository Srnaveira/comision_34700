import {useState} from 'react'
import './itemcount.scss'


const ItemCount = ({Initiation,  stock, ondAdd}) => {

    const [number, SetNumber] = useState(Initiation)

    const handlerAdd = () =>{
        if(number < stock) {
            SetNumber(number + 1)
        } else {

        }
        

    }

    const handlerSubstraction = () =>{
        if(number !== Initiation){
            SetNumber(number - 1)
        } else {

        }    

    }


    return(
        <div className='container'>
            <div className='container__count'>
            <button className='container__count--substraction' onClick={handlerSubstraction} disabled={Initiation === number}> 
             -
            </button>
            <span className='container__count--number'>
                {number}
            </span>
            <button className='container__count--add' onClick={handlerAdd} disabled={stock === number}> 
             +
            </button>
            </div>
            <button className='container__button' onClick={() =>{ondAdd(number)}}>COMPRAR</button>
        </div>
    );
}


export default ItemCount