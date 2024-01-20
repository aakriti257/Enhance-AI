import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Enhance from "./components/pages/Enhance";
import Home from "./components/pages/Home";
import Logo from "./components/pages/Logo"



function App() {
  
return (
  <div className="App">
    <Navbar/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path="/enhance" element={<Enhance/>}/>
      <Route path="/home" element={<Home/>}/>
      
    </Routes>
    </div>
  
  )
}

export default App;
