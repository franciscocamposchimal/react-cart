import { role_groups } from "../data/role_grants";
import { usersList } from "../data/users";

// actions
const LOGIN_SESION = "user/LOGIN";
// const USER_LOGGED = "user/LOGGED";
// reducer
const initialState = {
  items: usersList,
  roles: role_groups,
  userLogged: {},
  userMenu: [],
};

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_SESION:
      return userExists(state, action.payload);

    default:
      return state;
  }
}

export function userSession({ username, password }) {
  return {
    type: LOGIN_SESION,
    payload: {
      username,
      password,
    },
  };
}

// selectors
export function userExists(state, props) {
  const getUser = state.items.find(
    ({ username, password }) =>
      props.username === username && props.password === password
  );
  let userRole = [];
  if (getUser) {
    userRole = state.roles.find(({ role }) => getUser.role === role).modules;
    sessionStorage.setItem("user", getUser);
    sessionStorage.setItem("role", userRole);
  }
  return {
    ...state,
    userLogged: getUser ? getUser : {},
    userMenu: userRole,
  };
}

export function getUserMenu(state, props) {
  return state.users.userMenu;
}
