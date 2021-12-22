import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../Components/Product/ProductCard";
import { connect } from "react-redux";

const ProductList = (props) => {
  const listProducts = () => {
    if (props.products) {
      const products = props.products;
      const list = products.map((product) => {
        return (
          <Col md={6} lg={3} key={product.name}>
            <ProductCard product={product} />
          </Col>
        );
      });
      return list;
    }
  };

  return (
    <React.Fragment>
      <br />
      <Container>
        <Row>{listProducts()}</Row>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps, {})(ProductList);
