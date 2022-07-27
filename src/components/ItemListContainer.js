import './ItemListContainer.css'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import assassins from '../complements/Image/assassinsCreed.webp'
import callisto from '../complements/Image/callistocoleccion.webp'
import elden from '../complements/Image/eldenRing.webp'
import farCry from '../complements/Image/farcry6Xbox.webp'
// import ItemCount from './ItemCount';



const products = [
    {id:0,name:'Assassins Creed Valhala',console:'PlayStation',price:'$12000',image:`${assassins}`},
    {id:1,name:'The Callisto Protocol',console:'PC',price:'$20000',image:`${callisto}`},
    {id:2,name:'Elden Ring',console:'PlayStation',price:'$12000',image:`${elden}`},
    {id:3,name:'Far Cry 6',console:'Xbox',price:'$12000',image:`${farCry}`}]
    

const mock=()=>{
    const task = new Promise ((resolve)=>{
        setTimeout(()=>resolve(products),2000)
    })
    return task
}

const ItemListContainer = ({greeting})=>{
    const [items, setItems] = useState([]);
    useEffect(() => {
        mock()
        .then(data => {
            console.log(data)
            setItems(data)})
            }, []);
    return(
        <div className="saludo__titulo">
            <h2>
                {greeting}
            </h2>
            {/* <div>
                <ItemCount stock={6} imitial={1}/>
            </div> */}
            <div className='ItemListContainer'>
                <ItemList items={items}/>
            </div>
        </div>
    )
}

export default ItemListContainer;