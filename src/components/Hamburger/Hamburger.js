import React from "react";
import "./styles.css";
import { Materials , BreadBottom , BreadTop } from "../Hamburger";

const Hamburger = (props) => {
  // Kapsayici icin React fragment kullaniyoruz.
  return (
    <>
      <div>
        <BreadTop />

        {props.secilenMalzemeler.map((malzeme) => {
          return <Materials key={malzeme.id} malzeme={malzeme} />;
        })}

        <BreadBottom />
      </div>
    </>
  );
};

export default Hamburger;
