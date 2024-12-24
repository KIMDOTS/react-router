import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  // BrowserRouter 컴포넌트로 감싸주지 않으면 오류 발생!
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
