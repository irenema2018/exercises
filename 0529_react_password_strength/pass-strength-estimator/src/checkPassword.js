export default function checkPassword (password) {
  let result = {
    score: 0,
    hasLowerCase: false,
    hasUpperCase: false,
    hasNumber: false,
    hasNonAlphaNumeric: false,
    isOver8Char: false,
    isOver12Char: false
  }

  // Regular Expression
  if (/[a-z]/.test(password)) {
    result['hasLowerCase'] = true;
    result['score'] += 1;
  }

  if (/[A-Z]/.test(password)) {
    result['hasUpperCase'] = true;
    result['score'] += 1;
  }

  //  /\d/
  if (/[0-9]/.test(password)) {
    result['hasNumber'] = true;
    result['score'] += 1;
  }

  if (/[^a-zA-Z0-9]/.test(password)) {
    result['hasNonAlphaNumeric'] = true;
    result['score'] += 1;
  }

  if (password.length >= 8) {
    result['isOver8Char'] = true;
    result['score'] += 1;
  }

  if (password.length >= 12) {
    result['isOver12Char'] = true;
    result['score'] += 1;
  }

  return result;
}
   