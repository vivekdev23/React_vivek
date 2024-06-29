import {
  removeToCart,
  emptyCart,
  incrementToCart,
  decrementToCart,
} from "../Redux_Core/cartRedux/cartAction";
import { useSelector, useDispatch } from "react-redux";
import { CiCircleRemove } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartdata = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const amount =
    cartdata.length &&
    cartdata
      .map((item) => item.price * item.quantity)
      .reduce((prev, next) => (prev += next));
  console.log("Cartamount", amount);

  return (

    <div className="m-2">
      <div>
        <h1 className="title">This is Cart Page</h1>
        <div className="grid  mt-4">
          <button
            className="bg-blue-500 me-0  py-2 px-3 rounded-md text-white mx-auto tracking-wider"
            onClick={() => dispatch(emptyCart())}
          >
            EmptyCart
          </button>
        </div>
      </div>

      {
        cartdata.length == 0 ? 

        // empty cart here 
        
        (<div>
          <div className="mt-4">
            <h1 className=" m-0 text-center py-2 px-3 rounded-md text-black font-semibold text-4xl mx-auto tracking-wider ">
            Your Cart Is Empty
            </h1>
          </div>
  
          <div className="text-center top-0 mt-5  ">
            <button
              className="bg-blue-500 m-0 w-2/12 py-2 px-3 rounded-md text-white mx-auto tracking-wider "
              onClick={() => navigate("/shop")}
            >
              BackToShop
            </button>
          </div>
          </div>) :
          
          // map function here 
          
          (  <div className="flex mt-7">
          <div className="w-8/12 me-8">
            <table className="table-fixed w-full">

              {/* comment here thead */}

              <tbody>
                {cartdata.map((item) => {
                  return (
                    <>
                      <tr className="border-b border-b-1 border-solid border-gray-400 text-center font-semibold">
                        <td>
                          <button onClick={() => dispatch(removeToCart(item.id))}>
                            <CiCircleRemove className="text-2xl mx-auto stroke-1" />
                          </button>
                        </td>
                        <td>
                          <img
                            className="size-28 mx-auto m-2 rounded-lg"
                            src={item.image}
                            alt=""
                          />
                        </td>
                        <td>
                          <p>{item.title}</p>
                        </td>
  
                        <td>
                          <td className="flex items-center">
                            <button
                              className="px-2 m-5 border-2 bg-slate-100  rounded-lg hover:bg-red-400"
                              onClick={() => dispatch(decrementToCart(item.id))}
                            >
                              -
                            </button>
                            <h1 className="text-xl">
                              <p>{item.quantity}</p>
                            </h1>
                            <button
                              className="px-2 m-5 border-2 bg-slate-100  rounded-lg hover:bg-green-400"
                              onClick={() => dispatch(incrementToCart(item.id))}
                            >
                              +
                            </button>
                          </td>
                        </td>
  
                        <td>
                          <p>${item.price * item.quantity}</p>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
  
          <div className="w-4/12 px-2">
            <div className=" flex justify-between bg-gray-100 p-5">
              <h1 className="font-semibold text-4xl">CART TOTALS</h1>
              <p className="text-3xl font-semibold">${amount}</p>
            </div>
          </div>
  
        </div>)  
      }

    </div>
  );
};

export default Cart;




 {/* <thead className=" border-y-2 border-solid border-gray-400 bg-gray-200 text-black">
              <tr className=" tracking-wide ">
                <th className="font-medium p-2">Remove</th>
                <th className="font-medium">Product Image</th>
                <th className="font-medium">Product Title</th>
                <th className="font-medium">Product Quantity</th>
                <th className="font-medium">Product Price</th>
              </tr>
            </thead> */}