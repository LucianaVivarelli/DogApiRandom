import { useState } from 'react'
import ConsumindoApi from './Components/consumindoApi/ConsumindoApi'
import Rodape from './Components/rodape/Rodape'
 import BgBackground from './Components/BgBackground/BgBackground'
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      <BgBackground />
      <ConsumindoApi />
      <Rodape />
    </div>
  )
}

export default App
