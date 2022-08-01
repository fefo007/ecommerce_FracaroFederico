import './ItemListContainer.css'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { mock } from './utility/apiSimulator';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = ({greeting})=>{
    const [items, setItems] = useState([]);
    const [Loading,setLoading]=useState(true)
    useEffect(() => {
        mock()
        .then(data => {
            setItems(data)})
        .catch((error)=>
            console.error(error))
        .finally(()=>setLoading(false))
        }, []);

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