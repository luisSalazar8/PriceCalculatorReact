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
import { closeModalProductDetail, addProductToCart } from "../../Actions";
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
            <b>Price ({props.selectedProduct.sale.quantity} Units):</b>
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

  const sendProduct = () => {
    props.addProductToCart(props.selectedProduct, quantity, price);
    closeModal();
  };

  useEffect(() => {
    if (props.selectedProduct) {
      calculateTotal();
    }
  }, [quantity]);

  useEffect(() => {
    if (props.showModalProductDetail) {
      if (quantity !== 1) {
        resetValues();
      } else {
        calculateTotal();
      }
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
              <FormLabel>
                {" "}
                <b>Price (Unit):</b>
              </FormLabel>
            </Col>
            <Col>
              <FormLabel>US ${props.selectedProduct.price}</FormLabel>
            </Col>
          </Row>
          <br />
          {props.selectedProduct.hasSale && saleDetails()}

          <Row className="d-flex align-items-center">
            <Col>
              <FormLabel><b>Quantity:</b></FormLabel>
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
              <FormLabel><b>Total:</b></FormLabel>
            </Col>
            <Col>
              <FormLabel>US ${price}</FormLabel>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Button variant="base-green" onClick={sendProduct}>
                Add to cart{" "}
              </Button>
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

export default connect(mapStateToProps, {
  closeModalProductDetail,
  addProductToCart,
})(ProductDetailModal);
