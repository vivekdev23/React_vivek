import { useState , useEffect } from "react"

const UseEffect = () => {

  const  [count , setcount] = useState(0)

  useEffect (() => {

    console.log("Vivek Patil");

  }, [])

    function UpdateNow() {
        
        setcount(count+1)

    }

  return (
    <div>
        <h1>Counter is {count}</h1>
      <button onClick={UpdateNow}>Click Now {count}</button>
    </div>
  )
}

export default UseEffect
