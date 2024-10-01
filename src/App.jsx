import React from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Footer from './section/Footer'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </main>
  )
}

export default App