import React from "react";
import "./App.css";
import Validation from "./components/Validation";
import { generateValidationOptions } from "./utils/generateValidations";

const App: React.FC = () => {
  const selectedValidations = [
    "hasNumbers",
    "hasSpecialCharacters",
    "hasUppercaseLetter",
    "hasNoConsecutiveCharacters",
  ];
  const validations = generateValidationOptions(selectedValidations);

  return (
    <div className="App">
      <h1>Password Component</h1>
      <Validation options={validations} />
    </div>
  );
};

export default App;
