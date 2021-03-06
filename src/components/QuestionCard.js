import { useState } from "react";
import { IconContext } from "react-icons";
import { GrPlay } from "react-icons/gr";
import { TiArrowLoop } from "react-icons/ti";
import IconAnswer from "./IconAnswer";

export default function QuestionCard({
  questionNumber,
  deckItem,
  answersArray,
  setAnswersArray,
  setAnsweredQuestions,
  setIsEverythingCorrect,
}) {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cardFace, setCardFace] = useState("Front");
  const [closedCard, setClosedCard] = useState(
    <>
      <div className="closed-card" onClick={opensCard}>
        <span>{`Pergunta ${questionNumber}`}</span>
        <IconContext.Provider value={{ color: "#333333", className: "icons" }}>
          <GrPlay />
        </IconContext.Provider>
      </div>
    </>
  );

  function opensCard() {
    setIsCardOpen(true);
  }

  function checkWrongAnswer(answer) {
    if (answer === "wrong") {
      setIsEverythingCorrect(false);
    }
  }

  function registerNewAnswer(answer, answersArray) {
    const newAnswer = { answer: answer };
    const newArray = [...answersArray, newAnswer];
    setAnswersArray(newArray);
    setAnsweredQuestions(newArray.length);
    checkWrongAnswer(answer);
  }

  function changeClosedCardStyle(answer) {
    setClosedCard(
      <>
        <div className="closed-card">
          <span className={answer}>{`Pergunta ${questionNumber}`}</span>
          <IconAnswer typeOfAnswer={answer} />
        </div>
      </>
    );
  }

  function chooseAnswer(answer) {
    setIsCardOpen(false);
    registerNewAnswer(answer, answersArray);
    changeClosedCardStyle(answer);
  }

  function flipFrontCard() {
    setCardFace("Back");
  }

  const frontCard = (
    <div className="front-card">
      <span>{deckItem.questionTitle}</span>
      <IconContext.Provider
        value={{ color: "#333333", className: "icon-front-card" }}
      >
        <TiArrowLoop onClick={flipFrontCard} />
      </IconContext.Provider>
    </div>
  );

  const backCard = (
    <div className="back-card">
      <span>{deckItem.questionAnswer}</span>
      <div className="back-card-buttons">
        <button
          className="wrong-answer-button"
          onClick={() => chooseAnswer("wrong")}
        >
          N??o <br />
          lembrei
        </button>
        <button
          className="partially-correct-button"
          onClick={() => chooseAnswer("partially-correct")}
        >
          Quase n??o
          <br /> lembrei
        </button>
        <button className="zap-button" onClick={() => chooseAnswer("correct")}>
          Zap!
        </button>
      </div>
    </div>
  );

  const openCard = (
    <div className="opened-card">
      {cardFace === "Front" ? frontCard : backCard}
    </div>
  );

  return (
    <li className={isCardOpen ? "question-opened" : ""}>
      {isCardOpen ? openCard : closedCard}
    </li>
  );
}
