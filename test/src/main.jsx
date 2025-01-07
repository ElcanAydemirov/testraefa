import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Wishlist from './context/wishlist'
import Products from './context/products'
import ProductsProvider from './context/products'
import BasketProvider from './context/basket'

createRoot(document.getElementById('root')).render(
  <BasketProvider>
      <ProductsProvider>
      <Wishlist>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Wishlist>
  </ProductsProvider>
  </BasketProvider>

)
