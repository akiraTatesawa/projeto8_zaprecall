import { useState } from "react";
import QuestionCard from "./QuestionCard";
import Footer from "./Footer";

export default function GameScreen({deck}) {
  
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
          {deck.map((post, index) => (
            <QuestionCard
              key={index}
              questionNumber={index + 1}
              questionTitle={post.questionTitle}
              questionAnswer={post.questionAnswer}
              answersArray={answersArray}
              setAnswersArray={setAnswersArray}
              setAnsweredQuestions={setAnsweredQuestions}
              isEverythingCorrect={isEverythingCorrect}
              setIsEverythingCorrect={setIsEverythingCorrect}
            />
          ))}
        </ul>
      </section>
      <Footer
        answeredQuestions={answeredQuestions}
        totalQuestions={totalQuestions}
        answersArray={answersArray}
        isEverythingCorrect={isEverythingCorrect}
      />
    </>
  );
}
