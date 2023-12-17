import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import ProfileImg from './components/ProfileImg'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Header/>
    <SideBar/>
    <div className='ml-[90px] grid grid-cols-1 md:grid-cols-3'>
      <div>
        <div className='text-center'>
          <h1>Brandon Garduno</h1>
        </div>
        <ProfileImg/>
      </div>
    </div>
   </>
  )
}

export default App
