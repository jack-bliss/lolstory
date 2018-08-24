export const RoundToN = (x: number, n: number): number => {

  return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);

};
