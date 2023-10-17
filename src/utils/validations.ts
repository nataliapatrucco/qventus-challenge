export function hasSpecialCharacters(password: string) {
  return /[!@#$%^&*]/.test(password);
}

export function hasNumbers(password: string) {
  return /\d/.test(password);
}

export function hasUppercaseLetter(password: string) {
  return /[A-Z]/.test(password);
}

export function hasNoConsecutiveCharacters(password: string) {
  if (password.length <= 1) {
    return false; // Don't validate if length is 0 or 1
  }
  for (let i = 0; i < password.length - 1; i++) {
    const currentChar = password[i];
    const nextChar = password[i + 1];

    if (nextChar.charCodeAt(0) - currentChar.charCodeAt(0) === 1) {
      return false; // Consecutive characters found
    }
  }

  return true; // No consecutive characters found
}
