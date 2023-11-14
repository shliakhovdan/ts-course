const generatePermutations = <T>(uniqueElements: T[]): T[][] => {
  if (uniqueElements.length === 1) return [uniqueElements];

  const permutations: T[][] = [];

  uniqueElements.forEach((currentElement, index) => {
    const remainingElements = [...uniqueElements.slice(0, index), ...uniqueElements.slice(index + 1)];
    const remainingPermutations = generatePermutations(remainingElements);

    remainingPermutations.forEach(permutation => {
      permutations.push([currentElement, ...permutation]);
    });
  });

  return permutations;
};

const array = [1, 3, 5];
const allPermutations = generatePermutations(array);
