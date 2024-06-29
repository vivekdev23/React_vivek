import { addToCart } from '../Redux_Core/cartRedux/cartAction'
import { useSelector , useDispatch } from "react-redux"
import { useEffect } from "react"
import {ProductList} from '../Redux_Core/productRedux/productAction'
import { addToWishlist } from '../Redux_Core/wishlistRedux/wishlistAction'
import { Heart } from 'lucide-react';



const Shop = () => {

  const dispatch = useDispatch()
  const shopData = useSelector(state => state.product)
  console.log('shopData' , shopData )
  const data = shopData.flat()
  console.log(data)

  useEffect(()=>{
    dispatch (ProductList());
  } , [])


  return (
    <>
      <h1 className="title">This is Shop Page</h1>
    <div>
      <div className="grid grid-cols-4  gap-10  m-4 ">
      {
        data.flat().map((item)=>{
          return(
            
            <div key={item.id} className="text-center h-full border-2 ">
              <div className="relative">
                <img src={item.image} alt="" className="w-full h-72 object-cover" />
                <button className="absolute top-0 right-0 p-4 text-red-700"  onClick={() => dispatch(addToWishlist(item))} > <Heart /></button>
              </div>
              <div className="space-y-1 py-2 bg-slate-200 ">
                <p className="font-medium">{item.title}</p>
                <p>${item.price}</p>
              <div className=' flex justify-evenly space-x-2'>
                <button className="bg-blue-700 text-white p-2 rounded-lg"  onClick={() => dispatch(addToCart(item))} >Add To Cart</button> 
              </div>
              </div>
            </div>
            
          )
          
        })
      }
    </div>
      </div>
      </>
  ) 
}

export default Shop