//buttons
let rock = document.getElementById("rock"); 
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let buttons = document.querySelectorAll("button");
//image of ?
let toReveal = document.getElementById("toReveal");


let img = ["images/rock.jpg", "images/paper.jpg", "images/scissors.jpg"];
//check victory / draw 
function check()
{
    if (toReveal.src == buttons.src)
    {
        
    }
}

//reveal
function reveal()
{
   toReveal.src = img[Math.floor(Math.random()*img.length)];
}

// addEventListener Syntax = element.addEventListener(event, function, useCapture);
for(let i=0; i < buttons.length; i++)
{
   buttons[i].addEventListener("click",reveal);
}




