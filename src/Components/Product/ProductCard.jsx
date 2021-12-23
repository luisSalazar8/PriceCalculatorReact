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
      <Card.Img
        variant="top"
        src={props.product.imageRoute}
        className="productImageCard"
      />
      <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        <Card.Text>
          US ${props.product.price}
          <br />
          {props.product.hasSale &&
            "SALE: " +
              props.product.sale.quantity +
              " X $" +
              props.product.sale.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default connect(null, { selectProduct, showModalProductDetail })(
  ProductCard
);
