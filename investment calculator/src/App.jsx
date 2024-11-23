import Header from "./components/Header";
import Result from "./components/Result";
import User from "./components/User";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <main>
      <Header />
      <User userInput={userInput} onChangeInput={handleChange} />
      {!inputIsValid && <p className="center">1 이상의 숫자를 입력해 주세요</p>}
      {inputIsValid && <Result userInput={userInput} />}
    </main>
  );
}

export default App;
