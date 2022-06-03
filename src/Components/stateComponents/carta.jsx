import React from "react";
import "./card.scss";

import Behind from "../Assets/Behind.jpg";

export default function Carta({ card, seleccion, frente, unactive }) {
  const seleccionar = () => {
    if (!unactive) {
      seleccion(card);
    }
  };

  return (
    <div className="card" data-testid="carta">
      <div className={frente ? "girada" : ""}>
        <div>
          <img className="front" src={card.load} alt="Front" id={card.type} />
          <input
            type="image"
            className="back"
            src={Behind}
            alt="./Assets/Behind.jpg"
            onClick={seleccionar}
          />
        </div>
      </div>
    </div>
  );
}
