import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const ProductRow = (props) => {
  return (
    <React.Fragment>
      <Row className="borderDownGrey">
        <Col lg={10} md={9} sm={8} xs={8}>
          <Row>
            <Col lg={2} md={2} sm={3}  xs={3}>
              <Image
                src={props.product.imageRoute}
                className="productImageCard"
              />
            </Col>
            <Col lg={3} md={4} sm={5} xs={5} className="">
              <Row>
                <h4>{props.product.name}</h4>
              </Row>
              <Row>
                <h4>Quantity: {props.product.quantity}</h4>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col lg={2} md={3} sm={4} xs={4} className="d-flex align-items-center justify-content-end">
          <h4>US ${props.product.total}</h4>
        </Col>
      </Row>
      <br />
    </React.Fragment>
  );
};

export default ProductRow;
