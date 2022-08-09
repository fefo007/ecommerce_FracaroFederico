import './ItemListContainer.css'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { mock } from './utility/apiSimulator';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import {useParams} from 'react-router-dom'

const ItemListContainer = ({greeting})=>{
    const [items, setItems] = useState([]);

    const [Loading,setLoading]=useState(true)
    const {consol,category} =useParams()

    
    useEffect(() => {
        mock()
        .then((data) => {
            if(consol)
                {setItems(data.filter((items)=>items.consol===consol))}
            else if(category)
                {setItems(data.filter((items)=>items.category===category))}
            else{setItems(data)
                console.log(data)}})
        .catch((error)=>
            console.error(error))
        .finally(()=>setLoading(false))
        }, [consol,category]);

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