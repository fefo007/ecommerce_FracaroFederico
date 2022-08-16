import './ItemListContainer.css'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
// import { mock } from './utility/apiSimulator';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import {useParams} from 'react-router-dom'
import {collection,getFirestore,getDocs,query,where} from 'firebase/firestore'

const ItemListContainer = ({greeting})=>{
    const [items, setItems] = useState([]);
    const [Loading,setLoading]=useState(true)
    // const {consol,category} =useParams()
    const {id}=useParams()
    
    useEffect(() => {
        const db=getFirestore()
        const productCollection=collection(db,'productos')
        if (id){
            const query1=query(productCollection,where('category','==',id))
            // const query2=query(productCollection,where('consol','==',id))
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
        else {
            getDocs(productCollection)
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
        },[id])
        // mock()
        // .then((data) => {
        //     if(consol)
        //         {setItems(data.filter((items)=>items.consol===consol))}
        //     else if(category)
        //         {setItems(data.filter((items)=>items.category===category))}
        //     else{setItems(data)
        //         console.log(data)}})
        // .catch((error)=>
        //     console.error(error))
        // .finally(()=>setLoading(false))
        // }, [consol,category]);

    return(
        <main className="main">
            <h2 className='main__titulo'>
                {greeting}
            </h2>
            <div className='ItemListContainer'>
                {Loading?<div>
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
                        </div>:<ItemList items={items}/>}
            </div>
        </main>
    )
}

export default ItemListContainer;