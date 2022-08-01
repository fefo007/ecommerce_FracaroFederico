import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getItem } from "./utility/apiSimulator";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer = () => {
    const [item, setItem] = useState();
    const [Loading,setLoading]=useState(true)
    useEffect(() => {
        getItem()
        .then(product => {
            setItem(product)})
        .catch((error)=>
            console.error(error))
        .finally(()=>setLoading(false))
        }, []);
        
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