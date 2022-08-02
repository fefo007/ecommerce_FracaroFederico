import instagram from '../complements/Logos/insta.png'
import facebook from '../complements/Logos/face.png'
import twiter from '../complements/Logos/twit.png'


const Footer = () => {
    return ( 
        <footer className='footer'>
            <div className='footer__redes'>
                <img src={instagram} height='60' alt="logoInsta"/>
                <img src={facebook} height='60' alt="logoFace"/>
                <img src={twiter} height='60' alt="logoTwit"/>
            </div>
            <div className='footer__texto'>
                <p>WhatsApp:+54-9-223-5570129 Direccion:San Martin 2550</p>
                <p>Copyright todos los derechos reservados</p>
            </div>
        </footer>
    );
}

export default Footer;