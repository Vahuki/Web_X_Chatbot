import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import JS (để dùng menu thả xuống, modal...)
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Icons
import '@fortawesome/fontawesome-free/css/all.min.css';


import './styles/global.css';

import { Provider } from 'react-redux';
import store from './store';

// 1. IMPORT BrowserRouter từ react-router-dom
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/Cartcontext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>

      <BrowserRouter>
        <App />
      </BrowserRouter>

    </Provider>
  </StrictMode>,
)
