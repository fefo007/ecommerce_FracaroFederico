

import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenido a Gamer House'/>}/>
          <Route path='/consol/:consol' element={<ItemListContainer greeting='Bienvenido a Gamer House'/>}/>
          <Route path='/category/:category' element={<ItemListContainer greeting='Bienvenido a Gamer House'/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/contact' element={<h1>Contactenos</h1>}/>
          <Route path='/about' element={<h1>Sobre Nosotros</h1>}/>
          <Route path='*' element={<ItemListContainer greeting='Bienvenido a Gamer House'/>}/>
        </Routes>
        <Footer/>
      </header>
    </div>
  );
}

export default App;