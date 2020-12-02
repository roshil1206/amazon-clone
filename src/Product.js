import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { motion } from "framer-motion";
function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  const getPriceinString = (val) => {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="product">
      <div className="productInfo">
        <p>{title}</p>
        <p className="productPrice">
          <small>INR</small>

          <strong>{getPriceinString(price)}</strong>
        </p>
        <div className="productRating">
          {Array(rating)
            .fill()
            .map((_, a) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={addToBasket}
      >
        Add to Basket
      </motion.button>
    </div>
  );
}

export default Product;
