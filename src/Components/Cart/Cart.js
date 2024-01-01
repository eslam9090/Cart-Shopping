import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import Stack from "react-bootstrap/Stack";
import {
  Open,
  RemoveFromCart,
  ClearFromCart,
} from "../../RTK/Slices/Cart-Slice";
import "../Cart/Cart.css";
const Cart = () => {
  const dispatch = useDispatch();
  const { isOpen, cartState } = useSelector((state) => state.cart);
  console.log(cartState);
  const totalPrice = cartState.reduce((acc, product) => {
    acc = acc + product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <>
      <Offcanvas show={isOpen} onHide={() => dispatch(Open())} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className=" " style={{ width: "auto " }}>
          {cartState?.map((pro) => (
            <Stack
              key={pro.id}
              gap={3}
              className="mb-5 d-flex justify-content-center align-items-center"
              direction="horizontal"
            >
              <img
                src={pro.image}
                alt="Girl in a jacket"
                width="100px"
                height="90px"
                style={{ objectFit: "cover" }}
              />
              <div className="p-2 font_size">{pro.title}</div>
              <div className="p-2 font_size">x{pro.quantity}</div>
              <div className="p-2">{pro.price}$</div>
              <Button
                className="close"
                variant="outlined"
                onClick={() => dispatch(RemoveFromCart(pro))}
              >
                <i class="fa-regular fa-circle-xmark"></i>
              </Button>
            </Stack>
          ))}
          <div className="d-flex justify-content-between pt-4 ">
            <span>Total Price : {totalPrice.toFixed(2)}$</span>
            <Button
              variant="danger mb-5 "
              size="sm"
              onClick={() => dispatch(ClearFromCart())}
            >
              Clear
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
