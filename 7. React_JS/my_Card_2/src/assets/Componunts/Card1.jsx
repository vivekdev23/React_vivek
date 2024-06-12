 
const Card1 = (Props) => {
  return (
    <>
        <div className="m-10 drop-shadow-2xl  border border-blue-50 shadow-2xl">
        <figure>
            <img src={Props.img} alt="" className= "rounded-md h-56 w-full" />
            <figcaption>
                <h1 className="text-center m-5 text-3xl">{Props.heding}</h1>
                <p className="text-center mx-12 text-sm text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi animi soluta consequatur, dolorem pariatur provident aliquam, vero laboriosam sunt ex molestias neque qui sit quod esse, dignissimos quo. Alias, minima!</p>
            </figcaption>
        </figure>
        <div className="text-center m-5"> 
        <button className=" border p-2 border- border-blue-400 text-blue-400">Go Anywhre</button>
        </div>
        </div>
    </>
  )
}

export default Card1
