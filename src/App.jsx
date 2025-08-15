import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PublicOffer from './pages/PublicOffer'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/public-offer" element={<PublicOffer />} />
      </Routes>
    </Router>
  )
}

export default App
