
var wrap=document.createElement("div");
wrap.setAttribute("id","wrapper");
var h=document.createElement("h1");
h.innerHTML="Welcome to HangMan";

var text=document.createElement("h3");
text.innerHTML="Use the alphabets below to guess the word ";

wrap.append(h,text);
document.body.append(wrap);