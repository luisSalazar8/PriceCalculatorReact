import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const ProductRow = (props) => {
  return (
    <React.Fragment>
      <Row className="borderDownGrey">
        <Col lg={10} md={9}>
          <Row>
            <Col lg={2} md={2} >
              <Image
                src={props.product.imageRoute}
                className="productImageCard"
              />
            </Col>
            <Col lg={3} md={3} className="">
              <Row>
                <h4>{props.product.name}</h4>
              </Row>
              <Row>
                <h4>Quantity: {props.product.quantity}</h4>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col lg={2} md={3} className="d-flex align-items-center justify-content-end">
          <h4>US ${props.product.total}</h4>
        </Col>
      </Row>
      <br />
    </React.Fragment>
  );
};

export default ProductRow;
