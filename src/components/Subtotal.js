import React from "react";
import CurrencyFormat from "react-currency-format";
import { useAuth } from "../context/GlobalState";
import "../components/style/Subtotal.css";
import { getBasketTotal } from "../App";
import { useNavigate } from "react-router-dom";
export const Subtotal = () => {
  const { basket } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket.length} items): <strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        <button onClick={() => navigate("/Payment")}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};
