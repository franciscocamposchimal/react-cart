import React from "react";
import PropTypes from "prop-types";
import Product from "../../containers/Product";
import Cart from "../../containers/Cart"

const ProductList = ({ products }) => {
  return (
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
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
};

export default ProductList;
