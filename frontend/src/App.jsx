import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import Technology from './components/Technology/Technology'
import Services from './components/Services/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <WhyChooseUs/>
      <Services/>
      <Technology/>
    </>
  )
}

export default App
