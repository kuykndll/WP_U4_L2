// WP U4 Lab 2
// Hangman | HTML, CSS, JS
// Maeson, Abel
// Started @ 2/24/2026

const body = document.getElementsByTagName("body")[0];
const alpha = "qwertyuiop*asdfghjkl*zxcvbnm";
const preview = document.getElementById("preview");
const console = document.getElementById("console");
console.log(alpha[29]);
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
    const row = document.createElement("div");
    row.className = "row";
    const spacebar = document.createElement("div");
    spacebar.className = "space";
    spacebar.id = " ";
    spacebar.onclick = function(){keyPress(spacebar.id)}
    spacebar.textContent = "Space";
    row.appendChild(spacebar);
    body.appendChild(row);
}

function keyPress(chr){
    preview.textContent+=chr;
}

function submit(){
    console.textContent += preview.textContent;
    preview.textContent = "";
}