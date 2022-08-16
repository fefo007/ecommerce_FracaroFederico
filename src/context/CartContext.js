import { createContext, useState } from "react";


export const CartContext = createContext({});


const CartProvider=({children})=>{
    const [cart, setCart] = useState([]);

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
    // QUITAR PRODUCTO DEL CARRITO
    const removeToCart=(idItem)=>{
        const cartDraft =[...cart]
        const itemToRemove=cart.find((itemToRemove)=>itemToRemove.id===idItem)
        const index=cart.indexOf(itemToRemove)
        cartDraft.splice(index,1)
        setCart(cartDraft)
        
    }
    let totalInCart=0
    cart.forEach((item)=>{totalInCart+=(item.quantity*item.price)})

    let quantityInCart=0
    cart.forEach((item)=>{quantityInCart+=item.quantity})
    // SEGUNDA FORMA
    // const quantityInCart= cart.reduce((previus,item)=>previus + item.quantity, 0)
    const contextValue ={cart,cleanCart,addToCart,removeToCart,quantityInCart,totalInCart}
    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider