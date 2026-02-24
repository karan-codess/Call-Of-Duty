import React from 'react'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import AnimatedImage from './components/AnimatedImage.jsx'
import AllGames from './components/AllGames.jsx'
import Description from './components/Description.jsx'
import Glance from './components/Glance.jsx'
import Backers from './components/Backers.jsx'
import FinalCard from './components/FinalCard.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <AnimatedImage />
      <AllGames />
      <Description />
      <Glance />
      <Backers />
      <FinalCard />
      <Footer />
    </main>
  )
}

export default App