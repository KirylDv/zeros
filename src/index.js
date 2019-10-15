function factorial(num){
  if (num <= 1n)
    return 1n;
  return factorial(num-1n) * num;
}

function double_factorial(num){
  if (num <= 1n)
    return 1n;
  return double_factorial(num-2n) * num;
}

module.exports = function zeros(expression) {
  let a = expression.split("*");
  let resultNum = 1n;
  a.forEach(elem => {
    if (elem[elem.length-2] === "!")
      resultNum *= double_factorial( BigInt(elem.slice(0, -2)) );
    else
      resultNum *= factorial( BigInt(elem.slice(0, -1)) );
  });
  a = String(resultNum);
  resultNum = 0;
  console.log(a);
  for (let i = a.length-1; i > 0; i--) {
    if(a[i] !== "0")
      break;
    resultNum++;
  }
  return resultNum;
}
