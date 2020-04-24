import React from "react";
import "./styles.css";

const ResetHamburger = (props) => {
  const { resetHamburger } = props;
  return (
    <div className="price__summe">
      <button className="resetbutton" onClick={resetHamburger}>Empty the Hamburger</button>
    </div>
  );
};

export default ResetHamburger;
