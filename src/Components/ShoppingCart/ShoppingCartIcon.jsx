import { Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";

const ShoppingCartIcon = (props) => {
  return (
    <Link to={`/ShoppingCart`} className="navElementLink">
      <Nav className="navBarElement justify-content-between align-items-center">
        <Icon title="Shopping cart" path={mdiCartOutline} size={2} />
        <h3>{props.quantity}</h3>
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
