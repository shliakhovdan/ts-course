interface IReverseAndAddResult {
  result: number | null;
  steps: number;
}

type PalindromeFunctionType = (number: number) => boolean;
type ReverseAndAddFunctionType = (number: number, maximumSteps: number) => IReverseAndAddResult;

const isPalindrome: PalindromeFunctionType = (number: number): boolean => {
  const numString = number.toString();
  const reversedString = numString.split('').reverse().join('');
  return numString === reversedString;
};

const reverseAndAdd: ReverseAndAddFunctionType = (number: number, maximumSteps: number): IReverseAndAddResult => {
  let steps = 0;

  while (steps < maximumSteps) {
    const numString = number.toString();
    const reversedString = numString.split('').reverse().join('');
    const reversedNumber = parseInt(reversedString, 10);

    number += reversedNumber;
    steps++;

    if (isPalindrome(number)) return { result: number, steps };
  }

  return { result: null, steps };
};
