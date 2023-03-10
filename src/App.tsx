import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {FabricPlayground} from "./components/fabric-playground";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FabricPlayground/>
    </div>
  )
}

export default App
