import Header from "./components/Header";
import Result from "./components/Result";
import User from "./components/User";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <main>
      <Header />
      <User userInput={userInput} onChangeInput={handleChange} />
      <Result />
    </main>
  );
}

export default App;
