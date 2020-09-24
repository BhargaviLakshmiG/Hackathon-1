
var wrap=document.createElement("div");
wrap.setAttribute("id","wrapper");
var h=document.createElement("h1");
h.innerHTML="HANGMAN";

var hmimg=document.createElement("img");
hmimg.setAttribute("src","first.jpg")

var text=document.createElement("h3");
text.innerHTML="GUESS THE BELOW WORD ";

var alphlist=document.createElement("div");
alphlist.setAttribute("id","alphabets");
//alphlist.setAttribute("value","buttons")
//alphlist.append(buttons)
wrap.append(h,hmimg,text,alphlist);

document.body.append(wrap);




var words_list= [
	      "awkward",
	      "avenge",
	      "backstab",
	      "control",
	      "dream",
	      "future",
	      "gentle",
	      "happy",
	      "iguana",
	      "jelly",
	      "mountain",
	      "smile",
	      "tribute",
	      "venture"
]


let answer = '';
let maxWrong = 6;
let mistakes = 0;

function randomWord() {
  answer = words_list[Math.floor(Math.random() * words_list.length)];
}

function generateButtons() {
  let buttonsHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>
    `
      <button id='` + letter + `'>` + letter + `</button>`).join('');

  document.getElementById('alphabets').innerHTML = buttonsHTML;
}



generateButtons();