import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContent from './components/common/mainContent'
import SignUp from './components/common/signup'
import Header from './components/common/header';

const App = () => {
  return (
    <div className='min-h-screen bg-[url(https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg)]'>
      <Router>
      <Header />
      <Routes>
        <Route path="/"  element={<MainContent />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App