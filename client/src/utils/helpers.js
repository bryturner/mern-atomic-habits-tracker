export const createNumArray = number => {
  const numberArray = Array.from({ length: number }, (_, i) => {
    i++;
  });

  return numberArray;
};
