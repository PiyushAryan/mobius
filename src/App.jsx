import { useState } from 'react'
import HowWeWork from './components/HowWeWork'
import Hero from './components/Hero'
import About from './components/About'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <HowWeWork />
      <About />
    </>
  )
}

export default App
