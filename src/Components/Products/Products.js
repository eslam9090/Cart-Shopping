import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getCategories,
  specificeCategory,
} from "../../RTK/Slices/Product-Slice";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Products/Products.css";
import { AddToCart } from "../../RTK/Slices/Cart-Slice";
const Products = () => {
  const dispatch = useDispatch();
  const { products, isloading, categories } = useSelector(
    (state) => state.productts
  );
  console.log(categories, "categories");

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);
  return (
    <div>
      {isloading ? (
        <h2 className="loadng">Loading...</h2>
      ) : (
        <>
          {categories.map((cat) => {
            return (
              <div className="Cat_Style">
                <Button
                  key={cat}
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => dispatch(specificeCategory(cat))}
                >
                  {cat}
                </Button>
              </div>
            );
          })}
          <Row md={2} xs={1} lg={3} className="g-3  marg">
            {products?.map((productt) => (
              <Col key={productt.id}>
                <Card
                  className="mt-2"
                  style={{ width: "auto ", height: "auto" }}
                >
                  <Card.Img
                    variant="top"
                    src={productt.image}
                    className="img-css mt-3"
                  />
                  <Card.Body>
                    <Card.Title>Tilte</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <div className="d-flex justify-content-between   justify-content-center">
                      <Button
                        variant="primary btn-secondary"
                        className="mb-3"
                        onClick={() => dispatch(AddToCart(productt))}
                      >
                        Add To Cart
                      </Button>

                      <div className="text-muted justifay">
                        {" "}
                        Price {productt.price}$
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  );
};

export default Products;
