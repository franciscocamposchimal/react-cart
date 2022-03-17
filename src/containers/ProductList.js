import { connect } from "react-redux";
import ProductList from "../components/ProductList";
import { getProducts } from "../ducks/products";
import { getUserMenu } from "../ducks/users";

const mapStateToProps = (state, props) => {
  return {
    products: getProducts(state, props),
    userMenu: getUserMenu(state, props),
  };
};

export default connect(mapStateToProps)(ProductList);
