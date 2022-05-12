import { useState } from "react";
import { IconContext } from "react-icons";
import { GrPlay } from "react-icons/gr";
import { TiArrowLoop } from "react-icons/ti";
import {
  BsFillXCircleFill,
  BsQuestionCircleFill,
  BsCheckCircleFill,
} from "react-icons/bs";

export default function QuestionCard({
  questionNumber,
  questionTitle,
  questionAnswer,
}) {
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [cardFace, setCardFace] = useState("Front");

  function openCard() {
    setIsCardOpened(true);
  }

  function closeCard(answer) {
    setIsCardOpened(false);
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
          onClick={() => closeCard("wrong")}
        >
          Não <br />
          lembrei
        </button>
        <button
          className="partially-correct-button"
          onClick={() => closeCard("partially correct")}
        >
          Quase não
          <br /> lembrei
        </button>
        <button className="zap-button"
         onClick={() => closeCard("correct")}>
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

  const closedCard = (
    <>
      <div className="closed-card" onClick={openCard}>
        <span>{`Pergunta ${questionNumber}`}</span>
        <IconContext.Provider value={{ color: "#333333", className: "icons" }}>
          <GrPlay />
        </IconContext.Provider>
      </div>
    </>
  );

  return (
    <li className={isCardOpened ? "question-opened" : ""}>
      {isCardOpened ? openedCard : closedCard}
    </li>
  );
}
