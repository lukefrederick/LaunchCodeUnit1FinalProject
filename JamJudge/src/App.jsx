import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReviewCard from './components/ReviewCard'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ReviewCard" element={<ReviewCard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
