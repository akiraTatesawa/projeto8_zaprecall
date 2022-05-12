import { IconContext } from "react-icons";
import {
  BsFillXCircleFill,
  BsQuestionCircleFill,
  BsCheckCircleFill,
} from "react-icons/bs";

export default function Footer({ answeredQuestions, totalQuestions }) {
  return (
    <footer>
      <span>{`${answeredQuestions}/${totalQuestions} CONCLUÍDOS`}</span>
      <div>
        <IconContext.Provider
          value={{ color: "#2fbe34", className: "answers-icons icons " }}
        >
          <BsCheckCircleFill />
        </IconContext.Provider>
        <IconContext.Provider
          value={{ color: "#ff3030", className: "answers-icons icons " }}
        >
          <BsFillXCircleFill />
        </IconContext.Provider>
        <IconContext.Provider
          value={{ color: "#ff922e", className: "answers-icons icons " }}
        >
          <BsQuestionCircleFill />
        </IconContext.Provider>
      </div>
    </footer>
  );
}
