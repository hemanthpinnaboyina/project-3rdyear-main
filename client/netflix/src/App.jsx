import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContent from './components/common/mainContent'
import SignUp from './components/common/signup'
import AdminDash from './components/common/adminDash';
import Header from "./components/common/header";
import AddMovie from "./components/common/addMovie";
import AddGenre from "./components/common/addGenre";
import Private from "./components/common/Private";
import UpdateMovie from "./components/common/updateMovie";

const App = () => {
  return (
    <div className='min-h-screen bg-[url(https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg)]'>
    <Router>
      <Header />
      <Routes>
        <Route path="/"  element={<MainContent />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admindash" element={
          <Private>
            <AdminDash />
          </Private>
          } />
        <Route path="/addMovie" element={
          <Private>
            <AddMovie />
          </Private>
          } />
        <Route path="/addGenre" element={
          <Private>
            <AddGenre />
          </Private>
          } />
        <Route path="/updateMovie" element={
          <Private>
            <UpdateMovie />
          </Private>
          } />
      </Routes>
    </Router>
    </div>
  )
}

export default App