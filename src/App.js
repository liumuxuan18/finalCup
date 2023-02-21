import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import "./style/all.scss"
import Home from "./pages/home";

// import './style/'


function App(){
    return (
      
          <div>
           <Routes>
            <Route path="finalCup/" element={<Home/>} />
           </Routes>
          </div>
       
      );
}


export default App;