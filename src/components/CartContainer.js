import { useContext} from "react";
import { CartContext } from "../context/CartContext";
import Cart from "./Cart";
// import { Link } from "react-router-dom";

const CartContainer = () => {
    const {cart,cleanCart,totalInCart} = useContext(CartContext);

    // <div>
    //     <p>Carrito sin Productos</p>
    //     <Link to='/'>
    //     <button>Ir al Catalogo</button>
    //     </Link>
    // </div>

    return ( 
        <main className="cartContainer">
            <h2 className="cartContainer__titulo">Carro de compras</h2>
            <div className="cartContainer__productos">
                <h5>Productos</h5>
            </div>
            <div className="cartContainer__cant">
                <h5>Cantidad</h5>
            </div>
            <div className="cartContainer__unit">
                <h5>Precio Unitario</h5>
            </div>
            <div className="cartContainer__totalProd">
                <h5>Total Producto</h5>
            </div>
            <div className="cartContainer__cartContain">
                {cart.map((cart)=>(<Cart key={cart.id} cart={cart}/>))}
            </div>
            <div className="cartContainer__totalCarro">
                ${totalInCart}
            </div>
            <div className="cartContainer__botones">
                <button className="cartContainer__botones__btn" onClick={cleanCart} >Vaciar Carrito</button>
                <button className="cartContainer__botones__btn">Comprar</button>
            </div>
        </main>
    );
}

export default CartContainer;