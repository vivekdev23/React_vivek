
import { useState } from "react"

const Recepis = () => {

    const [Recepi, SetRecepi] = useState("Select Option")

function Recepi_A () {
    return (
        <ol>    
          <li>Boil 1 cup of water.</li>
          <li>Add 1 spoon of tea 0.5 spoons of spice.</li>
          <li>Add 2.5 cups of milk to boil </li>
          <li>And sugar to taste.</li>
        </ol>
      );
    }

    const Recepi_1 = () => {
    
        SetRecepi (Recepi_A)
    }


function Recepi_B () {
    return (
        <ul>    
          <li>Boil 2 cup Milk .</li>
          <li>Add 2 spoons of Suger.</li>
          <li>Add 1 spoons of Coffee to taste.</li>
        </ul>
      );
}

const Recepi_2 = () => {
    
    SetRecepi (Recepi_B)
}

const Reset = () => {
    SetRecepi("Tea Or Coffee")
    
}

  return (
      <>
    <div className="mx-auto h-screen flex items-center justify-center ">
        <div className="space-x-5 border-2 p-8   bg-fuchsia-600 rounded-2xl">
        <h1 className="text-center m-10 text-2xl text-white shadow-xl">{Recepi}</h1>
            <button className="p-2 border-2  hover:border-green-700 rounded-xl text-white shadow-xl" onClick={Recepi_1}>Tea_Recepi</button>
            <button className="p-2 border-2  hover:border-red-700 rounded-xl  text-white shadow-xl " onClick={Recepi_2}>Coffee_Recepi</button>
            <button className="p-2 border-2 hover:border-pink-500 rounded-xl  text-white shadow-xl " onClick={Reset}>Reset_Now</button>
            
        </div>
    </div>
        </>
      
  )
}

export default Recepis
