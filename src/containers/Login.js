import { connect } from "react-redux";
import Login from "../components/Login";
import { getUserMenu, userSession } from "../ducks/users";

const mapStateToProps = (state, props) => {
  return {
    userLogged: state.users.userLogged,
    userMenu: getUserMenu(state, props),
  };
};

const mapDispatchToProps = (dispatch) => ({
  userExists: (user) => dispatch(userSession(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
