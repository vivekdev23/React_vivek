import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Navbar from "../Components/Navbar";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const roots = createBrowserRouter([
  {
    path: '',
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/wishlist',
        element: <Wishlist />
      },
    ]
  },

])

const Layout = () => {
  return (
    <div>
      <RouterProvider router={roots}>
      </RouterProvider>
    </div>
  )
}

export default Layout