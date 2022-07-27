
// EN PROCESO DE CORRECCION

// import React, {useState} from 'react';
// import './ItemCount.css';

// function ItemCount({stock,initial,onAdd}) {
//     const [count, setCount] = useState(initial);

//     let increaseCount = () => {
//         if(stock<5){
//     setCount((count) => count + 1);}
//     };

//     let decreaseCount = () => {
//         if(stock>0){
//     setCount((count) => count - 1);}
//     };

//     return (
//         <div className="contador">
//             <p className='contador__parrafo'>Cantidad</p>
//             <div className='contador__cuenta'>
//                 <button className='contador__cuenta__menos' onClick={decreaseCount}>-</button>
//                 <span className='contador__cuenta__numero'>{count}</span>
//                 <button className='contador__cuenta__mas' onClick={increaseCount}>+</button>
//             </div>
//         </div>
//     );
// }

// export default ItemCount