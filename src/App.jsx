import styles from "./App.module.css";
import Display from "./components/Display";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setDisplay("");
    } else if (buttonText === "=") {
      let result = eval(display);
      setDisplay(result);
    } else {
      const newValue = display + buttonText;
      setDisplay(newValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display display={display}></Display>
      <Button onButtonClick={onButtonClick}></Button>
    </div>
  );
}

export default App;
