import { createContext, useState } from "react";
import {useLocalStorage} from "../customHooks/useLocalStorage"

export const CartContext = createContext({});



const CartProvider=({children})=>{
    const [cart, setCart] = useLocalStorage("carrito",[])
    // localStorage.setItem('carrito',JSON.stringify(cart))
    const [search,setSearch]=useState('')

    //     CARGAR CARRO EXISTENTE
    // if(cart!==[]&&cart!==null){
    // const storageRetrieve=JSON.parse(localStorage.getItem("carrito"))
    // setCart(storageRetrieve)
    // }
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
        localStorage.setItem('carrito',JSON.stringify(cart))
        const cartDraft =[...cart]
        const itemToRemove=cart.find((itemToRemove)=>itemToRemove.id===idItem)
        const index=cart.indexOf(itemToRemove)
        cartDraft.splice(index,1)
        setCart(cartDraft)
    }
    // SUMA TOTAL DE LOS PRODUCTOS DEL CARRO
    let totalInCart=0
    cart.forEach((item)=>{totalInCart+=(item.quantity*item.price)})
    // CATIDAD DE LOS ITEMS EN EL CARRO
    let quantityInCart=0
    cart.forEach((item)=>{quantityInCart+=item.quantity})
    // SEGUNDA FORMA
    // const quantityInCart= cart.reduce((previus,item)=>previus + item.quantity, 0)
    const contextValue ={cart,cleanCart,addToCart,removeToCart,quantityInCart,totalInCart,search,setSearch}
    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider