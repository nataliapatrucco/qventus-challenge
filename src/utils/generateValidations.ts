import {
  hasNumbers,
  hasSpecialCharacters,
  hasUppercaseLetter,
  hasNoConsecutiveCharacters,
} from "./validations";

interface ValidationType {
  [key: string]: {
    message: string;
    validation: (password: string) => boolean;
  };
}

const validationTypes: ValidationType = {
  hasNumbers: {
    message: "Has a number 0-9",
    validation: hasNumbers,
  },
  hasSpecialCharacters: {
    message: "Has a special char !@#$%^&*",
    validation: hasSpecialCharacters,
  },
  hasUppercaseLetter: {
    message: "Has uppercase Letter",
    validation: hasUppercaseLetter,
  },
  hasNoConsecutiveCharacters: {
    message: "Has no consecutive characters",
    validation: hasNoConsecutiveCharacters,
  },
};

export const generateValidationOptions = (selectedValidations: string[]) => {
  return selectedValidations.map(
    (validationType) => validationTypes[validationType]
  );
};
