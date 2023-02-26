import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import "./style/all.scss";
import "bootstrap/js/index.esm";
import Home from "./pages/home";
import NavBar from "./component/NavBar"
import Footer from "./component/Footer"
import MemberMain from "./pages/member/MemberCenter";

// import './style/'


function App(){
    return (
      
          <div>
         
            <NavBar/>     
           <Routes>
            <Route path="finalCup/" element={<Home/>} />
            <Route path='finalCup/member/*' element={<MemberMain/>} />
           </Routes>
           <Footer/>
          </div>
       
      );
}


export default App;