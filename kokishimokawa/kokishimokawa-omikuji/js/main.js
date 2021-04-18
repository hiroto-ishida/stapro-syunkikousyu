'use strict'

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        
        const n = Math.random();
        if (n < 0.05) {
            btn.textContent = '大大大凶'; // 5%            
        }   else if (n < 0.2) {
            btn.textContent = '大吉'; // 15%
        } else {
            btn.textContent = '中吉'; // 80%
        }
    });
}