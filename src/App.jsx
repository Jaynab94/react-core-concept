import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'



function App() {

  function HandleClick() {
    alert('button clicked')
  }

  const handleClick2 = () => {
    alert('amii ckick hoisi')
  }

  const HandleClick4 = (num) => {
    alert(num + 5);
  }

  return (
    <>


      <h1>React coar concept</h1>
      <Friends></Friends>

      <Users></Users>
      <Team></Team>
      
      <Counter ></Counter>



      <button onClick={HandleClick}>Click me</button>
      <button onClick={handleClick2}>Click me 2</button>
      <button onClick={() => alert('ho hoisi')}>click 3</button>
      <button onClick={() => HandleClick4(5)}> button 4</button>

    </>
  )
}

export default App
