import React from "react";
import checkoutAd from "../image/checkoutAd.jpg";
import { useAuth } from "../context/GlobalState";
import CheckoutProdact from "./CheckoutProdact";
import "./style/Checkout.css";
import CurrencyFormat from "react-currency-format";
import { Subtotal } from "./Subtotal";
export const Checkout = () => {
  const { basket, user } = useAuth();
  return (
    <div className="checkout ">
      <div className="checkout-right">
        <img className="checkout-ad" src={checkoutAd}></img>
        <h1>Hello {user?.email}</h1>
        <h1 className="checkout-title">Your shopping Basket</h1>
        <div>
          {basket.map((e) => (
            <CheckoutProdact e={e} key={e.id} />
          ))}
        </div>
      </div>
      <div className="checkout-left">
        <Subtotal />
      </div>
    </div>
  );
};
