import { useContext, useState} from "react";
import { CartContext } from "../context/CartContext";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import emtyCart from '../emtyCart.jpg'
import BuyModal from "./BuyModal";

const CartContainer = () => {
    const {cart,cleanCart,totalInCart} = useContext(CartContext);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    return ( 
        <>
        {!cart.length?
            <div className="cartContainer">
                <h2 className="cartContainer__titulo">Carrito sin Productos</h2>
                <img className="cartContainer__imagen" src={emtyCart} alt='carro vacio'></img>
                <Link className="cartContainer__botones" to='/'>
                    <button className="cartContainer__botones__btn">Ir al Catalogo</button>
                </Link>
            </div>
        :
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
                <button className="cartContainer__botones__btn" onClick={handleShow}>Comprar</button>
            </div>
        </main>}
        <BuyModal show={show} setShow={setShow}/>
        </>
    
    );
}

export default CartContainer;