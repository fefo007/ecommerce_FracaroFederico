
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BuyForm from './BuyForm';


const BuyModal=({show,setShow})=>{
    const handleClose = () => setShow(false);

return (
    <>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
    >
        <Modal.Header className='modal__header' closeButton>
            <Modal.Title>Ingrese sus Datos</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal__body'>
            <BuyForm/>
        </Modal.Body>
        <Modal.Footer className='modal__footer'>
            <Button className='modal__footer__button' variant="secondary" onClick={handleClose}>
                Cerrar
            </Button>
        </Modal.Footer>
        </Modal>
    </>
);
}

export default BuyModal