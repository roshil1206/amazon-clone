import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  const getTotalPrice = (basket) => {
    let price = 0;
    basket.forEach((element) => {
      price += parseInt(element.price);
      console.log(price);
    });
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <small>INR&nbsp;</small>
              <strong>{getTotalPrice(basket)}</strong>
            </p>
            <small className="subtotalGift">
              <input type="checkbox" name="" id="" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"INR"}
      ></CurrencyFormat>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => history.push("/payment")}
      >
        Proceed to Checkout
      </motion.button>
    </div>
  );
}

export default Subtotal;
