import IconAnswer from "./IconAnswer";

export default function Footer({
  answeredQuestions,
  totalQuestions,
  answersArray,
}) {
  return (
    <footer>
      {/* <div className="results-message">
        <div className="results-title">
          <img src="./assets/img/party_emoji.png" alt="party emoji" />
          <h3>Parabéns</h3>
        </div>
        <p>Você não esqueceu de nenhum flashcard!</p>
      </div> */}

      {/* <div className="results-message">
        <div className="results-title">
          <img src="./assets/img/sad_emoji.png" alt="sad emoji" />
          <h3>Putz...</h3>
        </div>
        <p>Ainda faltam alguns... Mas não desanime!</p>
      </div> */}

      <span>{`${answeredQuestions}/${totalQuestions} CONCLUÍDOS`}</span>
      <div>
        {answersArray.map((item, index) => (
          <IconAnswer typeOfAnswer={item.answer} key={index} />
        ))}
      </div>
    </footer>
  );
}
