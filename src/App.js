import { useState } from "react";
import Homepage from "./Homepage";
import GameScreen from "./GameScreen";

export default function App() {
  const [screen, setScreen] = useState("Homepage");

  function changeHomepageToGameScreen() {
    setScreen("GameScreen");
  }

  return (
    <>
      {screen === "Homepage" ? (
        <Homepage changeScreen={changeHomepageToGameScreen} />
      ) : (
        <GameScreen />
      )}
    </>
  );
}
