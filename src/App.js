import {
    Routes,
    Route,
  } from "react-router-dom";
import "./style/all.scss";
import "bootstrap/js/index.esm";
import Home from "./pages/home";
import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import Fordummies from "./pages/fordummies";



function App(){
    return (
      
          <div>
            <NavBar/>
            {/* 上面不會動 */}
           <Routes>
            <Route path="finalCup/" element={<Home/>} />
            <Route path="finalCup/fordummies" element={<Fordummies/>} /> {/* 懶人包 */}

           </Routes>
            {/* 下面不會動 */}
           <Footer/>
          </div>
       
      );
}


export default App;