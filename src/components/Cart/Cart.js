import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import CartItem from "./CartItem";

const Cart = ({ items, total, currency, removeFromCart }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Shopping Cart</h3>

      <div className="cart">
        <div className="panel panel-default">
          <div className="panel-body">
            {items.length > 0 && (
              <div className="cart__body">
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    {...item}
                    onClick={() => removeFromCart(item.id)}
                  />
                ))}
              </div>
            )}
            {items.length === 0 && (
              <div className="alert alert-info">Cart is empty</div>
            )}
            <div className="cart__total">
              SubTotal: {total} {currency}
            </div>
            <div className="cart__total">
              Total: {total + Math.round(total * 0.16)} {currency}
            </div>
          </div>
        </div>
      </div>
      {items.length > 0 && (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => navigate("/resume")}
        >
          Comprar
        </button>
      )}
    </div>
  );
};

Cart.propTypes = {
  items: PropTypes.array,
  total: PropTypes.number,
  currency: PropTypes.string,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
