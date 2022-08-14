
import { useContext } from 'react';
import CarLogo from '../complements/Logos/carrito.webp'
import { CartContext } from '../context/CartContext';


const CartWidget= ()=>{
    const {quantityInCart} = useContext(CartContext);

    if(quantityInCart===0){
        return <></>
    }
    return(
        <div>
            <img src={CarLogo}  height='20' alt="logo" />
            <span>{quantityInCart}</span>
        </div>
    )
}
export default CartWidget;