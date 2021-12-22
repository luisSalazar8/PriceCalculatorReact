import { Card } from "react-bootstrap";

const ProductCard = (props) => {
  return (
    <Card className="productCard">
      <Card.Img variant="top" src={props.product.imageRoute} className="productImageCard"/>
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

export default ProductCard;
