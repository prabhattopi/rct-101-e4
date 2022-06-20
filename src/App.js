import { Route, Routes, useLocation, useNavigate, useNavigationType } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar"
import Login from "./pages/Login"
import Home from "./pages/Home"
import RequiredAuth from "./hoc/RequiredAuth";
import { useDispatch, useSelector } from "react-redux";
import { ProductsApi } from "./store/product/product.actions";
import { getCart } from "./store/cart/cart.actions";
function App() {
  const {data}=useSelector((state)=>state.auth)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const location =useLocation()
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if(data.isAuthenticated){
      dispatch(getCart())
      navigate(from,{replace:true})
    }
    else{
      navigate("/login")
    }
  
  }, [data.isAuthenticated,dispatch,from,navigate])
  
  return <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="" element={<RequiredAuth><Home/></RequiredAuth>}/>
    </Routes>
  </div>;
}

export default App;
