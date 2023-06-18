import React from "react";
import { useAuth } from "../context/GlobalState";
import CheckoutProdact from "./CheckoutProdact";
import { getBasketTotal } from "../App";
import CurrencyFormat from "react-currency-format";

import "./style/Payment.css";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { basket, user, dispatch, orders } = useAuth();
  const navigate = useNavigate();
  const handelBuy = () => {
    basket.map((e) => {
      orders.push(e);
    });

    dispatch({
      type: "EMPTY_BASKET",
    });
    navigate("/PuymentDone");
  };
  console.log(orders);
  return (
    <div className="payment">
      <div className="payment-container">
        <h1>Checkout ({basket.length}items)</h1>
        <div className="payment-section">
          <h3>Delivery Address</h3>
          <div className="payment-address">
            {user?.email}
            <p> ourgla , alger</p>
          </div>
        </div>
        <div className="payment-section">
          <h3>Review items and delivery</h3>
          <div className="payment-items">
            {basket.map((e) => (
              <CheckoutProdact e={e} />
            ))}
          </div>
        </div>
        <div className="payment-section">
          <h3>Payment Method</h3>
          <div className="payment-details">
            <div className="payment-priceContainer">
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <p>Order Total : {value}</p>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />

              <button onClick={handelBuy}> Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
