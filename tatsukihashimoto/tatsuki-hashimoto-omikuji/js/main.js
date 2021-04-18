'use strict';

{

    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        // const results = ['大吉','中吉','小吉','凶','末吉'];
        // const n = Math.floor(Math.random() * results.length);
        // btn.textContent = results[n];
        const n = Math.random();
        if (n < 0.05) {
            btn.textContent = 'ウーラオス';
        } else if (n < 0.2) {
            btn.textContent = 'ルカリオ';
        } else if(n < 0.35) {
            btn.textContent = 'ピカチュウ';
        }　else {
            btn.textContent = 'コイキング';
        }

        
    });
}