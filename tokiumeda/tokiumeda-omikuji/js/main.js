'use strict';

{
    const btn=document.getElementById('btn');

    btn.addEventListener('click',() => {
      // const results = ["凶", "大凶", "超大凶","バーカ","乙ww","小凶"];
      // // const n =Math.floor(Math.random() * results.length);
      // // btn.textContent = results[n]; 
      // btn.textContent = results[Math.floor(Math.random() * results.length)]; 
      const n = Math.random();
      if (n < 0.01) {
        btn.textContent = '小凶'; // 1% 
      } else if (n < 0.05) {
        btn.textContent = 'バーカ'; // 4%
      } else if (n < 0.1) {
        btn.textContent = '乙WW'; // 5%
      } else if (n < 0.2) {
        btn.textContent = '凶'; // 10%
      } else if (n < 0.35) {
        btn.textContent = '大凶'; // 15%
      } else {
        btn.textContent = '超大凶'; // 65%
        
      }



      // switch (n){
      //   case 0:
      //     btn.textContent = '凶';
      //     break; 
      //   case 1:
      //     btn.textContent ='大凶';
      //     break;
      //   case 2:
      //     btn.textContent = '超大凶';
      //     break;
      // }




    });
}