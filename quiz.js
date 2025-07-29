function checkAnswer() {
    // Function body
  let input = document.getElementById("answer").value;
  let correctAnswer = "4";
}
function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  const correctAnswer = "4";

  if (!selectedOption) {
    alert("Please select an answer.");
    return;
  }

  if (selectedOption.value === correctAnswer) {
    alert("Correct! Well done.");
  } else {
    alert("That's incorrect. Try again!.");
  }
}

let button = document.getElementById("SubmitAnswer");
button.addEventListener("click", checkAnswer);

