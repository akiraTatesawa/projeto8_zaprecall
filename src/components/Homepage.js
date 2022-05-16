import { useState } from "react";
import logo from "../assets/img/logo1.png";
import "../assets/styles/bonus.css";

function Options({ decks, setDeck, setDeckName, setIsOpen }) {
  function selectOption(content, name) {
    setDeck(content);
    setDeckName(name);
    setIsOpen(false);
  }
  const Option = ({ name, content }) => {
    return <li onClick={() => selectOption(content, name)}>{name}</li>;
  };

  return (
    <>
      <div className="background-options">
        <div className="options">
          <ul>
            {decks.map((item, index) => (
              <Option
                key={index}
                content={item.content}
                name={item.name}
              ></Option>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default function Homepage({ startGame, decks, setDeck }) {
  const [deckName, setDeckName] = useState("Escolha o seu deck");
  const [isOpen, setIsOpen] = useState(false);

  const openOptions = () => {
    setIsOpen(true);
  };

  return (
    <section className="homepage">
      <div className="homepage-content">
        <img src={logo} alt="logo" />
        <h1>ZapRecall</h1>

        {isOpen ? (
          <Options
            decks={decks}
            setDeck={setDeck}
            setDeckName={setDeckName}
            setIsOpen={setIsOpen}
          />
        ) : undefined}

        <button className="button-choose-deck" onClick={openOptions}>
          {deckName}
        </button>
        <button
          disabled={deckName === "Escolha o seu deck" ? true : false}
          onClick={startGame}
        >
          Iniciar Recall!
        </button>
      </div>
    </section>
  );
}
