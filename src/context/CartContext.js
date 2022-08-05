import { createContext, useState } from "react";


export const CartContext = createContext({});

const CartProvider=({children})=>{
    const [cart, setCart] = useState([]);
    console.log(cart.length)
    const isInCart=()=>{}
    // VACIAR POR COMPLETO CARRITO
    const cleanCart=()=>{
        setCart([])
    }
    // AGREGAR PRODUCTOS AL CARRITO
    const addToCart=(item,quantity)=>{
        const itemToAdd={...item,quantity:quantity}
        if(cart.length===0){
            setCart([itemToAdd])
        return
        }
        const duplicateItem=cart.findIndex((itemInCart)=>itemInCart.id===item.id)
            if(duplicateItem >=0){
                const updateItem={...item,quantity:cart[duplicateItem].quantity+quantity}
                // BORRADOR DEL CARRITO
                const cartDraft = [...cart]
                cartDraft[duplicateItem]=updateItem
                setCart(cartDraft)
            }
            else {
                const itemToAdd={...item,quantity:quantity}
                const cartDraft = [...cart,itemToAdd]
                setCart(cartDraft)
            }
    }

    const removeToCart=()=>{}
    
    const contextValue ={cart,isInCart,cleanCart,addToCart,removeToCart,quantityInCart:cart.length}
    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider