import React from "react";
import { useAuth } from "../context/GlobalState";
import CheckoutProdact from "./CheckoutProdact";
import "./style/Orders.css";
const Orders = () => {
  const { orders } = useAuth();
  console.log(orders);
  return (
    <div className="orders">
      {orders.length > 0 && <h1 className="orders-title">Your Orders</h1>}
      {orders.length > 0 ? (
        orders.map((e) => <CheckoutProdact e={e} key={e.id} />)
      ) : (
        <h1 className="orders-massage"> You don't have Orders</h1>
      )}
    </div>
  );
};

export default Orders;
