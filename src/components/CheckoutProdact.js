import React from "react";
import StarIcon from "../image/star.png";
import "./style/CheckoutProduct.css";
import { useAuth } from "../context/GlobalState";
const CheckoutProdact = ({ e }) => {
  const { dispatch } = useAuth();
  const HandelRemoveProduct = () => {
    dispatch({
      type: "REMOVE_FROM_BESKAT",
      id: e.id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" src={e.image} />
      <div className="checkoutProduct-info">
        <div className="prise">
          <small>$</small>
          <strong>{e.price}</strong>
        </div>

        <p>{e.title}</p>
        <div className="product-rating">
          {Array(e.rating)
            .fill(
              <p>
                <img src={StarIcon}></img>
              </p>
            )
            .map((e) => e)}
        </div>
        <button onClick={HandelRemoveProduct}>remove to baske</button>
      </div>
    </div>
  );
};

export default CheckoutProdact;
