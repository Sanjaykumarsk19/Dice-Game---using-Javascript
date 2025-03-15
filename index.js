 // for first dice
 var ran=Math.random()*6;
 var randomnumber1 = Math.floor(ran)+1;

 var RandomDiceImage= "dice" + randomnumber1 + ".png";

 var RandomDicesrc = "images/" + RandomDiceImage ;

document.querySelectorAll("img")[0].setAttribute("src",RandomDicesrc);


// for second dice

var ran2=Math.random()*6;
var randomnumber2 = Math.floor(ran2)+1;
console.log(randomnumber2);

var RandomDiceImage2= "dice" + randomnumber2 + ".png";

var RandomDicesrc2 = "images/" + RandomDiceImage2 ;

document.querySelectorAll("img")[1].setAttribute("src",RandomDicesrc2);

if(randomnumber1 < randomnumber2)
    {
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS";
    }
else if(randomnumber1 > randomnumber2)
    {
        document.querySelector("h1").innerHTML= "PLAYER 1 WINS";
    }
else
    {
        document.querySelector("h1").innerHTML = "ITS A DRAW";

    }




