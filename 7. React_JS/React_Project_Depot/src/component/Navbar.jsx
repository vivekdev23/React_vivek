import img from "/src/assets/Logo_B.png";
import { FaRegUser } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
  return (
    <>
      <div className=" bg-white flex justify-between items-center p-10 tracking-wider sticky top-0  w-full ">
        <div>
          <ul className="flex space-x-10">
            <li className="">
              <Link
                to="/"
                className="text-black text-sm font-semibold hover:text-gray-500"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/Shop"
                className="text-black text-sm font-semibold  hover:text-gray-500"
              >
                SHOP
              </Link>
            </li>

            <div className="dropdown">
              <li>
                <Link
                  className="text-black text-sm font-semibold  hover:text-gray-500"
                >
                  PAGES
                </Link>
              </li>
              <div className="dropdown-content">
                <Link to="/About_us" href="">About Us</Link>
                <Link to="/Feq_page" href="">FEQ</Link>
                <Link to="/Contect_us" href="#">Contect_us</Link>
              </div>
            </div>
            

            <li>
              <Link
                to="/Element"
                className="text-black text-sm font-semibold  hover:text-gray-500"
              >
                ELEMENTS
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <img src={img} alt="" className="h-5" />
        </div>
        <div className="flex space-x-6">

          <div className="mt-1">
            <button className="text-black text-sm  font-medium">
              CART <span className=" text-xs text-gray-400">($0)</span>
            </button>
          </div>

          <div className="flex items-center space-x-1  hover:text-gray-500">

            <span className="">
              <FaRegUser />
            </span>
            <h3 className="font-medium text-sm mt-1">
              <button>LOGIN</button>
            </h3>

          </div>

          <div className="mt-2">
            <FaMagnifyingGlass />
          </div>

          <div className="mt-2">
           <AiOutlineMenu/>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
