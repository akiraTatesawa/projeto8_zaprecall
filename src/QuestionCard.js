import { useState } from "react";
import { IconContext } from "react-icons";
import { GrPlay } from "react-icons/gr";
import { TiArrowLoop } from "react-icons/ti";

export default function QuestionCard({
  questionNumber,
  questionTitle,
  questionAnswer,
}) {
  const [isCardOpened, setIsCardOpened] = useState(false);

  function openCard() {
    setIsCardOpened(true);
  }

  return (
    <li className={isCardOpened ? "question-opened" : ""} onClick={openCard}>
      <div className={`closed-card ${isCardOpened ? "hidden" : ""}`}>
        <span>{`Pergunta ${questionNumber}`}</span>
        <IconContext.Provider value={{ color: "#333333", className: "icons" }}>
          <GrPlay />
        </IconContext.Provider>
      </div>

      <div className={`opened-card ${isCardOpened ? "" : "hidden"}`}>
        <div className="front-card">
          <span>{questionTitle}</span>
          <IconContext.Provider
            value={{ color: "#333333", className: "icon-front-card" }}
          >
            <TiArrowLoop />
          </IconContext.Provider>
        </div>

        <div className="back-card">
          <span>{questionAnswer}</span>
          <div className="back-card-buttons">
          <button className="wrong-answer-button">Não <br/>lembrei</button>
          <button className="partially-correct-button">Quase não<br/> lembrei</button>
          <button className="zap-button">Zap!</button>
          </div>
        </div>
      </div>
    </li>
  );
}
