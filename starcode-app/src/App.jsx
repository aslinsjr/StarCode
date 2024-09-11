import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'

function App() {

  return (
    <Router>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/destination" element={<Destination/>} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
