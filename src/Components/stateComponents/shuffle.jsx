/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import Carta from "./carta";
import "./shuffle.scss";

import Logo from "../Assets/Logo.png";
import Usagi1 from "../Assets/Usagi1.jpg";
import Ami1 from "../Assets/Ami1.jpg";
import Rei1 from "../Assets/Rei1.jpg";
import Makoto1 from "../Assets/Makoto1.jpg";
import Minako1 from "../Assets/Minako1.jpg";
import Usagi2 from "../Assets/Usagi2.jpg";
import Ami2 from "../Assets/Ami2.jpg";
import Rei2 from "../Assets/Rei2.jpg";
import Makoto2 from "../Assets/Makoto2.jpg";
import Minako2 from "../Assets/Minako2.jpg";
import Usagi3 from "../Assets/Usagi3.jpg";
import Ami3 from "../Assets/Ami3.jpg";
import Rei3 from "../Assets/Rei3.jpg";
import Makoto3 from "../Assets/Makoto3.jpg";
import Minako3 from "../Assets/Minako3.jpg";

let images = [
  {
    type: "Usagi1",
    load: Usagi1,
    image: "./Assets/Usagi1.jpg",
    pareja: false,
  },
  {
    type: "Ami1",
    load: Ami1,
    image: "./Assets/Ami1.jpg",
    pareja: false,
  },
  {
    type: "Rei1",
    load: Rei1,
    image: "./Assets/Rei1.jpg",
    pareja: false,
  },
  {
    type: "Makoto1",
    load: Makoto1,
    image: "./Assets/Makoto1.jpg",
    pareja: false,
  },
  {
    type: "Minako1",
    load: Minako1,
    image: "./Assets/Minako1.jpg",
    pareja: false,
  },
  {
    type: "Usagi2",
    load: Usagi2,
    image: "./Assets/Usagi2.jpg",
    pareja: false,
  },
  {
    type: "Ami2",
    load: Ami2,
    image: "./Assets/Ami2.jpg",
    pareja: false,
  },
  {
    type: "Rei2",
    load: Rei2,
    image: "./Assets/Rei2.jpg",
    pareja: false,
  },
  {
    type: "Makoto2",
    load: Makoto2,
    image: "./Assets/Makoto2.jpg",
    pareja: false,
  },
  {
    type: "Minako2",
    load: Minako2,
    image: "./Assets/Minako2.jpg",
    pareja: false,
  },
  {
    type: "Usagi3",
    load: Usagi3,
    image: "./Assets/Usagi3.jpg",
    pareja: false,
  },
  {
    type: "Ami3",
    load: Ami3,
    image: "./Assets/Ami3.jpg",
    pareja: false,
  },
  {
    type: "Rei3",
    load: Rei3,
    image: "./Assets/Rei3.jpg",
    pareja: false,
  },
  {
    type: "Makoto3",
    load: Makoto3,
    image: "./Assets/Makoto3.jpg",
    pareja: false,
  },
  {
    type: "Minako3",
    load: Minako3,
    image: "./Assets/Minako3.jpg",
    pareja: false,
  },
];

export default function Shuffle() {
  const [color, changeColor] = useState("pink");
  document.body.style.backgroundColor = color;

  const [cards, setCards] = useState([]);
  const [Primero, setPrimero] = useState(null);
  const [Segundo, setSegundo] = useState(null);
  const [Desactivado, setDesactivado] = useState(false);
  const [Turnos, setTurnos] = useState(0);
  const [visible, setVisible] = useState("hidden");

  const seleccion = (carta) => {
    if (Primero == null) {
      setPrimero(carta);
    } else {
      setSegundo(carta);
    }
  };

  const resetear = () => {
    setPrimero(null);
    setSegundo(null);
    setDesactivado(false);
    setTurnos(Turnos + 1);
  };
  useEffect(() => {
    if (Primero != null && Segundo != null) {
      setDesactivado(true);
      if (Primero.type === Segundo.type) {
        setCards((previas) =>
          previas.map((card) => {
            if (card.type === Primero.type) {
              return { ...card, pareja: true };
            }
            return card;
          })
        );
      }
      setTimeout(() => resetear(), 1250);
    }
  }, [Primero, Segundo]);
  const ShuffleCards = () => {
    const shuffled = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffled);
    setTurnos(0);
    setVisible("hidden");
  };

  const ShuffleCards1 = () => {
    images = [
      {
        type: "Usagi1",
        load: Usagi1,
        image: "./Assets/Usagi1.jpg",
        pareja: false,
      },
      {
        type: "Ami1",
        load: Ami1,
        image: "./Assets/Ami1.jpg",
        pareja: false,
      },
      {
        type: "Rei1",
        load: Rei1,
        image: "./Assets/Rei1.jpg",
        pareja: false,
      },
      {
        type: "Makoto1",
        load: Makoto1,
        image: "./Assets/Makoto1.jpg",
        pareja: false,
      },
      {
        type: "Minako1",
        load: Minako1,
        image: "./Assets/Minako1.jpg",
        pareja: false,
      },
    ];
    ShuffleCards();
  };

  const ShuffleCards2 = () => {
    images = [
      {
        type: "Usagi1",
        load: Usagi1,
        image: "./Assets/Usagi1.jpg",
        pareja: false,
      },
      {
        type: "Ami1",
        load: Ami1,
        image: "./Assets/Ami1.jpg",
        pareja: false,
      },
      {
        type: "Rei1",
        load: Rei1,
        image: "./Assets/Rei1.jpg",
        pareja: false,
      },
      {
        type: "Makoto1",
        load: Makoto1,
        image: "./Assets/Makoto1.jpg",
        pareja: false,
      },
      {
        type: "Minako1",
        load: Minako1,
        image: "./Assets/Minako1.jpg",
        pareja: false,
      },
      {
        type: "Usagi2",
        load: Usagi2,
        image: "./Assets/Usagi2.jpg",
        pareja: false,
      },
      {
        type: "Ami2",
        load: Ami2,
        image: "./Assets/Ami2.jpg",
        pareja: false,
      },
      {
        type: "Rei2",
        load: Rei2,
        image: "./Assets/Rei2.jpg",
        pareja: false,
      },
      {
        type: "Makoto2",
        load: Makoto2,
        image: "./Assets/Makoto2.jpg",
        pareja: false,
      },
      {
        type: "Minako2",
        load: Minako2,
        image: "./Assets/Minako2.jpg",
        pareja: false,
      },
    ];
    ShuffleCards();
  };

  const ShuffleCards3 = () => {
    images = [
      {
        type: "Usagi1",
        load: Usagi1,
        image: "./Assets/Usagi1.jpg",
        pareja: false,
      },
      {
        type: "Ami1",
        load: Ami1,
        image: "./Assets/Ami1.jpg",
        pareja: false,
      },
      {
        type: "Rei1",
        load: Rei1,
        image: "./Assets/Rei1.jpg",
        pareja: false,
      },
      {
        type: "Makoto1",
        load: Makoto1,
        image: "./Assets/Makoto1.jpg",
        pareja: false,
      },
      {
        type: "Minako1",
        load: Minako1,
        image: "./Assets/Minako1.jpg",
        pareja: false,
      },
      {
        type: "Usagi2",
        load: Usagi2,
        image: "./Assets/Usagi2.jpg",
        pareja: false,
      },
      {
        type: "Ami2",
        load: Ami2,
        image: "./Assets/Ami2.jpg",
        pareja: false,
      },
      {
        type: "Rei2",
        load: Rei2,
        image: "./Assets/Rei2.jpg",
        pareja: false,
      },
      {
        type: "Makoto2",
        load: Makoto2,
        image: "./Assets/Makoto2.jpg",
        pareja: false,
      },
      {
        type: "Minako2",
        load: Minako2,
        image: "./Assets/Minako2.jpg",
        pareja: false,
      },
      {
        type: "Usagi3",
        load: Usagi3,
        image: "./Assets/Usagi3.jpg",
        pareja: false,
      },
      {
        type: "Ami3",
        load: Ami3,
        image: "./Assets/Ami3.jpg",
        pareja: false,
      },
      {
        type: "Rei3",
        load: Rei3,
        image: "./Assets/Rei3.jpg",
        pareja: false,
      },
      {
        type: "Makoto3",
        load: Makoto3,
        image: "./Assets/Makoto3.jpg",
        pareja: false,
      },
      {
        type: "Minako3",
        load: Minako3,
        image: "./Assets/Minako3.jpg",
        pareja: false,
      },
    ];
    ShuffleCards();
  };

  useEffect(() => {
    setTimeout(() => {
      const result = cards.map((a) => a.pareja);
      if (
        result.every((element) => element === true) === true &&
        result.length !== 0
      ) {
        setVisible("visible");
      }
    }, 1200);
  }, [cards]);

  useEffect(() => {
    ShuffleCards2();
  }, []);

  return (
    <div className="card" data-testid="card">
      <img className="behind" src={Logo} alt="Logo" height="100" id="Logo" />
      <div>
        <p>
          ¡Juega esta juego de memoria y consigue las parejas en la menor
          cantidad de turns posibles!
          <br />
          ¡Elije tu dificultad y empieza a jugar! Esta en normal por defecto
        </p>
        <button
          className="boton"
          onClick={ShuffleCards1}
          id="Facil"
          type="button"
        >
          Facil
        </button>
        <button
          className="boton"
          onClick={ShuffleCards2}
          id="Normal"
          type="button"
        >
          Normal
        </button>
        <button
          className="boton"
          onClick={ShuffleCards3}
          id="Dificil"
          type="button"
        >
          Dificil
        </button>
        <h3 className="Turnos">
          Turnos:
          {Turnos}
        </h3>
      </div>
      <div className="card-grid">
        {cards.map((card) => (
          <Carta
            key={card.id}
            card={card}
            seleccion={seleccion}
            frente={card === Primero || card === Segundo || card.pareja}
            unactive={Desactivado}
          />
        ))}
      </div>
      <div className="Ganar" style={{ visibility: visible }}>
        <p>
          ¡¡¡Ganaste!!! Intenta de nuevo o otra dificultad, o intenta mejorar y
          record
        </p>
        <br />
      </div>
    </div>
  );
}
