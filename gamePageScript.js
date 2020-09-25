
let a='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let answerWord = '';
let maxWrong = 6;
let mistakes = 0;
let correct=0;
let guessed = [];
let wordBlank=null;


var wrap=document.createElement("div");
wrap.setAttribute("id","wrapper");
var h=document.createElement("h1");
h.innerHTML="HANGMAN";


/*var res=document.createElement("div");
res.setAttribute("id","guessCount")
res.setAttribute("value","wrong guess")
var mis=document.createElement("span");
res.setAttribute("id","mistakes");
var corr=document.createElement("span");
corr.setAttribute("id","correct");

res.append(mis,correct);*/


var hmimg=document.createElement("img");
hmimg.setAttribute("id","hmImg")
hmimg.setAttribute("src","first.jpg")

var text=document.createElement("h3");
text.setAttribute("id","txt")
text.innerHTML="GUESS THE COUNTRY NAME ";

var guessWord=document.createElement("p");
guessWord.setAttribute("id","guessWord");

var alphlist=document.createElement("div");
alphlist.setAttribute("id","alphabets");

wrap.append(h,hmimg,text,guessWord,alphlist);

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
          "GREECE"
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
    guessed.indexOf(selLetter) === -1 ? guessed.push(selLetter) : null;
    document.getElementById(selLetter).setAttribute('disabled', true);
     
    if (answerWord.indexOf(selLetter) >= 0) {
       var w=guessBlankWord();
              checkforWin(w);
      } else if (answerWord.indexOf(selLetter) === -1) {
        mistakes++;
        
        checkforLost();
        console.log("mist  "+mistakes)
           updatePic();
      }
  }


function guessBlankWord() {
   let wordBlank = answerWord.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
      document.getElementById('guessWord').innerHTML = wordBlank;
           return wordBlank;
  }

  function updatePic(){
      document.getElementById("hmImg").src=  mistakes + '.jpg';
  }


  function checkforWin(w) {   
   if (w == answerWord) 
   {
     document.getElementById('alphabets').innerHTML = 'YAY !! You  have Won!!!';
      var b=document.createElement("br");      
     var pagain=document.createElement("button");   
     pagain.setAttribute("id","play_again");
     pagain.innerHTML="PLAY AGAIN"
     pagain.setAttribute("onClick","resetGame()")
     wrap.append(b,pagain)
      }
    }


  function checkforLost() {
    if (mistakes === maxWrong) {
      document.getElementById('txt').innerHTML = "Correct Word is " + answerWord;
      document.getElementById('alphabets').innerHTML = "SORRY!!You HAVE LOST";
    }
  }

  function updateMistakes() {
      console.log(document.getElementById('mistakes'))
    document.getElementById('mistakes').innerHTML = mistakes;
  }


  function resetGame() {
      console.log("PLAY AGAIN");
      window.location.href = 'gamePage.html'
    }
  


