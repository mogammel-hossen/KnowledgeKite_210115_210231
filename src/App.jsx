import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NameLogo from './NameLogo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NameLogo />
    </>
  )
}

export default App
