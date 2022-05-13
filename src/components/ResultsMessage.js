import partyEmoji from "../assets/img/party_emoji.png";
import sadEmoji from "../assets/img/sad_emoji.png";

export default function ResultsMessage({ isEverythingCorrect }) {
  if (isEverythingCorrect) {
    return (
      <div className="results-message">
        <div className="results-title">
          <img src={partyEmoji} alt="party emoji" />
          <h3>Parabéns</h3>
        </div>
        <p>Você não esqueceu de nenhum flashcard!</p>
      </div>
    );
  } else {
    return (
      <div className="results-message">
        <div className="results-title">
          <img src={sadEmoji} alt="sad emoji" />
          <h3>Putz...</h3>
        </div>
        <p>Ainda faltam alguns... Mas não desanime!</p>
      </div>
    );
  }
}
