

import { useState } from "react";
function App() {
  //const username="umakant is a software dev"
  let [counter,setCounter]=useState(15)
  //let counter=15
  const addValue=()=>{
      if(counter===20){
        return;
      }
      counter=counter+1;
      setCounter(counter)
     
  }
  const decValue=()=>{
    if(counter===0){
      return;
    }
    setCounter(counter-1)
    

  }
  return (
    <>
      <h1>Umakant aur react</h1>
      <h2>Counter value{counter}</h2>
      <button onClick={addValue}>add value</button>
      <br></br>
      <button onClick={decValue}>decrease value</button>
    </>
  )
}

export default App;
