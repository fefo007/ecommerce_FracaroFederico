import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import {useParams} from 'react-router-dom'
import { getFirestore,doc,getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState();
    const [Loading,setLoading]=useState(true)   
    const {id}=useParams()

    useEffect(() => {
        const db=getFirestore()
        const producRef=doc(db,'productos',id)
        getDoc(producRef)
        .then((snapshot)=>{
            setItem({...snapshot.data(),id:snapshot.id})
        })
        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>{
            setLoading(false)
        })
        }, [id]);
        
    return ( 
        <div className="itemdetailContainer">
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