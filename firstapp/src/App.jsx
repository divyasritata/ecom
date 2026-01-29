import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './component/Home.jsx'
import Register from "./component/Register.jsx";
import Login from "./component/Login.jsx";
import Navigation from "./component/Navigation.jsx";
import AddProduct from "./component/AddProduct.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>      
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/add-product" element={<AddProduct/>}/>

      </Routes>
    </BrowserRouter>
  )
}