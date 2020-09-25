
let a='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let answerWord = '';
let maxWrong = 6;
let mistakes = 0;
let correct=0;
let wrong=0;
let guessed = [];
let wordBlank=null;


var wrap=document.createElement("div");
wrap.setAttribute("id","wrapper");
var h=document.createElement("h1");
h.innerHTML="HANGMAN";


var hmimg=document.createElement("img");
hmimg.setAttribute("id","hmImg")
hmimg.setAttribute("src","onload.jpg")

var countSec=document.createElement("div");
countSec.setAttribute("id","countSection");
var wronglabel=document.createElement("label");
wronglabel.setAttribute("id","wrongCount");
wronglabel.innerText="WRONG GUESS:"+mistakes;
var br=document.createElement("br")
var correctLabel=document.createElement("label");
correctLabel.setAttribute("id","correctCount");
correctLabel.innerHTML="CORRECT GUESS :"+correct;

countSec.append(wronglabel,br,correctLabel);

var text=document.createElement("h3");
text.setAttribute("id","txt")
text.innerHTML="GUESS THE COUNTRY NAME ";

var guessWord=document.createElement("p");
guessWord.setAttribute("id","guessWord");

var alphlist=document.createElement("div");
alphlist.setAttribute("id","alphabets");

wrap.append(h,hmimg,countSec,text,guessWord,alphlist);

document.body.append(wrap);




var words_list= [
	      "INDIA",
	      "SRILANKA",
	      "JAPAN",
	      "CHINA",
	      "NEWZEALAND",
	      "AUSTRALIA",
	      "GERMANY",
	      "FRANCE",
	      "ITALY",
	      "ARGENTINA",
	      "BRAZIL",
          "CANADA",
          "DENMARK",
	      "FIJI",
          "EGYPT",
          "FINLAND",
          "HUNGARY",
          "GREECE",
          "CUBA"
]



randomWord();
generateAlphabets();
guessBlankWord();



function randomWord() {
  answerWord = words_list[Math.floor(Math.random() * words_list.length)];
  console.log(answerWord)
}

function generateAlphabets() {
    let alphaButtons=[];
     for(var i=0;i<a.split('').length;i++)
          alphaButtons[i]=`<button id='` + a[i] + `' onClick="GuessLetter('` + a[i] + `')">` + a[i] + `</button>`;
  alphaButtons=alphaButtons.join(' ');
    
  document.getElementById('alphabets').innerHTML = alphaButtons;
}



function GuessLetter(selLetter) {
    console.log(guessed.indexOf(selLetter)+" "+selLetter+"HERE")
    console.log("COrrect"+correct+" "+mistakes)
    guessed.indexOf(selLetter) === -1 ? guessed.push(selLetter) : null;
    document.getElementById(selLetter).setAttribute('disabled', true);
     
    if (answerWord.indexOf(selLetter) >= 0) {
        correct++;
       var w=guessBlankWord();
              checkforWin(w);
      } else if (answerWord.indexOf(selLetter) === -1) {
        mistakes++;
        checkforLost();
        console.log("mist  "+mistakes)
           updatePic();
      }

      document.getElementById("wrongCount").innerText="WRONG GUESS :"+mistakes;
      document.getElementById("correctCount").innerText="CORRECT GUESS:"+correct;
  }


function guessBlankWord() {
   let wordBlank = answerWord.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
      document.getElementById('guessWord').innerHTML = wordBlank;
           return wordBlank;
  }

  function updatePic(){
      document.getElementById("hmImg").src=  mistakes + '.png';
      }


  function checkforWin(w) {   
   if (w == answerWord) 
   {
     document.getElementById('alphabets').innerHTML = 'YAY!! YOU  HAVE  WON!!!';
     playAgain();
           }
    }


  function checkforLost() {
    if (mistakes === maxWrong) {
      document.getElementById('txt').innerHTML = "Correct Word is " + answerWord;
      document.getElementById('alphabets').innerHTML = "SORRY!!YOU HAVE LOST :(";
      playAgain();
    }
  }

  function updateMistakes() {
      console.log(document.getElementById('mistakes'))
    document.getElementById('mistakes').innerHTML = mistakes;
  }


  function resetGame() {
      console.log("PLAY AGAIN");
      window.location.href = 'gamePage.html';
          }

  function playAgain(){
    var b=document.createElement("br");      
    var pagain=document.createElement("button");   
    pagain.setAttribute("id","play_again");
    pagain.innerHTML="PLAY AGAIN"
    pagain.setAttribute("onClick","resetGame()")
    wrap.append(b,pagain)
  }
  


