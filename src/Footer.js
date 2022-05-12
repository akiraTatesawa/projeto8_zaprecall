function Message({ isEverythingCorrect }) {
  if (isEverythingCorrect) {
    return (
      <div className="results-message">
        <div className="results-title">
          <img src="./assets/img/party_emoji.png" alt="party emoji" />
          <h3>Parabéns</h3>
        </div>
        <p>Você não esqueceu de nenhum flashcard!</p>
      </div>
    );
  } else {
    return (
      <div className="results-message">
        <div className="results-title">
          <img src="./assets/img/sad_emoji.png" alt="sad emoji" />
          <h3>Putz...</h3>
        </div>
        <p>Ainda faltam alguns... Mas não desanime!</p>
      </div>
    );
  }
}

export default function Footer({
  answeredQuestions,
  totalQuestions,
  isEverythingCorrect,
  children,
}) {
  return (
    <footer>
      {answeredQuestions === totalQuestions ? (
        <Message isEverythingCorrect={isEverythingCorrect} />
      ) : undefined}
      {children}
    </footer>
  );
}
