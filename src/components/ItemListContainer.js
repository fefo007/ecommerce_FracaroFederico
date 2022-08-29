import './ItemListContainer.css'
import ItemList from './ItemList';
import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import {useParams} from 'react-router-dom'
import {collection,getFirestore,getDocs,query,where,limit} from 'firebase/firestore'
import { CartContext } from '../context/CartContext';


const ItemListContainer = ({greeting})=>{
    const {search} = useContext(CartContext);
    const [items, setItems] = useState([]);
    const [Loading,setLoading]=useState(true)
    const {id,consolid}=useParams()
    const [current,setCurrent]=useState(0)
    const [hiddenPagPrev,sethiddenPagPrev]=useState(true)
    
    useEffect(() => {
        const db=getFirestore()
        const productCollection=collection(db,'productos')
        const currentCondition=current+8
        if (id){
            const query1=query(productCollection,limit(currentCondition),where('category','==',id))
            getDocs(query1)
            .then((snapshot)=>{
                setItems(snapshot.docs.map((doc)=>({...doc.data(),id:doc.id})))
            })
            .catch((error)=>{
                console.log(error);
            })
            .finally(()=>{
                setLoading(false)
            })
        }
        else if(consolid){
            const query2=query(productCollection,limit(currentCondition),where('consol','==',consolid))
            getDocs(query2)
            .then((snapshot)=>{
                setItems(snapshot.docs.map((doc)=>({...doc.data(),id:doc.id})))
            })
            .catch((error)=>{
                console.log(error);
            })
            .finally(()=>{
                setLoading(false)
            })
        }
        else if(search){
            const query3=query(productCollection,where('name','==',search.toUpperCase()))
            getDocs(query3)
            .then((snapshot)=>{
                setItems(snapshot.docs.map((doc)=>({...doc.data(),id:doc.id})))
            })
            .catch((error)=>{
                console.log(error);
            })
            .finally(()=>{
                setLoading(false)
            })
        }
        else {
            const query4=query(productCollection,limit(currentCondition),)
            getDocs(query4)
            .then((snapshot)=>{
                setItems(snapshot.docs.map((doc)=>({...doc.data(),id:doc.id})))

            })
            .catch((error)=>{
                console.log(error);
            })
            .finally(()=>{
                setLoading(false)
            })
        }

        },[id,consolid,search,current])

        const handleNext=()=>{
            current<items.length-7
            &&
            setCurrent((current)=>current+8)
            sethiddenPagPrev(false)
        }
        
        const handlePrev=()=>{
            current>0
            ?
                setCurrent((current)=>current-8)
            :
                sethiddenPagPrev(true)
        }
    return(
        <main className="main">
            <h2 className='main__titulo'>
                {greeting}
            </h2>
            <div className='ItemListContainer'>
                {Loading
                ?
                <div>
                    <>
                        <Button variant="primary" disabled>
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                />
                            Loading...
                        </Button>
                    </>
                </div>
                :
                <>
                    <ItemList items={items}/>
                    <div className='pagination'>
                        <Button className='pagination__btn'onClick={handlePrev}hidden={hiddenPagPrev}>- Productos</Button>
                        <Button className='pagination__btn'onClick={handleNext}>+ Productos</Button>
                    </div>
                </>
                }
            </div>
        </main>
    )
}

export default ItemListContainer;