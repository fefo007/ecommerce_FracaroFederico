import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getItem } from "./utility/apiSimulator";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const [item, setItem] = useState();
    const [Loading,setLoading]=useState(true)
    const {id}=useParams()

    useEffect(() => {
        getItem(id)
        .then(product => {
            setItem(product.filter((item)=>item.id===parseInt(id))[0])})
        .catch((error)=>
            console.error(error))
        .finally(()=>setLoading(false))
        }, [id]);
        
    return ( 
        <div>
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
                    </div>:<ItemDetail item={item}/>}
        </div>
    );
}

export default ItemDetailContainer;