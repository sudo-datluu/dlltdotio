import React from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Footer from './section/Footer'
import Experience from './section/Experience'
import Resume from './section/Resume'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Resume />
      <Footer />
    </main>
  )
}

export default App