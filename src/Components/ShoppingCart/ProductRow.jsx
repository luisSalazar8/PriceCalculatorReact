import { Col, Image, Row } from "react-bootstrap";

const ProductRow = (props) => {
  return (
    <Row>
      <Col lg={10}>
        <Row>
          <Col lg={2}>
            <Image
              src={props.product.imageRoute}
              className="productImageCard"
            />
          </Col>
          <Col lg={2} className="">
            <Row>
              <h4>{props.product.name}</h4>
            </Row>
            <br />
            <Row>
              <h4>Quantity: {props.product.quantity}</h4>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col lg={2} className="d-flex align-items-center">
        <h4>US ${props.product.total}</h4>
      </Col>
    </Row>
  );
};

export default ProductRow;
