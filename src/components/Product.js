import React from "react";
import StarIcon from "../image/star.png";
import { useAuth } from "../context/GlobalState";
import "../components/style/Product.css";
import shortid from "shortid";
const Prodact = ({ id, image, price, title, rating }) => {
  const { basket, dispatch } = useAuth();
  const AddToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        price: price,
        title: title,
        rating: rating,
      },
    });
  };
  return (
    <div className="product" key={id}>
      <div className="product-info">
        <p>{title}</p>
        <div className="prise">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product-rating">
          {Array(rating)
            .fill(StarIcon)
            .map((e, i) => (
              <p>
                <img key={i} src={e}></img>
              </p>
            ))}
        </div>
      </div>
      <img src={image}></img>

      <button className="butten" onClick={AddToBasket}>
        add to basket{" "}
      </button>
    </div>
  );
};

export default Prodact;
