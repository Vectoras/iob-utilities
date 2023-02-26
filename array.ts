export const chunkArray: <T>(array: T[], chunkSize: number) => T[][] = (array, chunkSize) => {
  const result: T[][] = [];
  const arrayCopy = [...array];

  while (arrayCopy.length > 0) {
    result.push(arrayCopy.splice(0, chunkSize));
  }
  return result;
};
