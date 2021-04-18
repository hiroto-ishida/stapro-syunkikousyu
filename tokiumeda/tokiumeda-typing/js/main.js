 'use strist';

 {
     function setWord() {
        word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
        target.textContent = word;  
        loc = 0;
     }

     const words = [
         'hannba-gusute-ki',
         '1+1=52',
         'gokiburiwokujosuru',
         'tuburanahitomi',
         'pokitteoreta',
         'juumannenngaosiina',
         'ge-mubakarisinaidebennkyousinasai',
         'manatunotaiyouhaatui',
         'konoyokarahitorinokorazukorositeyaru',
         'sumaburadeitibansukinakyarakuta-hamariodesu',
         'siitakki-senntakki-kenntakki-',
         'domannnaka-----a-----',
         'watasihayaminodaimaou.konosekaiwowatasinomoninisurutamenitikyuunioritekita',
     ];
     let word;
     let loc = 0;
     let startTime;
     let isPlaying = false;
     let score = 0;
     const target = document.getElementById('target');

     document.addEventListener('click', () => {
         if (isPlaying === true) {
             return;
         }


         isPlaying = true;
         startTime = Date.now();
         setWord();
     });


     document.addEventListener('keydown', e => {
         if (e.key !== word[loc]) { //e.keyが実際にキーボードに打つ文字　word[loc]が選ばれた文字のloc番目が違う時
            return;//リターンするまたは終了する
         }

         loc++;//次の番号へ進む　例０〜１

         // 1: _ed
         // 2: __d
         // 3: ___
         target.textContent = '_'.repeat(loc) + word.substring(loc);　//正解した文字を＿（アンダーバー）にする

         if (loc === word.length) {
            score++;
             if (words.length === 0) {
                 const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
                 const result = document.getElementById('result');
                 result.textContent = `Finished! ${score}point`;
                 return;
             }
             setWord();
         }
     });
 }