import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  function colorChanger(color){
    setColor(color);
  }

  return (
    <>
  <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
<h1 className="text-3xl font-bold underline">
      REACT BG CHANGER
    </h1>
<div className='fixed flex-wrap justify-center bottom-12 inset-x-0 px-2'>
<div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
    <button onClick={() => colorChanger("Red")} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>RED</button>
</div>    
<div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
    <button onClick={() =>colorChanger("Green")} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>GREEN</button>
</div>    
<div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
    <button onClick={() =>colorChanger("Blue")} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>BLUE</button>
</div> 
</div> 
</div>  
   
    
    </>
  )
}

export default App
