import { useState } from "react";
import Homepage from "./Homepage";
import GameScreen from "./GameScreen";
import '../assets/styles/reset.css';
import '../assets/styles/styles.css';

export default function App() {
  const [screen, setScreen] = useState("Homepage");
  const questionsAnswersArray = [
    {
      questionTitle: " O que é JSX?",
      questionAnswer: "Uma extensão de linguagem do JavaScript",
    },
    {
      questionTitle: "O React é __",
      questionAnswer: "Uma biblioteca JavaScript para construção de interfaces",
    },
    {
      questionTitle: "Componentes devem iniciar com __ ",
      questionAnswer: "Letra maiúscula",
    },
    {
      questionTitle: "Podemos colocar __ dentro do JSX",
      questionAnswer: "Expressões",
    },
    {
      questionTitle: "Usamos o npm para __ ",
      questionAnswer: "Gerenciar os pacotes necessários e suas dependências",
    },
    {
      questionTitle: " O ReactDOM nos ajuda __",
      questionAnswer:
        "Interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      questionTitle: "Usamos props para __ ",
      questionAnswer: "Passar diferentes informações para componentes",
    },
  ];
  const [deck, setDeck] = useState(questionsAnswersArray);

  function comparador() {
    return Math.random() - 0.5;
  }

  function startGame() {
    setScreen("GameScreen");
    setDeck(deck.sort(comparador));
  }

  return (
    <>
      {screen === "Homepage" ? (
        <Homepage startGame={startGame} />
      ) : (
        <GameScreen deck={deck} />
      )}
    </>
  );
}
