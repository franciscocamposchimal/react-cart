import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Login = ({ userExists, userLogged }) => {
  const [username, setUsername] = useState("GUEST");
  const [password, setPassword] = useState("123456");
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  useEffect(() =>{
    if(userLogged.id) setRedirect(true);
  }, [userLogged]);
  const handleClick = () => {
    if (username.trim() && password.trim()) {
      userExists({ username, password });
    } else {
      console.log("campos requeridos");
    }
  };
  if(redirect) navigate("/products");
  const handleInputs = (type) => (event) => {
    if (type === 1) setUsername(event.target.value);
    if (type === 2) setPassword(event.target.value);
  };
  return (
    <div className="product thumbnail">
      <div className="caption">
        <h3>Login</h3>
        <div>
          <input onChange={(value) => handleInputs(1)(value)} value={ username } required />
        </div>
        <div>
          <input onChange={(value) => handleInputs(2)(value)}  value={ password } required />
        </div>
        <div className="product__button-wrap">
          <button onClick={handleClick} disabled={username && password ? false : true}>
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  userLogged: PropTypes.any,
  userExists: PropTypes.func,
};

export default Login;
