import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Flip} from 'react-toastify';

const Contact = () => {
    const navigate=useNavigate()
    const handleMessenger=()=>{
        toast.success(`Gracias por su mensage
                        en breve nos contactaremos
                        redireccionando....`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
            });
            setTimeout(()=>navigate('/'),3800)
            
    }

    return (
        <>
        <Form className='contacto'>
            <Form.Group className="mb-5 contacto__form" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"  placeholder="nombre@ejemplo.com" />
            </Form.Group>
            <Form.Group className="mb-3 contacto__text" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Escriba su consulta</Form.Label>
                <Form.Control as="textarea" rows={6} />
            </Form.Group>
            <Button className='contacto__btn' variant="primary" onClick={handleMessenger}>Enviar</Button>
        </Form>
        <ToastContainer transition={Flip} />
        </>
    );
}

export default Contact;