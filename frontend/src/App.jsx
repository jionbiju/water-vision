import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import Technology from './components/Technology/Technology'
import Services from './components/Services/Services'
import Gallery from './components/Gallary/Gallary'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

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
      <Gallery/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
