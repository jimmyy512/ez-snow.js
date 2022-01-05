const Multiply = function (a, b) {
  return a * b;
}
const Sum = function (a, b) {
  return a + b;
}

const Count = function (a, b) {
  return Multiply(a, b) + Sum(a, b);
}
export default { Sum, Multiply, Count };