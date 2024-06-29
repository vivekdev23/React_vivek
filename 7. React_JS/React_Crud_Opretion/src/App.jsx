// import Axios_get from "./assets/pages/Axios_get"  
import { Navbar } from "./assets/components/Navbar"
import  Table  from "./assets/components/Table"
// import Axios_post from "./assets/pages/Axios_post"
import Edit from './assets/pages/Edit'
import  Add  from "./assets/pages/Add"
import { Route , BrowserRouter , Routes } from "react-router-dom"


function App() {
  

  return (
    <>

<BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Table />}></Route>
          <Route path="/Edit/:id" element={<Edit />}></Route>
          <Route path="/Add" element={<Add />}></Route>
        </Routes>
</BrowserRouter>
  
    </>
  )
}

export default App
