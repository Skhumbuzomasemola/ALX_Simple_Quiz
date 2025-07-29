function subtraction(number1, number2) {
    return number1 - number2;
}
document.getElementById('subtraction').addEventListener('click', function() {
  const number1 = 
    parseFloat(document.getElementById('number1').value);
  const number2 = 
    parseFloat(document.getElementById('number2').value);
  const result = subtraction(number1, number2);
  document.getElementById('calculation-result').textContent = result;
});

function multiply(number1, number2) {
    return number1 * number2;
}
document.getElementById('multiply').addEventListener('click', function() {
  const number1 = parseFloat(document.getElementById('number1').value);
  const number2 = parseFloat(document.getElementById('number2').value);
  const result = multiply(number1, number2);
  document.getElementById('calculation-result').textContent = result;
});

function divide(number1, number2) {
    return number1 / number2;
}
document.getElementById('divide').addEventListener('click', function() {
  const number1 = parseFloat(document.getElementById('number1').value);
  const number2 = parseFloat(document.getElementById('number2').value);
  const result = divide(number1, number2);
  document.getElementById('calculation-result').textContent = result;
});

function add(number1, number2) {
    return number1 + number2;
}
document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
