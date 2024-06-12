import axios from "axios";
import { useState } from "react";

const Axios_post = () => {

const data = {fname:'' , lname:''}

    const [inputData , setInputData] = useState(data)
    console.log(inputData)

const handleChange = (e) => {
    setInputData({...inputData , [e.target.name]:e.target.value})
}



const handleSubmit = (e) => {

    e.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/users' , inputData)
    .then(response => console.log(response))

}

const handleUpdate = (e) => {

    e.preventDefault()
    axios.put('https://jsonplaceholder.typicode.com/users/1' , inputData)
    .then(response => console.log(response))

    
}


const handleDelete = (e) => {

    e.preventDefault()
    axios.delete('https://jsonplaceholder.typicode.com/users/1' , inputData)
    .then(response => console.log(response))

    
}

  return (
    <div>
      <h1 className="text-white sticky top-0 bg-purple-500 p-4 text-center">
        Axios Post / Put / Delete Request
      </h1>
      <div className="h-screen flex  justify-center items-center">
        <div className="bg-black space-y-8 p-10">
          <div className="">
            <label htmlFor="FirstName" className="text-white text-xl">FirstName</label>
            <input type="text" name="fname" id="FirstName" className="border-2 ms-2 px-4 py-1" onChange={handleChange} value={inputData.fname} />
          </div>

          <div className="">
            <label htmlFor="LastName" className="text-white text-xl">LastName</label>
            <input type="text" name="lname" id="LastName" className="border-2 ms-2 px-4 py-1 " onChange={handleChange} value={inputData.lname} />
          </div>

        <div className="space-y-5">
        <button onClick={handleSubmit} className="bg-blue-600 p-2 text-white w-full font-semibold rounded-lg">Submit</button>
          <button onClick={handleUpdate} className="bg-yellow-600 p-2 text-white w-full font-semibold rounded-lg">Update</button>
          <button onClick={handleDelete} className="bg-red-700 p-2 text-white w-full font-semibold rounded-lg">Delete</button>
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default Axios_post;
