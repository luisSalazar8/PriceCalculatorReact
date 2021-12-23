import { Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ShoppingCartIcon = (props) => {
  return (
    <Link to={`/ShoppingCart`} className="navElementLink">
      <Nav>
        <div href="/" className="navBarElement">
          Shopping Cart {props.quantity}
        </div>
      </Nav>
    </Link>
  );
};

const mapStateToProps = (state) => {
  return {
    quantity: state.shoppingCart.quantity,
  };
};

export default connect(mapStateToProps, {})(ShoppingCartIcon);
