import { useState } from 'react'
import './App.css'
import Carta from './components/Carta'
import { carta } from './components/TemplateApp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {
      carta.map(cart=>{
        return(
          
          <Carta carta={cart}/>
          
        )
      })
    }
      
    </>
  )
}

export default App
