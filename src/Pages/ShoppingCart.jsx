import React, { useEffect, useState } from "react";
import { Button, Col, Container, ListGroup, Modal, Row } from "react-bootstrap";
import { connect } from "react-redux";
import ProductRow from "../Components/ShoppingCart/ProductRow";
import { useNavigate } from "react-router-dom";
import { cleanShoppingCart } from "../Actions/index";

const ShoppingCart = (props) => {
  let navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [saved, setSaved] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    props.cleanShoppingCart();
    navigate("/");
  };

  const productsRow = () => {
    if (props.shoppingCart.items.length === 0) {
      return (
        <React.Fragment>
          <br />
          <br />
          <h4 className="text-center">Your shopping cart is empty!</h4>
          <br />
          <br />
        </React.Fragment>
      );
    }

    const list = props.shoppingCart.items.map((item) => {
      return <ProductRow product={item} key={item.name} />;
    });

    return list;
  };

  const calculateTotal = () => {
    let accumulator = 0;
    props.shoppingCart.items.forEach((item) => {
      accumulator = accumulator + item.total;
    });

    setTotal(parseFloat(accumulator.toFixed(2)));
  };

  const calculateSaved = () => {
    let accumulator = 0;

    props.shoppingCart.items.forEach((item) => {
      accumulator = accumulator + item.price * item.quantity;
    });

    let result = parseFloat((accumulator - total).toFixed(2));

    setSaved(result);
  };

  const buyItems = () => {
    setShowModal(true);
  };

  const generateCheckoutButton = () => {
    if (props.shoppingCart.items.length > 0) {
      return (
        <Row>
          <Col lg={{ span: 3, offset: 8 }}>
            <div className="d-grid gap-2">
              <Button variant="base-green" size="lg" onClick={buyItems}>
                Checkout{" "}
              </Button>
            </div>
          </Col>
        </Row>
      );
    }
  };

  useEffect(() => {
    calculateTotal();
  }, []);

  useEffect(() => {
    calculateSaved();
  }, [total]);

  return (
    <React.Fragment>
      <br />
      <Container>
        <Row className="borderDownBlack">
        <h2>Shooping Cart</h2>
        </Row>
        <br />
        <Row className="borderDownGrey">
          <Col lg={10} md={10} xs={10}>
            <h3>Product</h3>
          </Col>
          <Col lg={2} md={2} xs={2} className="d-flex justify-content-end">
            <h3>Price</h3>
          </Col>
        </Row>
        <br />
        {productsRow()}
        <Row>
          <Col lg={{ span: 3, offset: 7 }} md={{ span: 4, offset: 5 }}>
            <h3>Total Price: </h3>
          </Col>
          <Col lg={{ span: 2 }} md={{ span: 3 }} className="d-flex justify-content-end">
            <h3> US ${total}</h3>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 3, offset: 7 }} md={{ span: 4, offset: 5  }}>
            <h3>You have saved: </h3>
          </Col>
          <Col lg={{ span: 2 }} md={{ span: 3 }} className="d-flex justify-content-end">
            <h3 className="text-right"> US ${saved}</h3>
          </Col>
        </Row>
        <br />
        {generateCheckoutButton()}
        <br />
        <br />
        <br />
      </Container>
      <Modal show={showModal} onHide={closeModal} animation={true} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Succesful Purchase</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="text-center">
            <Row>
              <Col>
                <h5>Thank you for buying our products!</h5>
              </Col>
            </Row>
            <br />
            <Row>
              <Col lg={{ span: 4, offset: 4 }}>
                <div className="d-grid gap-2">
                  <Button variant="base-green" size="lg" onClick={closeModal}>
                    accept
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return { shoppingCart: state.shoppingCart };
};

export default connect(mapStateToProps, { cleanShoppingCart })(ShoppingCart);
