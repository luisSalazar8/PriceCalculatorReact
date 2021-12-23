import { Card } from "react-bootstrap";
import { selectProduct, showModalProductDetail } from "../../Actions";
import { connect } from "react-redux";
import { closeModalProductDetail } from "../../Actions";
const ProductCard = (props) => {
  const clickProduct = () => {
    props.selectProduct(props.product);
    props.showModalProductDetail();
  };

  return (
    <Card className="productCard" onClick={clickProduct}>
      <div className="saleContainer">
        <Card.Img
          variant="top"
          src={props.product.imageRoute}
          className="productImageCard"
        />
        {props.product.hasSale && (
          <h3 className="saleContainerText blink_me sale">
            SALE: {props.product.sale.quantity} X ${props.product.sale.price}
          </h3>
        )}
      </div>
      <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        <Card.Text>
          US ${props.product.price}
          <br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default connect(null, { selectProduct, showModalProductDetail })(
  ProductCard
);
