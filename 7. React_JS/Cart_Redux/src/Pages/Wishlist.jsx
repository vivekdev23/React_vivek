import { addToWishlist, removeToWishlist, emptyWishlist } from '../Redux_Core/wishlistRedux/wishlistAction'
import { useSelector, useDispatch } from "react-redux";
import { CiCircleRemove } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { addToCart } from '../Redux_Core/cartRedux/cartAction';


const Wishlist = () => {

  // const dispatch = useDispatch();
  // const whishlistdata = useSelector((state) => state.wishlist);
  // const navigate = useNavigate();

  

  return (
    <div>

      <div>
        <h1 className="title">This is WishList Page</h1>
        {/* <div className="grid  mt-4">
          <button
            className="bg-blue-500 me-0  py-2 px-3 rounded-md text-white mx-auto tracking-wider"
            onClick={() => dispatch(emptyWishlist())}
          >
            EmptyCart
          </button>
        </div> */}
      </div>
{/* 
        <div className="w-8/12 me-8">
          <table className="table-fixed w-full">
            <thead className=" border-y-2 border-solid border-gray-400 bg-gray-200 text-black">
              <tr className=" tracking-wide ">
                <th className="font-medium p-2">Remove</th>
                <th className="font-medium">Product Image</th>
                <th className="font-medium">Product Title</th>
                <th className="font-medium">Product Quantity</th>
                <th className="font-medium">Product Price</th>
              </tr>
            </thead>
            <tbody>
              {
              whishlistdata.map((item) => {
                return (
                  <>
                    <tr className="border-b border-b-1 border-solid border-gray-400 text-center font-semibold">
                      <td>
                        <button onClick={() => dispatch(removeToWishlist(item.id))}>
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
                      <button className="bg-blue-700 text-white p-2 rounded-lg"  onClick={() => dispatch(addToCart(item))} >Add To Cart</button>
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
        </div> */}
      
    </div>
  );
};

export default Wishlist;
