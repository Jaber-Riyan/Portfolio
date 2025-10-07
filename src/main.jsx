import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Layout/Home/Home'
import 'animate.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Home></Home>
    </BrowserRouter>
    <ToastContainer position="top-center"
      autoClose={1500}
      hideProgressBar={false}
      closeOnClick={true}
      pauseOnHover={true}
      draggable={true} />
  </StrictMode>,
)
