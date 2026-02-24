// WP U4 Lab 2
// Hangman | HTML, CSS, JS
// Maeson, Abel
// Started @ 2/24/2026

const body = document.getElementsByTagName("body")[0];
const alpha = "qwertyuiop*asdfghjkl*zxcvbnm";
const preview = document.getElementById("preview");
const console = document.getElementById("console");

function genKeyboard(){
    let index = 0;
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

function submit(){
    console.textContent += preview.textContent;
    preview.textContent = "";
}