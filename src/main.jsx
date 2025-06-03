import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import axios from "axios";


axios.defaults.baseURL = "http://localhost:4000/api/v1";
// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
