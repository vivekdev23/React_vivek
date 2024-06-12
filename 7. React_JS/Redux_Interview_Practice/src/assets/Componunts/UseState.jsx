import { useState } from "react"

const UseState = () => {

  const  [count , setcount] = useState(0)

    function UpdateNow() {
        
        setcount(count+1)
    }

  return (
    <div>
        <h1>Counter is {count}</h1>
      <button onClick={UpdateNow}>Click Now</button>
    </div>
  )
}

export default UseState
