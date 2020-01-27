function solve() {
  let inputText = document.getElementById('input').textContent;
  let words = inputText.match(/\S+/mg);
  let mergeWords = '';
  let sentences = [];

  while (words.length > 0) {
    let word = words.shift();
    mergeWords += `${word}`;

    if (word.endsWith('.')) {
      sentences.push(mergeWords);
      mergeWords = '';
    }
  }

  let output = document.getElementById('output');
  let restLenght = sentences.length % 3;

  while (sentences.length > 3) {
    let p = document.createElement('p');
    for (let i = 0; i < 3; i++) {
      let sentence = sentences.shift();
      p.textContent += sentences;
    }
    output.appendChild(p);
  }

  let p = document.createElement('p');
  for (let i = 0; i < restLenght; i++) {
    p.textContent += sentences.shift();
    
  }
  output.appendChild(p);
}