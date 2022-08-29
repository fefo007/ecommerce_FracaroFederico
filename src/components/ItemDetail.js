import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { ToastContainer, toast } from 'react-toastify';
import { Flip} from 'react-toastify';
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
            theme: "colored"
            });
    }
    const handleAdd=(quantityToAdd)=>{
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
    <>{!item.name?
    <section className="itemDetail">
        <h2 className="itemDetail__title">Item no existente</h2>
        <Link className="itemDetail__aside__butonsB" to='/'>
            <button className="itemDetail__aside__butons__buy">Ir al Catalogo</button>
        </Link>
    </section>
    :
    <section className="itemDetail">
        <h3 className="itemDetail__title">{item?.name}</h3>
        <img className="itemDetail__image" height={350} src={item?.image} alt={item?.name} />
        <h2 className="itemDetail__subtitle1">Screenshots</h2>
        <div className="itemDetail__screens">
            <img className="itemDetail__screens__img" height={250} src={item?.screens[0].a} alt={item?.name}/>
            <img className="itemDetail__screens__img" height={250} src={item?.screens[1].b} alt={item?.name}/>
            <img className="itemDetail__screens__img" height={250} src={item?.screens[2].c} alt={item?.name}/>
        </div>
        <h2 className="itemDetail__subtitle2">Descripcion</h2>
        <div className="itemDetail__text">
            <p>{item?.text}</p>
        </div>
        <aside className="itemDetail__aside">
            <div className="itemDetail__aside__price">
                ${item?.price}
            </div>
            <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
            <div className="itemDetail__aside__butons" hidden={hideButom}>
                <button className="itemDetail__aside__butons__buy"  onClick={goToCart}>Comprar</button>
                <button className="itemDetail__aside__butons__return"  onClick={returnHome}>Continuar Comprando</button>
            </div>
        </aside>
        <ToastContainer transition={Flip} />
    </section>
    }</>
    );
}

export default ItemDetail;