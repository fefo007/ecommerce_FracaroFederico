import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({item}) => {

    const [hideButom,setHideButom]=useState(true)
    const {addToCart} = useContext(CartContext);
    const navTo=useNavigate()
    const [count, setCount] = useState(0);
    const toastInfo = ()=>{
        toast.success('Agregado al carrito', {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    const handleAdd=(quantityToAdd)=>{
        console.log('handleAdd',quantityToAdd)
        setCount(quantityToAdd)
        addToCart(item,quantityToAdd)
        setHideButom(false)
        toastInfo()
    }   
    const goToCart = ()=>{
        navTo('/cart')
    }
    const returnHome = ()=>{
        navTo('/')
    }
useEffect(()=>{
    console.log(count)
},[count])

return ( 
    <section className="itemDetail">
        <h3 className="itemDetail__title">{item?.name}</h3>
        <img className="itemDetail__image" height={350} src={item?.image} alt='assassinsCreedVal' />
        <h2 className="itemDetail__subtitle1">Screenshots</h2>
        <div className="itemDetail__screens">
            <img className="itemDetail__screens__img" height={250} src={item?.screen.a} alt='assassinsA'/>
            <img className="itemDetail__screens__img" height={250} src={item?.screen.b} alt='assassinsB'/>
            <img className="itemDetail__screens__img" height={250} src={item?.screen.c} alt='assassinsC'/>
        </div>
        <h2 className="itemDetail__subtitle2">Sinopsis</h2>
        <div className="itemDetail__text">
            <p>{item?.text}</p>
        </div>
        <aside className="itemDetail__aside">
            <div className="itemDetail__aside__price">
                {item?.price}
            </div>
            <ItemCount stock={6} initial={1} onAdd={handleAdd} />
            <div className="itemDetail__aside__butons" hidden={hideButom}>
                <button className="itemDetail__aside__butons__buy"  onClick={goToCart}>Comprar</button>
                <button className="itemDetail__aside__butons__return"  onClick={returnHome}>Continuar Comprando</button>
            </div>
        </aside>
        <ToastContainer />
    </section>
    );
}

export default ItemDetail;