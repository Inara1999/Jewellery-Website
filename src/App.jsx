import React from 'react'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Router from './routes/Router'
import 'leaflet/dist/leaflet.css';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer /> 
    </BrowserRouter>
  )
}

export default App
