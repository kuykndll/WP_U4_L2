// WP U4 Lab 2
// Hangman | HTML, CSS, JS
// Maeson, Abel
// Started @ 2/24/2026
const alpha = "qwertyuiop*asdfghjkl*zxcvbnm";
const selectedWord = selectWord();
const stickImage = document.getElementById("stickman_img");
const wordbox = document.getElementById("wordbox");
const wordDisplay = wordbox.getElementsByTagName("h1")[0];
const notif = document.getElementById("notification");
let hiddenWord = hideWord(selectedWord);
let stage = 1;
let playing = true

function updateWord(chr){
    for(let i=0;i<hiddenWord.length;i++){
        if(chr == selectedWord[i]){
            hiddenWord[i] = chr;

    }
    wordDisplay.textContent = hiddenWord.join("");
}
}

function checkChar(chr){
    if (selectedWord.includes(chr)){
        updateWord(chr);
        if(!(hiddenWord.includes('_'))){
            notif.textContent="YOU WIN!";
            notif.style.color = "green";
            notif.style.opacity = "100"
            playing=false;
        }
    }
    else{
        stage++;
        stickImage.src = `resources/stickman_stages/Stage${stage}.png`;
        if(stage == 7){
            notif.textContent = "YOU LOSE!";
            notif.style.color = "red"
            notif.style.opacity = "100";
            playing = false;
        }
    }
}

function selectWord(){
    const words = ["air","sock","breakdown","panic","thick","lighter","cope","roof","know","freighter","ivory","miserable","adjust","exploration","meat","inflate","professor","colorful","financial","vote","form","coalition"];
    const selectedWord = words[Math.floor(Math.random()*words.length)];
    return selectedWord;
}
function hideWord(word){
    const hiddenWord = []
    for(i=0;i<word.length;i++){
        hiddenWord.push('_');
    }
    wordDisplay.textContent = hiddenWord.join("");
    return hiddenWord;
}

function genKeyboard(){
    let index = 0;
    const body = document.getElementById("keyboard");
    for(let r=0;r<3;r++){
        const row = document.createElement("div");
        row.className = "row";
        body.appendChild(row);

        while(alpha[index]!=='*' && index != alpha.length){
            chr = alpha[index];
            const key = document.createElement("div");
            key.className="key";
            key.id=chr;
            key.onclick = function(){keyPress(key.id,key)}
            key.textContent= chr.toUpperCase();
            row.appendChild(key);
            index++;
        }
        index++;
    }
}

function keyPress(chr,key){
    if(playing ){
        checkChar(chr);
        key.className="inactive_key"
        key.onclick = ""
    }
}

genKeyboard();