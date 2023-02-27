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
<<<<<<< HEAD

=======
// import './style/'
>>>>>>> 9e7b846dd7637a4df71e05c54117cd9240129502


function App(){
    return (
      
          <div>
            <NavBar/>
            {/* 上面不會動 */}
           <Routes>
            <Route path="finalCup/" element={<Home/>} />
<<<<<<< HEAD
            <Route path="finalCup/fordummies" element={<Fordummies/>} /> {/* 懶人包 */}

=======
             <Route path="finalCup/fordummies" element={<Fordummies/>} />
>>>>>>> 9e7b846dd7637a4df71e05c54117cd9240129502
           </Routes>
            {/* 下面不會動 */}
           <Footer/>
          </div>
       
      );
}


export default App;