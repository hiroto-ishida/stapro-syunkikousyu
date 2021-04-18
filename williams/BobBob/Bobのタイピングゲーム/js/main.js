'use strict';

{
  function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word.toUpperCase();
    loc = 0;
  }

  const words = [
    'q',
    'w',
    'e',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    ';',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
    ',',
    '.',
    '/',
    
  ];

    let word;
    let loc = 0;
    let startTime;
    let isPlaying = false;
    const target = document.getElementById('target');

    document.addEventListener('keydown', () => {
        if (isPlaying === true) {
            return;
        }


        isPlaying = true;
        startTime = Date.now();
        setWord();
    });

    document.addEventListener('keydown', function (e) {
            if (e.key !== word[loc]) {
                return;
            }

            loc++;

            target.textContent = '_'.repeat(loc) + word.substring(loc);

            if (loc === word.length) {
                if (words.length === 0) {
                    const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
                    const result = document.getElementById('result');
                    result.textContent = `やったね!!できたね!!大成功!! ${elapsedTime}秒!`;
                    
                    return;
                }

                setWord();
            }
        });
    }


