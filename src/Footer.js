import IconAnswer from "./IconAnswer";

export default function Footer({
  answeredQuestions,
  totalQuestions,
  answersArray,
}) {

  if (answeredQuestions === totalQuestions) {
    setTimeout(() => alert('acabou'), 1000)
  }
  
  return (
    <footer>
      <span>{`${answeredQuestions}/${totalQuestions} CONCLUÍDOS`}</span>
      <div>
        {answersArray.map((item, index) => (
          <IconAnswer typeOfAnswer={item.answer} key={index} />
        ))}
      </div>
    </footer>
  );
}
