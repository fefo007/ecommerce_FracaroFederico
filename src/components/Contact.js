import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Contact = () => {
    return ( 
        <Form className='contacto'>
            <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="nombre@ejemplo.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Escriba su consulta</Form.Label>
                <Form.Control as="textarea" rows={6} />
            </Form.Group>
            <Button variant="primary">Enviar</Button>
        </Form>
    );
}

export default Contact;