
import { useState } from "react"

const Counter = () => {

    const [Count, setCount] = useState(0)


const handleIncrement = () => {
    setCount(Count + 1)
   
} 


const handleDecrement = () => {
    if(Count > 0){
        setCount(Count - 1)
    } 
    else {
        setCount(0)
    }
   
}




const handleReset = () => {
    setCount(0)
    
}
  return (
      <>
    <div className="mx-auto h-screen flex items-center justify-center ">
        <div className="space-x-5 border-2 p-8  bg-orange-500 rounded-2xl">
        <h1 className="text-center m-10 text-6xl text-white shadow-xl">{Count}</h1>
            <button className="p-2 border-2  hover:border-green-700 rounded-xl text-white shadow-xl" onClick={handleIncrement}>Increment</button>
            <button className="p-2 border-2  hover:border-red-700 rounded-xl  text-white shadow-xl " onClick={handleDecrement }>Dicrement</button>
            <button className="p-2 border-2 hover:border-pink-500 rounded-xl  text-white shadow-xl " onClick={handleReset}>Reset_Now</button>
        </div>
    </div>
        </>
      
  )
}

export default Counter
