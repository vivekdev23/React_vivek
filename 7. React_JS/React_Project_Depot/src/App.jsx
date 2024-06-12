import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Element from "./pages/Element";
import About_us from "./component/About_us";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feq_page from "./component/Feq_page";
import Contect_us from "./component/Contect_us";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
          <Route path="/Element" element={<Element />}></Route>
          <Route path="About_us" element={<About_us />}></Route>
          <Route path="Feq_page" element={<Feq_page />}></Route>
          <Route path="Contect_us" element={<Contect_us />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
