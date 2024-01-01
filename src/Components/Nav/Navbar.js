import React from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Nav/Navbar.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { Open } from "../../RTK/Slices/Cart-Slice";
import { useDispatch, useSelector } from "react-redux";
const NavBar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart.cartState);
  const error = useSelector((state) => state.productts.error);

  return (
    <>
      {error ? (
        <Alert variant="danger">{error} Data From Server </Alert>
      ) : (
        <Navbar expand="lg" fixed="top" className="bg-body-tertiary nav_css">
          <Container>
            <Link to="/" className="navbar-brand">
              My Store
            </Link>
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="ms-auto ">
                <Link className="nav-link" to="/">
                  Products
                </Link>
                <Button
                  variant="outline"
                  className="ms-5 btn_style"
                  onClick={() => dispatch(Open())}
                >
                  <div>{cartState.length}</div>
                  <i className="fa-solid fa-cart-shopping"></i>
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default NavBar;
