import { IconContext } from "react-icons";
import {
  BsFillXCircleFill,
  BsQuestionCircleFill,
  BsCheckCircleFill,
} from "react-icons/bs";

export default function IconAnswer({ typeOfAnswer }) {
  let icon;
  if (typeOfAnswer === "correct") {
    icon = (
      <IconContext.Provider
        value={{ color: "#2fbe34", className: "answers-icons icons " }}
      >
        <BsCheckCircleFill />
      </IconContext.Provider>
    );
  }
  if (typeOfAnswer === "wrong") {
    icon = (
      <IconContext.Provider
        value={{ color: "#ff3030", className: "answers-icons icons " }}
      >
        <BsFillXCircleFill />
      </IconContext.Provider>
    );
  }
  if (typeOfAnswer === "partially-correct") {
    icon = (
      <IconContext.Provider
        value={{ color: "#ff922e", className: "answers-icons icons " }}
      >
        <BsQuestionCircleFill />
      </IconContext.Provider>
    );
  }
  return icon;
}
