'use strict';

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {

        const n = Math.random();
          if(n < 0.8){
            btn.textContent = "大吉"
        } else if (n < 0.1){
            btn.textContent = "中吉"
        }　else if (n <0.1){
            btn.textContent = "小吉"
        }
    });
}
