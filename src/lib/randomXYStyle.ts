export const randomXYStyle = (max: number, min: number) => {
  const negativeOrPositive = Math.random() < 0.9 ? -1 : 1;
  const randomNumber =
    Math.ceil(Math.random() * max) + min * negativeOrPositive;
  return randomNumber;
};
