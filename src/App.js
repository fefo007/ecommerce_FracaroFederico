

import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import CartProvider from './context/CartContext'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Bienvenido a Gamer House'/>}/>
            <Route path='/consol/:consol' element={<ItemListContainer greeting='Bienvenido a Gamer House'/>}/>
            <Route path='/category/:category' element={<ItemListContainer greeting='Bienvenido a Gamer House'/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='*' element={<ItemListContainer greeting='Bienvenido a Gamer House'/>}/>
          </Routes>
        </CartProvider>
        <Footer/>
      </header>
    </div>
  );
}

export default App;