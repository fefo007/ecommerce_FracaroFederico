import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = ({cart}) => {
    const {removeToCart} = useContext(CartContext);
    const totalProducto=cart.price*cart.quantity
    console.log(cart)
    return ( 
                <section >
                    <div>
                        <h3>Productos</h3>
                        <div>{cart.image}</div>
                    </div>
                    <div>
                        <h3>Cantidad</h3>
                        <div>{cart.quantity}</div>
                    </div>
                    <div>
                        <h3>Precio Unitario</h3>
                        <div>{cart.price}</div>
                        <button onClick={()=>removeToCart(cart.id)}>Quitar producto</button>
                    </div>
                    <div>
                        <h3>Total Producto</h3>
                        <div>{totalProducto}</div>
                    </div>
                </section>
        );
}

export default Cart;
