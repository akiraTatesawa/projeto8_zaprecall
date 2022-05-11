import { useState } from "react";
import QuestionCard from "./QuestionCard";

function Homepage() {
  const [isHomepageHidden, setIsHomepageHidden] = useState(false);

  function hideHomepage() {
    setIsHomepageHidden(true);
  }

  return (
    <section className={`homepage ${isHomepageHidden ? "hidden" : ""}`}>
      <div className="homepage-content">
        <img src="./assets/img/logo1.png" alt="logo" />
        <h1>ZapRecall</h1>
        <button onClick={hideHomepage}>Iniciar Recall!</button>
      </div>
    </section>
  );
}

function GameScreen() {
  const deck = [
    {
      questionTitle: "ugabuga uga buga ahsud ajidja iajsdija",
      questionAnswer: "resposta da pergunta",
    },
    {
      questionTitle: "texto da pergunta 2 2 2 2 2",
      questionAnswer: "resposta da pergunta",
    },
    {
      questionTitle: "texto da pergunta 2222222222222222222",
      questionAnswer: "resposta da pergunta",
    },
    {
      questionTitle: "texto da pergunta",
      questionAnswer: "resposta da pergunta",
    },
    {
      questionTitle: "texto da pergunta",
      questionAnswer: "resposta da pergunta",
    },
    {
      questionTitle: "texto da pergunta",
      questionAnswer: "resposta da pergunta",
    },
    {
      questionTitle: "texto da pergunta texto da pergunta testaaa",
      questionAnswer: "resposta da pergunta",
    },
  ];

  let finishedQuestions = 0;
  const totalQuestions = deck.length;

  return (
    <>
      <header>
        <img src="./assets/img/logo1.png" alt="logo" />
        <h2>ZapRecall</h2>
      </header>
      <section className="question-container">
        <ul>
          {deck.map((post, index) => (
            <QuestionCard
              key={index}
              questionNumber={index + 1}
              questionTitle={post.questionTitle}
              questionAnswer={post.questionAnswer}
            />
          ))}
        </ul>
      </section>
      <footer>
        <span>{`${finishedQuestions}/${totalQuestions} CONCLUÍDOS`}</span>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <>
      {/* <Homepage /> */}
      <GameScreen />
    </>
  );
}
