import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import JS (để dùng menu thả xuống, modal...)
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Icons

import './styles/global.css';

// 1. IMPORT BrowserRouter từ react-router-dom
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
