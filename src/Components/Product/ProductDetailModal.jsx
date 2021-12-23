import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormLabel,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import { closeModalProductDetail } from "../../Actions";
import { connect } from "react-redux";
import { priceCalculator } from "../../Util/Price";

const ProductDetailModal = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  const closeModal = () => {
    props.closeModalProductDetail();
  };

  const saleDetails = () => {
    return (
      <React.Fragment>
        <Row>
          <Col>
            <FormLabel>
              Price ({props.selectedProduct.sale.quantity} Units):
            </FormLabel>
          </Col>
          <Col>
            <FormLabel>US ${props.selectedProduct.sale.price}</FormLabel>
          </Col>
        </Row>
        <br />
      </React.Fragment>
    );
  };

  const quantityOptions = () => {
    const optionList = [];
    for (let i = 1; i <= 10; i++) {
      optionList.push(
        <option value={i} key={i}>
          {i}
        </option>
      );
    }
    return optionList;
  };

  const onChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const calculateTotal = () => {
    setPrice(priceCalculator(props.selectedProduct, quantity));
  };

  const resetValues = () => {
    setQuantity(1);
  };

  useEffect(() => {
    if (props.selectedProduct) {
      calculateTotal();
    }
  }, [quantity, props.showModalProductDetail]);

  useEffect(() => {
    if (props.showModalProductDetail) {
      resetValues();
    }
  }, [props.showModalProductDetail]);

  if (!props.selectedProduct) {
    return <></>;
  }

  return (
    <Modal
      show={props.showModalProductDetail}
      onHide={closeModal}
      className="right"
      animation={true}
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.selectedProduct.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="text-center ">
          <Row>
            <Image src={props.selectedProduct.imageRoute} />
          </Row>
          <br />
          <Row>
            <Col>
              <FormLabel>Price (Unit):</FormLabel>
            </Col>
            <Col>
              <FormLabel>US ${props.selectedProduct.price}</FormLabel>
            </Col>
          </Row>
          <br />
          {props.selectedProduct.hasSale && saleDetails()}

          <Row className="d-flex align-items-center">
            <Col>
              <FormLabel>Quantity:</FormLabel>
            </Col>
            <Col>
              <Form.Select value={quantity} onChange={onChangeQuantity}>
                {quantityOptions()}
              </Form.Select>
            </Col>
          </Row>
          <br />
          <Row className="d-flex align-items-center">
            <Col>
              <FormLabel>Total:</FormLabel>
            </Col>
            <Col>
              <FormLabel>US ${price}</FormLabel>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Button variant="base-green">Add to cart </Button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    showModalProductDetail: state.showModalProductDetail,
    selectedProduct: state.selectedProduct,
  };
};

export default connect(mapStateToProps, { closeModalProductDetail })(
  ProductDetailModal
);
