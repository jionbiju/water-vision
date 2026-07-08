import { Routes, Route } from 'react-router-dom'
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
import GallaryPage from './pages/GallaryPage'
import ProjectsPage from './pages/ProjectsPage'

const HomePage = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <WhyChooseUs />
    <Technology />
    <Services />
    <Projects />
    <Gallery />
    <Contact />
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery" element={<GallaryPage />} />
      <Route path="/projects/:category" element={<ProjectsPage />} />
    </Routes>
  )
}

export default App
