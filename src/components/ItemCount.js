
import React, {useState} from 'react';


function ItemCount({stock,initial,onAdd}) {
    const [count, setCount] = useState(initial);
    const increaseCount = () => {
        if(count<stock){
    setCount((count) => count + 1);}
    };

    const decreaseCount = () => {
        if(count>initial){
    setCount((count) => count - 1);}
    };

    return (
        <div className="contador">
            <p className='contador__parrafo'>Cantidad</p>
            <div className='contador__cuenta'>
                <button className='contador__cuenta__menos' onClick={decreaseCount}>-</button>
                <span className='contador__cuenta__numero'>{count}</span>
                <button className='contador__cuenta__mas' onClick={increaseCount}>+</button>
            </div>
            <button className='botonAgregarCarro' onClick={()=>onAdd(count)}>+ Carrito</button>
        </div>
    );
}

export default ItemCount