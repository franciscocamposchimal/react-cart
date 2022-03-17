import { connect } from "react-redux";
import Resume from "../components/Resume";
import { getItems, getTotal } from "../ducks/cart";
import { getUserMenu } from "../ducks/users";

const mapStateToProps = (state, props) => {
  return {
    items: getItems(state, props),
    total: getTotal(state, props),
    userMenu: getUserMenu(state, props),
  };
};

export default connect(mapStateToProps)(Resume);
