

import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import CartProvider from './context/CartContext'
import CartContainer from './components/CartContainer';
// import { collection } from 'firebase/firestore';


function App() {
  // useEffect(() => {
  //   const productCollection=collection(db,'productos')
  //   const productos=[
  //     {name:'',
  //     image:'',
  //     consol:'',
  //     price:,
  //     stock:,
  //     category:'',
  //     screens:{a:'',b:'',c:''},
  //     text:''
  //     }
  //   ]
  // }, []);
  return (
    <div className="App">
      <header className="App-header">
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Bienvenido a Gamer House'/>}/>
            <Route path='/consol/:consolid' element={<ItemListContainer greeting='Bienvenido a Gamer House'/>}/>
            <Route path='/category/:id' element={<ItemListContainer greeting='Bienvenido a Gamer House'/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<CartContainer/>}/>
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