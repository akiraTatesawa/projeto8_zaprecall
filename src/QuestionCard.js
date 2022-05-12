import { useState } from "react";
import { IconContext } from "react-icons";
import { GrPlay } from "react-icons/gr";
import { TiArrowLoop } from "react-icons/ti";
import IconAnswer from "./IconAnswer";

export default function QuestionCard({
  questionNumber,
  questionTitle,
  questionAnswer,
  answersArray,
  setAnswersArray,
  setAnsweredQuestions,
  setIsEverythingCorrect
}) {
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [cardFace, setCardFace] = useState("Front");
  const [closedCard, setClosedCard] = useState(
    <>
      <div className="closed-card" onClick={openCard}>
        <span>{`Pergunta ${questionNumber}`}</span>
        <IconContext.Provider value={{ color: "#333333", className: "icons" }}>
          <GrPlay />
        </IconContext.Provider>
      </div>
    </>
  );

  function openCard() {
    setIsCardOpened(true);
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
    checkWrongAnswer(answer)
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
    setIsCardOpened(false);
    registerNewAnswer(answer, answersArray);
    changeClosedCardStyle(answer);
  }

  function flipFrontCard() {
    setCardFace("Back");
  }

  const frontCard = (
    <div className="front-card">
      <span>{questionTitle}</span>
      <IconContext.Provider
        value={{ color: "#333333", className: "icon-front-card" }}
      >
        <TiArrowLoop onClick={flipFrontCard} />
      </IconContext.Provider>
    </div>
  );

  const backCard = (
    <div className="back-card">
      <span>{questionAnswer}</span>
      <div className="back-card-buttons">
        <button
          className="wrong-answer-button"
          onClick={() => chooseAnswer("wrong")}
        >
          Não <br />
          lembrei
        </button>
        <button
          className="partially-correct-button"
          onClick={() => chooseAnswer("partially-correct")}
        >
          Quase não
          <br /> lembrei
        </button>
        <button className="zap-button" onClick={() => chooseAnswer("correct")}>
          Zap!
        </button>
      </div>
    </div>
  );

  const openedCard = (
    <div className="opened-card">
      {cardFace === "Front" ? frontCard : backCard}
    </div>
  );

  return (
    <li className={isCardOpened ? "question-opened" : ""}>
      {isCardOpened ? openedCard : closedCard}
    </li>
  );
}
