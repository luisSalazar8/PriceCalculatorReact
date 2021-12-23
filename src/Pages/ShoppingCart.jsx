
import { connect } from "react-redux";

const ShoppingCart = (props)=>{
    console.log(props.shoppingCart);
    return (<p>cart</p>);
}

const mapStateToProps = (state) => {
    console.log(state);
    return { shoppingCart: state.shoppingCart };
  };

export default connect(mapStateToProps,{})(ShoppingCart);