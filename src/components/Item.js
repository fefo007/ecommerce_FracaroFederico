import {Button,Card} from 'react-bootstrap';


const Item = ({item}) => {

    return ( 
        <Card className='item' style={{ width: '18rem' }}>
        <Card.Img height={350} src={item?.image} />
        <Card.Body>
            <Card.Title>{item?.name}</Card.Title>
            <Card.Text>
                {`${item?.price}
                ${item?.console}`}
            </Card.Text>
                <Button variant="primary">Ver Detalle</Button>
            </Card.Body>
        </Card>
        );
}

export default Item;