import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Cart from "./Cart";

const CartContainer = () => {
    const {cart,cleanCart} = useContext(CartContext);
    return ( 
        <main>
            <h2>Carro de compras</h2>
            <div>
                {cart.map((cart)=>(<Cart key={cart.id} cart={cart}/>))}
            </div>
            <div>
                <button onClick={cleanCart} >Vaciar Carrito</button>
                <button>Comprar</button>
            </div>
        </main>
    );
}

export default CartContainer;