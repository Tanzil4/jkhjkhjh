import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./componenets/header"
import Home from "./pages/home"
import Productinfo from "./pages/productinfo"
import Products from "./pages/products"


function App() {
 
  return (
  <><BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Products/>}/>
    <Route path="/Products" element={<Products/>}/>
    <Route path="/Productinfo/:id" element={<Productinfo/>}/>
  </Routes>
  </BrowserRouter></>
  )
}

export default App
