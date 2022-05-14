import { useState } from "react";
import Homepage from "./Homepage";
import GameScreen from "./GameScreen";
import { decksDB } from "./decksDB";
import "../assets/styles/reset.css";
import "../assets/styles/styles.css";

export default function App() {
  const [screen, setScreen] = useState("Homepage");
  const decks = decksDB();
  const [deck, setDeck] = useState([]);

  function comparador() {
    return Math.random() - 0.5;
  }

  function startGame() {
    setScreen("GameScreen");
    setDeck(deck.sort(comparador));
  }

  function restartGame() {
    setScreen("Homepage");
  }

  return (
    <>
      {screen === "Homepage" ? (
        <Homepage
          startGame={startGame}
          decks={decks}
          setDeck={setDeck}
          deck={deck}
        />
      ) : (
        <GameScreen deck={deck} restartGame={restartGame} />
      )}
    </>
  );
}
