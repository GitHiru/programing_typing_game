'use strict';
{
  const words = [
    '1test',
    '2test',
    '3test',
    '4test',
    '5test',
  ];
  let word;
  let loc;
  let score;
  let miss;
  const timeLimit = 10 * 1000;
  let startTime;
  let isPlaying = false;

  const target = document.getElementById('target');
  const scoreLabel = document.getElementById('score');
  const missLabel = document.getElementById('miss');
  const timerLabel = document.getElementById('timer');

  function updateTarget() {
    let placeholder = '';
    for (let i = 0; i < loc; i++) {
      placeholder += '_';
    }
    target.textContent = placeholder + word.substring(loc);
  }

  function updateTimer() {
    const timeLeft = (startTime + timeLimit) - Date.now();
    timerLabel.textContent = (timeLeft / 1000).toFixed(2);

    const timeoutId = setTimeout(() => {updateTimer();}, 10);

    if (timeLeft < 0) {
      isPlaying = false;
      clearTimeout(timeoutId);
      setTimeout(() =>{ showResult(); }, 100);
      timerLabel.textContent = '0.00';
      target.textContent = 'Click to replay';
    }
  }

  function showResult() {
    const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
    alert(`${score} letters, ${miss} misses, ${accuracy.toFixed(2)}% accuracy!`);
  }

  // （keyupイベントハンドラ）
  window.addEventListener('keyup', e =>{ //console.log(e.key);
    if (isPlaying !== true) { return; }
    if (e.key === word[loc] ) { //console.log('◯');
      loc++;
      if (loc === word.length) {
        word = words[Math.floor(Math.random() * words.length)];
        loc = 0;
      }
      score++;
      scoreLabel.textContent = score;
      updateTarget();
    } else { //console.log('×');
      miss++;
      missLabel.textContent = miss;
    }
  });

  //（Clickイベントハンドラ）
  window.addEventListener('click', () => {
    if (isPlaying === true) { return; }

    isPlaying = true;
    loc = 0;
    score = 0;
    miss = 0;
    scoreLabel.textContent = score;
    missLabel.textContent = miss;
    word = words[Math.floor(Math.random() * words.length)];
    startTime = Date.now();

    updateTimer();
    updateTarget();
  });
}
