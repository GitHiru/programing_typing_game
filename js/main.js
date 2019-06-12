'use strict';
{
  const words = [
    '1test',
    '2test',
    '3test',
    '4test',
    '5test',
  ];
  let word = words[Math.floor(Math.random() * words.length)];//ランダム取得
  console.log(word);
  let loc = 0;
  let score = 0;
  let miss = 0;

  const target = document.getElementById('target');
  // console.log(target);
  target.textContent = word;

  function updateTarget(){
    let placeholder = '';
  }

 // （keyupイベントハンドラ）
 window.addEventListener('keyup', e =>{ //打鍵文字を取得
   console.log(e.key);
 });
}
