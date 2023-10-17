import React from "react";
import "./App.css";
import { generateValidationOptions } from "./utils/generateValidations";
import { Validation } from "./components/Validation";

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
