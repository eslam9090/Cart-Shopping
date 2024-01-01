import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Nav/Navbar";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import Container from "react-bootstrap/esm/Container";
import { useSelector } from "react-redux";

function App() {
  const isOpen = useSelector((state) => state.cart.isOpen);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Cart />
        <Container className="">
          <Routes>
            <Route path="/" element={<Products />} />
            {/* <Route path="/cart" element={{} />*/}
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
