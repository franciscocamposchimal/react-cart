import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Product from "../../containers/Product";
import Cart from "../../containers/Cart";

const ProductList = ({ products, userMenu }) => {
  const [menus, setMenu] = useState(false);
  useEffect(() => {
    if (userMenu.length > 0) {
      setMenu(true);
    }
  }, [userMenu]);
  return (
    <>
      {menus && (
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
      )}
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h3>Products</h3>
            <ul className="product-list">
              {products.map((product) => (
                <li key={product.id} className="product-list__item">
                  <Product {...product} />
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4">
            <Cart />
          </div>
        </div>

        <footer>
          <small>
            powered by <a href="http://www.kikoya.mx/">Kikoya</a>
          </small>
        </footer>
      </div>
    </>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
  userMenu: PropTypes.array,
};

export default ProductList;
