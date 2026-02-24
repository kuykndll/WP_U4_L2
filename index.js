// WP U4 Lab 2
// Hangman | HTML, CSS, JS
// Maeson, Abel
// Started @ 2/24/2026
const alpha = "qwertyuiop*asdfghjkl*zxcvbnm";
function selectWord(){
    const words = ["air","sock","breakdown","panic","thick","lighter","cope","roof","know","freighter","ivory","miserable","adjust","exploration","meat","inflate","professor","colorful","financial","vote","form","coalition"];
    const selectedWord = words[Math.floor(Math.random()*words.length)]
    console.log(selectedWord);
}
function genKeyboard(){
    let index = 0;
    const body = document.getElementById("keyboard");
    for(let r=0;r<3;r++){
        const row = document.createElement("div");
        row.className = "row";
        body.appendChild(row);

        while(alpha[index]!=='*'){
            chr = alpha[index];
            const key = document.createElement("div");
            key.className="key";
            key.id=chr;
            key.onclick = function(){keyPress(key.id)}
            key.textContent= chr.toUpperCase();
            row.appendChild(key);
            index++;
        }
        index++;
    }
}

function keyPress(chr){
    preview.textContent+=chr;
}

genKeyboard();