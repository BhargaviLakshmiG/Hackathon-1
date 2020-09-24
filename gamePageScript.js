
var wrap=document.createElement("div");
wrap.setAttribute("id","wrapper");
var h=document.createElement("h1");
h.innerHTML="HANGMAN";

var hmimg=document.createElement("img");
hmimg.setAttribute("src","first.jpg")

var text=document.createElement("h3");
text.innerHTML="GUESS THE  WORD ";

var guessWord=document.createElement("p");
guessWord.setAttribute("id","guessWord");

var alphlist=document.createElement("div");
alphlist.setAttribute("id","alphabets");

wrap.append(h,hmimg,text,guessWord,alphlist);

document.body.append(wrap);




var words_list= [
	      "awkward",
	      "avenge",
	      "beautiful",
	      "control",
	      "dream",
	      "future",
	      "gentle",
	      "happy",
	      "iguana",
	      "jelly",
	      "mountain",
          "smile",
          "refresh",
	      "tribute",
          "venture"
]

let a='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let answerWord = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];



function randomWord() {
  answerWord = words_list[Math.floor(Math.random() * words_list.length)];
  console.log(answerWord)
}

function generateAlphabets() {
    let alphaButtons=[];
    console.log(a.split('').length)
 for(var i=0;i<a.split('').length;i++)
 {
     alphaButtons[i]=`<button id='` + a[i] + `' onClick="GuessLetter('` + a[i] + `')">` + a[i] + `</button>`;
 }
 alphaButtons=alphaButtons.join();
    console.log(alphaButtons)

  document.getElementById('alphabets').innerHTML = alphaButtons;
}



function GuessLetter(selLetter) {
    guessed.indexOf(selLetter) === -1 ? guessed.push(selLetter) : null;
    document.getElementById(selLetter).setAttribute('disabled', true);
  
    if (answerWord.indexOf(selLetter) >= 0) {
      guessedWordBlank();
     
    } else if (answerWord.indexOf(selLetter) === -1) {
      mistakes++;
     
    }
  }


function guessWordBlank() {
   let wordBlank = answerWord.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  
    document.getElementById('guessWord').innerHTML = wordBlank;
  }


randomWord();
guessWordBlank();
generateAlphabets();
