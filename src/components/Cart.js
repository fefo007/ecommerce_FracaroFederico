import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const Cart = ({cart}) => {
    const {removeToCart} = useContext(CartContext);
    const totalProducto=cart.price*cart.quantity

    return ( 
            <section className="cart">
                <div className="cart__productos">
                    <img height='100' alt={cart.name} src={cart.image}></img>
                    <p>{cart.name}</p>
                </div>
                <div className="cart__cant">
                    {cart.quantity}
                </div>
                <div className="cart__unit">
                    ${cart.price}
                </div>
                <div className="cart__totalProd">
                    ${totalProducto}
                </div>
                <div className="cart__botonQuitar">
                    <button className="cart__botonQuitar__btn" onClick={()=>removeToCart(cart.id)}>Quitar producto</button>
                </div>
            </section>
        );
}

export default Cart;
