'use strict';

{
    function setWord() {
        word = words.splice(Math.floor(Math.random() * words.length),1)[0];//
        target.textContent = word;
        loc = 0;
    }
    
    const words = [
        "stapro",
        "1+1=52",
        "1-1=-52",
        "1*1=520",
        "1/1=5.2",
        "mission",
        "mac",
        "!?",
        ":@;",
        "abcdefghijklmnopqrstuvwxyz",
    ];
    let word;
    let loc = 0;
    let score = 0;
    let startTime;
    let isPlaying = false;
    const target = document.getElementById('target');
    
    document.addEventListener('click',() => {
        if (isPlaying === true) {
            return;
        }

        isPlaying = true;
        startTime = Date.now();
        setWord();
    });
    
    
    document.addEventListener('keydown', e => {
        if (e.key !== word[loc]){
            return;
        }
        

        loc++;

        // 1: _ed
        // 2: __d
        // 3: ___
        target.textContent = '_'.repeat(loc) + word.substring(loc);//正解した文字を＿（アンダーバー）に変える

        if (loc === word.length) {
            score++;
            if(words.length === 0) {
                const result = document.getElementById("result");
                result.textContent = `Finished! ${score}point`;
                return;
            }
            setWord();
            
        }
    });
}