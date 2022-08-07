import {useState} from 'react'
import './itemcount.scss'


const ItemCount = ({ initiation,  stock, onAdd}) => {

    const [number, SetNumber] = useState(initiation)

    const handlerAdd = () =>{
        if(number < stock) {
            SetNumber(number + 1)
        } else {

        }
    }

    const handlerSubstraction = () =>{
        if(number !== initiation){
            SetNumber(number - 1)
        } else {

        }    

    }


    return(
        <div className='container'>
            <div className='container__count'>
                <button className='container__count--substraction' onClick={handlerSubstraction} disabled={initiation === number}> 
                 -
                </button>
                <span className='container__count--cant'>
                    {number}
                </span>
                <button className='container__count--add' onClick={handlerAdd} disabled={stock === number}> 
                 +
                </button>
            </div>
            <button className='container__button' onClick={() =>{onAdd(number)}}>COMPRAR</button>
        </div>
    );
}


export default ItemCount