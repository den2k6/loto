'use strict'

{
  const label7 = document.createElement('div');
  label7.className = 'labelclass';
  label7.textContent = 'LOTO7';
  document.body.appendChild(label7);

  const tmp7 = document.createElement('div');
  tmp7.className = 'itemclass';
  document.body.appendChild(tmp7);

  const label6 = document.createElement('div');
  label6.className = 'labelclass';
  label6.textContent = 'LOTO6';
  document.body.appendChild(label6);

  const tmp6 = document.createElement('div');
  tmp6.className = 'itemclass';
  document.body.appendChild(tmp6);

  const labelm = document.createElement('div');
  labelm.className = 'labelclass';
  labelm.textContent = 'MINI LOTO';
  document.body.appendChild(labelm);

  const tmpm = document.createElement('div');
  tmpm.className = 'itemclass';
  document.body.appendChild(tmpm);
  
  // リトライボタン
  const again = document.createElement('button');
  again.className = 'btnclass';
  again.textContent = 're-try';
  document.body.appendChild(again);
  
  again.addEventListener('click', () => {
    location.reload(false);
  });

  // 配列の準備
  const lists7 = [];
  for(let i = 0; i < 37; i++) {
    lists7[i] = i+1;
  }
  const lists6 = [];
  for(let i = 0; i < 43; i++) {
    lists6[i] = i+1;
  }
  
  
  const listsm = [];
  for(let i = 0; i < 31; i++) {
    listsm[i] = i+1;
  }
  
  // 1 - 10, 12は出さない仕組み
  lists7.splice(0,10);
  lists7.splice(1,1);
  console.log(lists7);

  lists6.splice(0,10);
  lists6.splice(1,1);
  console.log(lists6);

  listsm.splice(0,10);
  listsm.splice(1,1);
  console.log(listsm);


  // 数字を選ぶ
  const bbb7 = [];
  for(let i = 0; i < 7; i++) {
    bbb7[i] = lists7.splice(Math.floor(Math.random() * lists7.length), 1);
  }
  const bbb6 = [];
  for(let i = 0; i < 6; i++) {
    bbb6[i] = lists6.splice(Math.floor(Math.random() * lists6.length), 1);
  }
  const bbbm = [];
  for(let i = 0; i < 5; i++) {
    bbbm[i] = listsm.splice(Math.floor(Math.random() * listsm.length), 1);
  }

  // ソート
  bbb7.sort(function(a, b) {
    return a - b;
  });
  bbb6.sort(function(a, b) {
    return a - b;
  });
  bbbm.sort(function(a, b) {
    return a - b;
  });

  // 表示
  tmp7.textContent = bbb7;
  tmp6.textContent = bbb6;
  tmpm.textContent = bbbm;

}
