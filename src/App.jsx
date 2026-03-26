import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import LoginUi from './component/ui/loginUi'
import './App.css'
import Card from './component/card/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> <div>
      <LoginUi />
       </div>
       <div>
        <Card></Card>
        <Card></Card>
        <Card></Card>
       </div>
    </>
  )
}

export default App
