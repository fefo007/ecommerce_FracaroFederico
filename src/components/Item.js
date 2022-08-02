import {Button,Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Item = ({item}) => {

    return ( 
        
        <Card className='item' style={{ width: '18rem' }}>
            <Card.Img height={350} src={item?.image} />
            <Card.Body>
                <Card.Title>{item?.name}</Card.Title>
                <Card.Text>
                    {`${item?.price}
                    ${item?.consol}`}
                </Card.Text>
                <Link to={`/item/${item.id}`}>
                    <Button variant="primary">Ver Detalle</Button>
                </Link>
            </Card.Body>
        </Card>
        
        );
}

export default Item;