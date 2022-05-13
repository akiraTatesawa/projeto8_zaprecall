import { useState, useRef, useEffect } from "react";
import logo from "../assets/img/logo1.png";
import QuestionCard from "./QuestionCard";
import Footer from "./Footer";
import IconAnswer from "./IconAnswer";
import ResultsMessage from "./ResultsMessage";

export default function GameScreen({ deck, restartGame }) {
  const totalQuestions = deck.length;

  const [answersArray, setAnswersArray] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState(
    answersArray.length
  );
  const [isEverythingCorrect, setIsEverythingCorrect] = useState(true);
  const scrollRef = useRef();

  function scrollToBottom() {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    if (answeredQuestions === totalQuestions) {
      scrollToBottom();
    }
  });

  return (
    <>
      <header>
        <img src={logo} alt="logo" />
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

      <div
        className={
          answeredQuestions === totalQuestions ? "spacing-179" : "spacing-70"
        }
        ref={scrollRef}
      ></div>
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
        {answeredQuestions === totalQuestions ? (
          <button onClick={restartGame}>REINICIAR RECALL</button>
        ) : undefined}
      </Footer>
    </>
  );
}
