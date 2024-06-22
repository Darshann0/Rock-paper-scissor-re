

const choices = ["Rock","Paper","Scissors"];

const playerchoice = document.getElementById(playerchoice);
const computerchoice = document.getElementById(computerchoice);
const result = document.getElementById(result);



function games(playerchoice){


    const computerchoice = choices[(Math.floor(Math.random()*3))];
    console.log(computerchoice);

    let result = "";


    if (playerchoice == computerchoice){

        result = "It was a draw.";

    }

    else{

        switch(playerchoice){
            case "Rock":
                result = (computerchoice === "Sicssors") ? "You Win" : "You Lose";
                break;

            case "Paper":
                result = (computerchoice === "Rock") ? "You Win" : "You Lose";
                break;

            case "Scissors":
                result = (computerchoice === "Paper") ? "You Win" : "You Lose";
                break;
        

        }

}


    playerDisplay.textContent = `Player Choice: ${playerchoice}`;
    computerDisplay.textContent = `Computer Choice: ${computerchoice}`;
    resultDisplay.textContent = `Result: ${result}`;



    switch(result){
        case "You Win":
            resultDisplay.classList.add("greentext");
            break;

        case "You Lose":
            resultDisplay.classList.add("redtext");
            break;



    }

}