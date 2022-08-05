
import { useContext } from 'react';
import CarLogo from '../complements/Logos/carrito.webp'
import { CartContext } from '../context/CartContext';


const CartWidget= ()=>{
    const contextValue = useContext(CartContext);
    console.log(contextValue)
    return(
        <div>
            <img src={CarLogo}  height='20' alt="logo" />
            <span>{contextValue.quantityInCart}</span>
        </div>
    )
}
export default CartWidget;