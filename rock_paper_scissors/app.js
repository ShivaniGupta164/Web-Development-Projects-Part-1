let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");


const generateComputerChoice=()=>{
    const randomNumber=Math.floor(Math.random()*3);
    const choices=["rock","paper","scissor"];
    return choices[randomNumber];
}

const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="Game Draw! play again";
}



const playGame=(userChoice)=>{
    console.log("user choice = ",userChoice);  //moduler programming
    const compChoice=generateComputerChoice();
    console.log("computer choice = ",compChoice);

    if(userChoice===compChoice){
        drawGame();
        
    }
    // else if((userChoice==="rock" && compChoice==="scissor") ||
    //         (userChoice==="paper" && compChoice==="rock") ||
    //         (userChoice==="scissor" && compChoice==="paper")){
    //             console.log("User wins");
    //             userScore++;
    //             console.log("User Score: ",userScore);
    //         }
    //         else{
    //             console.log("Computer wins");
    //             comScore++;
    //             console.log("Computer Score: ",comScore);
    //         }/

    else{
        let userWin=true;
        if(userChoice=="rock"){
            //scissor vs paper
            userWin=compChoice=="paper"?false:true;

    }
    else if(userChoice=="paper"){
        //rock vs scissor
        userWin=compChoice=="scissor"?false:true;
    }
    else{
        userWin=compChoice=="rock"?false:true;
    }
    

    if(userWin){
        console.log("You wins");
        msg.innerText="You Win!";
        msg.computedStyleMap.backgroundColor="green";
        userScore++;
        document.querySelector("#user-score").innerText=userScore;
        console.log("User Score: ",userScore);
    }
    else{
        console.log("Computer wins");
        msg.innerText="Computer Wins!";
        msg.computedStyleMap.backgroundColor="red";
        compScore++;
        document.querySelector("#computer-score").innerText=compScore;
        console.log("Computer Score: ",compScore);
    }
}}

choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    })
})