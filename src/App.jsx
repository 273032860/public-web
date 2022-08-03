import { useState } from 'react'
import './App.css'
import bg1 from '../src/imgs/bg1.jpeg'
import { Header } from './components'
import Home from './pages/Home'
import 'animate.css'

function App() {
  return (
    <div className="container   h-[100vh] w-[100vw]">
      <Home />
    </div>
  )
}

export default App
