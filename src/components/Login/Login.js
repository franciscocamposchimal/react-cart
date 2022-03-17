import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Login = ({ userExists, userLogged, userMenu }) => {
  const [username, setUsername] = useState("GUEST");
  const [password, setPassword] = useState("123456");
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (userLogged.id) {
      setRedirect(true);
    } else {
      sessionStorage.removeItem("role");
      sessionStorage.removeItem("user");
    }
  }, [userLogged]);

  const handleClick = () => {
    if (username.trim() && password.trim()) {
      userExists({ username, password });
    } else {
      console.log("campos requeridos");
    }
  };

  if (redirect) {
    sessionStorage.setItem("user", JSON.stringify(userLogged));
    sessionStorage.setItem("role", JSON.stringify(userMenu));
    navigate("/products");
  }

  const handleInputs = (type) => (event) => {
    if (type === 1) setUsername(event.target.value);
    if (type === 2) setPassword(event.target.value);
  };

  return (
    <div className="login">
      <div className="text-center card cardLogin">
        <div className="card-body">
          <div className="caption">
            <h3>Login</h3>{" "}
            <div className="form-group row">
              <div className="col-sm-12">
                <input
                  onChange={(value) => handleInputs(1)(value)}
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                  value={username}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-12">
                <input
                  onChange={(value) => handleInputs(2)(value)}
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  required
                  value={password}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-12">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleClick}
                  disabled={username && password ? false : true}
                >
                  Ingresar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  userLogged: PropTypes.any,
  userExists: PropTypes.func,
  userMenu: PropTypes.array,
};

export default Login;
