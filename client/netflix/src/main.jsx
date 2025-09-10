import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './main.css'

import Header from './components/common/header'
import MainContent from './components/common/mainContent'
import SignUp from './components/common/signup'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  </StrictMode>
)
