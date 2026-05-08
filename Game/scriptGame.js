let buttons = document.querySelectorAll("button");
let toReveal = document.getElementById("toReveal");


let wins = document.getElementById("wins");
let draws = document.getElementById("draws");
let losses = document.getElementById("losses");

let cWins = 0;
let cDraws = 0;
let cLosses = 0;

wins.textContent = cWins;
draws.textContent = cDraws;
losses.textContent = cLosses;



//aligning the choices with the corresponding image
let options = ["rock","paper","scissors"];
let img = ["images/rock.jpg", "images/paper.jpg", "images/scissors.jpg"];


// addEventListener Syntax = element.addEventListener(event, function, useCapture);
// the eventListener saves the targeted event's id under event.
for(let i=0; i < buttons.length; i++)
{
   buttons[i].addEventListener("click",reveal); 
}


//generate a random choice 
function reveal(event)
{
   toReveal.src = img[Math.floor(Math.random()*img.length)];
   choices(event);
}


//establish what each player chose
let computerChoice="";
function choices(event)
{
   let playerChoice = event.currentTarget.id;

   for(let i=0; i<img.length;i++)
   {
      //find out what the computer chose by looking for one of the keywords. 
      if(toReveal.src.includes(img[i]))
      {
         computerChoice = options[i];
      }
   }
   console.log(playerChoice);
   console.log(computerChoice); 
   console.log("////////////////");

   check(playerChoice, computerChoice);
}


function check(playerChoice, computerChoice) 
{
 
   if (playerChoice === computerChoice) {
      cDraws++;
      wins.classList.remove("lightPlayer");
      losses.classList.remove("lightComputer");
   } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
   ) {
      cWins++;
      wins.classList.add("lightPlayer");
      losses.classList.remove("lightComputer");
   } else {
      cLosses++;
      losses.classList.add("lightComputer");
      wins.classList.remove("lightPlayer");
   }
   //update interface
   wins.textContent = cWins;
   draws.textContent = cDraws;
   losses.textContent = cLosses;

  
}