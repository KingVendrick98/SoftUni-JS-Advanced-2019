function solve() {
  let answers = [...document
  .querySelectorAll('.quiz-answer')]
  .map(x => x.addEventListener('click', nextQuestion));

  function nextQuestion() {
    console.log(`Yes papa`)
  }
}
