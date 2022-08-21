
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const BuyForm = () => {
    const {cart,totalInCart,cleanCart}=useContext(CartContext);
    const [orderid,setOrderid]=useState('')
    const [buyer,setBuyer]=useState({})
    const [formError1,setFormError1]=useState(true)
    const [formError2,setFormError2]=useState(true)

    
    const buyerData=(e)=>{
    setBuyer({
        ...buyer,
        [e.target.name]: e.target.value,
    })
}
    const buy=(e)=>{
        e.preventDefault()
        if(Object.values(buyer).length!==3){
            setFormError1(false)
        }
        else if(e.target.email.value!==e.target.confirmemail.value){
            setFormError2(false)
        }
        else{
        const db=getFirestore()
        const buyerOrder=collection(db,'ordenComprador')
        addDoc(buyerOrder,{
            buyer,
            items:cart,
            total:totalInCart,
            fecha:serverTimestamp(),
        })
        .then((res)=>{
            setOrderid(res.id)
            cleanCart()
        })
        .catch((error)=>console.log(error))}
    }
    return ( 
        <>
        {orderid
        ?
        <div>
            <h3>Gracias por la compra</h3>
            <h4>su N° de orden es:{orderid}</h4>
        </div>
        :
        <form className='formulario' onSubmit={buy}>
            <p className='formulario__errores' hidden={formError1}>Complete todos los campos</p>
            <input className='formulario__campos'  type='text' pattern="[A-Za-z]{1,15}"  placeholder='Nombre' name='name'onChange={buyerData}/>
            <input className='formulario__campos'  type='text' pattern="[A-Za-z]{1,15}"  placeholder='Apellido' name='surname'onChange={buyerData}/>
            <input className='formulario__campos'  type='email' placeholder='Email' name='email' onChange={buyerData}/>
            <input className='formulario__campos'  type='email' placeholder='Confirmar Email' name='confirmemail' />
            <p className='formulario__errores' hidden={formError2}>los emails deben ser iguales</p>
            <button className='formulario__boton'  type="submit">Finalizar</button>
        </form>}
        </>
    );
}

export default BuyForm;