import QuestionCard from "./QuestionCard";
import Footer from "./Footer";

export default function GameScreen() {
  const deck = [
    {
      questionTitle: " O que é JSX?",
      questionAnswer: "Uma extensão de linguagem do JavaScript",
    },
    {
      questionTitle: "O React é __",
      questionAnswer: "Uma biblioteca JavaScript para construção de interfaces",
    },
    {
      questionTitle: "Componentes devem iniciar com __ ",
      questionAnswer: "Letra maiúscula",
    },
    {
      questionTitle: "Podemos colocar __ dentro do JSX",
      questionAnswer: "Expressões",
    },
    {
      questionTitle: "Usamos o npm para __ ",
      questionAnswer: "Gerenciar os pacotes necessários e suas dependências",
    },
    {
      questionTitle: " O ReactDOM nos ajuda __",
      questionAnswer:
        "Interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      questionTitle: "Usamos props para __ ",
      questionAnswer: "Passar diferentes informações para componentes",
    },
  ];

  let answeredQuestions = 0;
  const totalQuestions = deck.length;

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
            />
          ))}
        </ul>
      </section>
      <Footer
        answeredQuestions={answeredQuestions}
        totalQuestions={totalQuestions}
      />
    </>
  );
}
