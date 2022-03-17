import React, { Component } from "react";
import PropTypes from "prop-types";

class NavBar extends Component {
  render() {
    const { userMenu = [] } = this.props;
    console.log(userMenu);
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary">
          {userMenu.map((item) => {
            console.log(item);
            return (
              <div key={item.id} className="navbar-brand">
                {item.option}
              </div>
            );
          })}
        </nav>
      </div>
    );
  }
}

NavBar.propTypes = {
  userMenu: PropTypes.array.isRequired,
};

export default NavBar;
