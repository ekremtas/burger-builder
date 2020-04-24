import React from "react";

const TotalPrice = (props) => {
  const {totalPrice} = props;
  return (
    <div className="price__summe">
      <h3>Total Price :</h3>
      <span className="summe-span">₺ {totalPrice}</span>
    </div>
  );
};
export default TotalPrice;