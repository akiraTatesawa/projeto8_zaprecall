import { useState } from "react";
import QuestionCard from "./QuestionCard";
import Footer from "./Footer";
import IconAnswer from "./IconAnswer";
import ResultsMessage from "./ResultsMessage";

export default function GameScreen({ deck }) {
  const totalQuestions = deck.length;

  const [answersArray, setAnswersArray] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState(
    answersArray.length
  );
  const [isEverythingCorrect, setIsEverythingCorrect] = useState(true);

  return (
    <>
      <header>
        <img src="./assets/img/logo1.png" alt="logo" />
        <h2>ZapRecall</h2>
      </header>

      <section className="question-container">
        <ul>
          {deck.map((deckItem, index) => (
            <QuestionCard
              key={index}
              questionNumber={index + 1}
              deckItem={deckItem}
              answersArray={answersArray}
              setAnswersArray={setAnswersArray}
              setAnsweredQuestions={setAnsweredQuestions}
              setIsEverythingCorrect={setIsEverythingCorrect}
            />
          ))}
        </ul>
      </section>

      <Footer>
        {answeredQuestions === totalQuestions ? (
          <ResultsMessage isEverythingCorrect={isEverythingCorrect} />
        ) : undefined}
        <span>{`${answeredQuestions}/${totalQuestions} CONCLUÍDOS`}</span>
        <div>
          {answersArray.map((item, index) => (
            <IconAnswer typeOfAnswer={item.answer} key={index} />
          ))}
        </div>
      </Footer>
    </>
  );
}
