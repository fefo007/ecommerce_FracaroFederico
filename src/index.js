import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import "./components/Item.css";
import './components/ItemDetail.css'
import './components/Footer.css';
import './components/ItemCount.css';
import './components/Contact.css'
import './components/About.css'
import './components/CartContainer.css'
import './components/Cart.css'
import './components/BuyModal.css'
import './components/BuyForm.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhISuUCDG_D3ASir3CMajJphggtpkLoPE",
  authDomain: "gamer-house-ecommerce.firebaseapp.com",
  projectId: "gamer-house-ecommerce",
  storageBucket: "gamer-house-ecommerce.appspot.com",
  messagingSenderId: "66992498487",
  appId: "1:66992498487:web:28db4b125e80cee3771cb2"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='https://fefo007.github.io/ecommerce_FracaroFederico'>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
