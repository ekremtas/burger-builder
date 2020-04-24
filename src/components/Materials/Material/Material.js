import React from "react";
import classnames from "classnames";

const Material = (props) => {
  const { malzeme, malzemeEkle, malzemeCikar, secilenMalzemeler } = props;

  // mazeleme seculi ise azalt butonu aktif, degilse disabled
  const azaltButonunuGoster = secilenMalzemeler.find(
    (secilenMalzeme) => secilenMalzeme.id === malzeme.id
  );

  return (
    <li className="product price__add" key={malzeme.id}>
      <div className="price__descr">
        <div className="price__item">
          {malzeme.count === 0 ? null : malzeme.count + " X"} {malzeme.name}
        </div>
      </div>
      <button
        onClick={() => {
          malzemeEkle(malzeme);
        }}
        className="malzeme-ekle"
      >
        Ekle
      </button>
      <button
        onClick={() => {
          malzemeCikar(malzeme);
        }}
        className={classnames({
          "malzeme-cikar": true,
          disabled: !azaltButonunuGoster,
          enabled: azaltButonunuGoster,
        })}
      >
        Azalt
      </button>

      <div className="price">₺ {malzeme.price}</div>
    </li>
  );
};

export default Material;
