import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";



const ItemDetail = ({item}) => {
    const [hideButom,setHideButom]=useState(true)
    const {addToCart} = useContext(CartContext);
    const navToCart=useNavigate()
    const [count, setCount] = useState(0);
    console.log(item)
    const handleAdd=(quantityToAdd)=>{
        console.log('handleAdd',quantityToAdd)
        setCount(quantityToAdd)
        addToCart(item,quantityToAdd)
        setHideButom(false)
    }   
    const goToCart = ()=>{
        navToCart('/cart')
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
            <ItemCount stock={6} initial={0} onAdd={handleAdd} />
            <button className="itemDetail__aside__buy" hidden={hideButom} onClick={goToCart}>Comprar</button>
        </aside>
    </section>
    );
}

export default ItemDetail;