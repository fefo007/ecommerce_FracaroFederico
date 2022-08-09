
import { useContext } from 'react';
import CarLogo from '../complements/Logos/carrito.webp'
import { CartContext } from '../context/CartContext';


const CartWidget= ()=>{
    const {quantityInCart} = useContext(CartContext);
    console.log(quantityInCart)
    
    return(
        <div>
            <img src={CarLogo}  height='20' alt="logo" />
            <span>{quantityInCart}</span>
        </div>
    )
}
export default CartWidget;