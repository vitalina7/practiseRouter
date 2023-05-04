import { Routes, Route } from "react-router-dom";
import { Container, Header, Logo, Link } from "./App.styled";
import Home from "path/to/pages/Home";
import About from "path/to/pages/About";
import Products from "path/to/pages/Products";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
      </Routes>
    </div>
  )
}
