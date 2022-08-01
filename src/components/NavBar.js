
import { Button, Container, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import './NavBar.css'
import nintendoLogo from '../complements/Logos/nintendoLogo.webp'
import pcLogo from '../complements/Logos/pcLogo.webp'
import playLogo from '../complements/Logos/playLogo.webp'
import exboxLogo from '../complements/Logos/exboxLogo.webp'
import CartWidget from './CartWidget';
import GamerHouseLogo from '../complements/Logos/gamerLogo.png'

function NavBar() {
  return (
    <div className='navbarContainer'>
    <div className='navbarContainer__logo'>
      <img height='80' src={GamerHouseLogo} alt='GamerLogo' />
    </div>
    <Navbar className='navbarContainer__nav' variant='dark' expand="lg">
      <Container  id='barraNav' fluid>
        <Navbar.Brand href="#"><CartWidget /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown  title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1">Accesorios</NavDropdown.Item>
              <NavDropdown.Item href="#action2">
                Consolas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">
                Gift Cards
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Video Juegos
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown  title="Plataforma" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1">Nintendo <img src={nintendoLogo} height='20' alt="logo" /></NavDropdown.Item>
              <NavDropdown.Item href="#action2">
              PC <img src={pcLogo} height='20' alt="logo" />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">
                Playstation <img src={playLogo} height='20' alt="logo" />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Xbox <img src={exboxLogo} height='20' alt="logo" />
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Contacto">Contacto</Nav.Link>
            <Nav.Link href="#Sobre Nosotros">Sobre Nosotros</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
}

export default NavBar;