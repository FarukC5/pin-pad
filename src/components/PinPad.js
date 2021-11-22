import { useState } from "react";
import "../index.css";

function PinPad() {
  const password = "1234";
  const [result, setResult] = useState("");
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [disabled2, setDisabled2] = useState(false);
  const [inputType, setInputType] = useState("password");

  const handleClick = (e) => {
    if (result.length < 4) {
      setInputType("password");
      setResult(result.concat(e.target.name));
    }
  };

  const handleSubmit = () => {
    if (result !== "ERROR" && result !== " OK " && result !== "") {
      setDisabled2(false);
      setInputType("text");
      if (password === result) {
        setResult(" OK ");
        setCount(0);
      } else if (count > 1) {
        setResult("LOCKED");
        setDisabled(!disabled);
        setTimeout(() => {setDisabled(false); setResult("");}, 30000);
        setCount(0);
      } else {
        setResult("ERROR");
        setCount(count + 1);
      }
    }
  };

  const clear = () => {
    setResult("");
  };

  return (
    <div className="Pin">
      <header className="Pin-header">
        <div className="result">
          <input disabled={!disabled2} value={result} type={inputType}/>
        </div>
        <button name="1" onClick={handleClick} disabled={disabled}>
          1
        </button>
        <button name="2" onClick={handleClick} disabled={disabled}>
          2
        </button>
        <button name="3" onClick={handleClick} disabled={disabled}>
          3
        </button>
        <button name="4" onClick={handleClick} disabled={disabled}>
          4
        </button>
        <button name="5" onClick={handleClick} disabled={disabled}>
          5
        </button>
        <button name="6" onClick={handleClick} disabled={disabled}>
          6
        </button>
        <button name="7" onClick={handleClick} disabled={disabled}>
          7
        </button>
        <button name="8" onClick={handleClick} disabled={disabled}>
          8
        </button>
        <button name="9" onClick={handleClick} disabled={disabled}>
          9
        </button>
        <button onClick={clear} id="clear" disabled={disabled}>
          Clear
        </button>
        <button name="0" onClick={handleClick} disabled={disabled}>
          0
        </button>
        <button onClick={handleSubmit} disabled={disabled}>
          Enter
        </button>
      </header>
    </div>
  );
}

export default PinPad;
