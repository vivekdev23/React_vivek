const Card_2 = () => {
  return (
    <>
      <div className=" w-[350px] h-[470px] bg-white border border-gray-200 rounded-lg shadow-lg backdrop-md">
        <a href="#">
          <img
            className="rounded-t-lg w-[350px] h-[200px] object-cover"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTpHetMiwcOQAj9s2HxPv0jN_DqN-uPs-9mP2Myug-q5V2i_RS0"
            alt=""
          />
        </a>
        <div className="p-5">
          <p className="text-pink-900 font-bold">Chulin</p>
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Cheart Day inspriration
          </h3>

          <p className=" items-center  text-sm font-md  text-gray-500 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
            tempora sed in aperiam, voluptate sequi fugiat nam?
          </p>

          <div className=" space-x-10 mt-5">
            <button className="border bg-pink-900 text-white px-4 py-2">
              Button
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card_2;
