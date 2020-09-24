
var wrap=document.createElement("div");
wrap.setAttribute("id","wrapper");
var h=document.createElement("h1");
h.innerHTML="Welcome to HangMan";

var t=document.createElement("H3");
t.innerHTML="Click on the button below to play the game";


var img=document.createElement("img");
img.setAttribute("id","myImg");
img.setAttribute("src","img.jpg")

var br=document.createElement("br")

var but=document.createElement("button");
but.setAttribute("id","play_button");
but.innerHTML="PLAY !!";
but.setAttribute("onClick","pageRed()")




wrap.append(h,t,img,br,but)

    document.body.append(wrap);


    function pageRed(){
        window.location.href = 'gamePage.html';
    }

