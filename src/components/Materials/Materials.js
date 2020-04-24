import React from "react";
import Material from "./Material";

const Materials = (props) => {
  const { malzemeler, secilenMalzemeler, malzemeEkle, malzemeCikar } = props;

  return (
    <>
      <ul>
        {malzemeler.map((malzeme) => {
          return (
            <Material key={malzeme.id} malzeme={malzeme} malzemeEkle={malzemeEkle} malzemeCikar={malzemeCikar} secilenMalzemeler={secilenMalzemeler}/>
          );
        })}
      </ul>
    </>
  );
};

export default Materials;
