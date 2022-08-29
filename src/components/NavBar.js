
import { Container, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import './NavBar.css'
import nintendoLogo from '../complements/Logos/nintendoLogo.webp'
import pcLogo from '../complements/Logos/pcLogo.webp'
import playLogo from '../complements/Logos/playLogo.webp'
import exboxLogo from '../complements/Logos/exboxLogo.webp'
import CartWidget from './CartWidget';
import GamerHouseLogo from '../complements/Logos/gamerLogo.png'
import { LinkContainer } from 'react-router-bootstrap'
import { Link} from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'



function NavBar() {
  const {setSearch} = useContext(CartContext);
  const handleSearch =(e)=>{
    const searchVal=e.target.value
    console.log(searchVal)
    setSearch(searchVal)
  }
  const searchNav=(e)=>{
    if(e.key==='Enter'){
      e.preventDefault()
    }
  }

  return (
    <div className='navbarContainer'>
    <div className='navbarContainer__logo'>
      <Link to='/'>
        <img height='80' src={GamerHouseLogo} alt='GamerLogo' />
      </Link>
    </div>
    <Navbar className='navbarContainer__nav' variant='dark' expand="lg">
      <Container  id='barraNav' fluid>
        <Navbar.Brand >
          <Link className='cartWidget' to='/cart'>
          <CartWidget />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown  title="Categorias" id="navbarScrollingDropdown">
              <LinkContainer to='/category/Accesorio'>
                <NavDropdown.Item >
                  Accesorios
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/category/Consola'>
                <NavDropdown.Item >
                  Consolas
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/category/GiftCard'>
                <NavDropdown.Item >
                  Gift Cards
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/category/VideoJuego'>
                <NavDropdown.Item >
                  Video Juegos
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown  title="Plataforma" id="navbarScrollingDropdown">
              <LinkContainer to='/consol/Nintendo'>
                <NavDropdown.Item >
                  Nintendo <img src={nintendoLogo} height='20' alt="logoNintendo" />
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/consol/PC'>
                <NavDropdown.Item >
                  PC <img src={pcLogo} height='20' alt="logoPc" />
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/consol/PlayStation'>
                <NavDropdown.Item >
                  Playstation <img src={playLogo} height='20' alt="logoPlay" />
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/consol/Xbox'>
                <NavDropdown.Item >
                  Xbox <img src={exboxLogo} height='20' alt="logoXbox" />
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
                <LinkContainer className='navContacto' to='/contact'>
                  <Nav.Link>
                    Contacto
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer className='navNosotros' to='/about'>
                  <Nav.Link>
                    Sobre Nosotros
                  </Nav.Link>
                </LinkContainer>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              onChange={handleSearch}
              onKeyDown={searchNav}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
}

export default NavBar;