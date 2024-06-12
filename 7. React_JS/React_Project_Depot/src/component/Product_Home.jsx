import { IoMdArrowDropdown } from "react-icons/io";

import img_1 from "/src/assets/BW_Handale.jpeg";
import img_2 from "/src/assets/F_Vase.jpeg";
import img_3 from "/src/assets/Deco_Ass.jpeg";
import img_4 from "/src/assets/Clock.jpeg";
import img_5 from "/src/assets/NewsPaper.jpeg";
import img_6 from "/src/assets/Pottry_V.jpeg";
import img_7 from "/src/assets/Rose_H.jpeg";
import img_8 from "/src/assets/Table_Lamp.jpeg";


const Product_Home = () => {
  return (
    <>
      <div className=" bg-white pt-10 px-16 ">
        <div className="flex justify-between">
          <div>
            <ul className="flex space-x-9 text-sm text-gray-400  font-medium ">
              <li className="text-black ">ALL</li>
              <li className=" hover:text-black">HOME DECOR</li>
              <li className=" hover:text-black">LIGHTING</li>
              <li className=" hover:text-black">DECORATION</li>
              <li className=" hover:text-black">VASES</li>
              <li className=" hover:text-black">BASICS</li>
            </ul>
          </div>
          <div className="flex space-x-2">
            <p className=" text-lg font-sm">Filter</p>{" "}
            <IoMdArrowDropdown className="mt-1 text-xl" />
          </div>
        </div>
        <Card_Home/>
      </div>
    </>
  );
};

export const Card_Home = ( ) => {
  return (
    <div>

      <div className="grid grid-cols-4  gap-16 pt-10">

        <div className="box reletive ">
          <img src={img_1} alt="" />
          <h5 className="text-center mt-4 font-semibold">BASKET WITH HANDLES</h5>
          <p className="text-gray-400 text-lg text-center mt-1 pri ">$160</p>
          <button className=" text-gray-400 text-lg text-center mt-1 Add">Add To Card</button>  
        </div>

        <div className="box">
          <img src={img_2} alt="" />
          <h5 className="text-center mt-4 font-semibold">FLOWER VASE</h5>
          <p className="text-gray-400 text-lg text-center mt-1 pri"><del className="me-2">$210</del>$170</p>
          <p className=" text-gray-400 text-lg text-center mt-1 Add">Add To Card</p>  

        </div>

        <div className="box">
          <img src={img_3} alt="" />
          <h5 className="text-center mt-4 font-semibold">DECO ACCESSORY</h5>
          <p className="text-gray-400 text-lg text-center mt-1 pri">$15</p>
          <p className=" text-gray-400 text-lg text-center mt-1 Add">Add To Card</p>  


        </div>

        <div className="box">
          <img src={img_4} alt="" />
          <h5 className="text-center mt-4 font-semibold">WALL CLOCK</h5>
          <p className="text-gray-400 text-lg text-center mt-1 pri">$110</p>
          <p className=" text-gray-400 text-lg text-center mt-1 Add">Add To Card</p>  

        </div>

        <div className="box">
          <img src={img_5} alt="" />
          <h5 className="text-center mt-4 font-semibold">NEWSPAPER STORAGE</h5>
          <p className="text-gray-400 text-lg text-center mt-1 pri">$90</p>
          <p className=" text-gray-400 text-lg text-center mt-1 Add">Add To Card</p>  

        </div>

        <div className="box">
          <img src={img_6} alt="" />
          <h5 className="text-center mt-4 font-semibold">POTTERY VASE</h5>
          <p className="text-gray-400 text-lg text-center mt-1 pri">$60</p>
          <p className=" text-gray-400 text-lg text-center mt-1 Add">Add To Card</p>  

        </div>

        <div className="box">
          <img src={img_7} alt="" />
          <h5 className="text-center mt-4 font-semibold">ROSE HOLDBACK</h5>
          <p className="text-gray-400 text-lg text-center mt-1 pri"><del className="me-2">$30</del>$24</p>
          <p className=" text-gray-400 text-lg text-center mt-1 Add">Add To Card</p>  

        </div>

        <div className="box">
          <img src={img_8} alt="" />
          <h5 className="text-center mt-4 font-semibold">TABLE LAMP</h5>
          <p className="text-gray-400 text-lg text-center mt-1 pri">$240</p>
          <p className=" text-gray-400 text-lg text-center mt-1 Add">Add To Card</p>  


        </div>

      </div>

    </div>
  );
};

export default Product_Home;
