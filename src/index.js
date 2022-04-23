import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./redux/store";
import {Provider} from 'react-redux'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import CartPage from './cart';
import CheckoutPage from './checkout';
import Purchase from './purchase';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>  
      <Route exact path="/" element={<App/>}/>
        <Route exact path="/cart" element={<CartPage/>}/>
        <Route exact path="/checkout" element={<CheckoutPage/>}/>
        <Route exact path="/purchase" element={<Purchase/>}/>
      </Routes>
      </BrowserRouter>
    
  </Provider>
);

