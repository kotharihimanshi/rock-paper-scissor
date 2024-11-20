//dark mode - light mode
// let modebtn = document.querySelector("#mode");

// let currmode = "light";

// modebtn.addEventListener("click" , () => {
//     if(currmode === "light"){
//         currmode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
        
//     }
//     else{
//         currmode = "light";
//         document.querySelector("body").style.backgroundColor = "white";

        
//     }
//     console.log(currmode);

// })



//rock paper scissor games

let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscores = document.querySelector("#user-score");
const compscores = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}




const playgame = (userchoice) => {
    console.log("user choice is" , userchoice);
    //comp generates its choice
    const compchoice = gencompchoice();
    console.log("compchoice is" , compchoice);

    const drawgame = () => {
        console.log("game was draw");
        msg.innerText = "game draw"; 
        msg.style.backgroundColor = "black";
        
    }


    const showwinner = (userwin  ,userchoice , compchoice) => {
        if (userwin){
            console.log("you win");
            userscore++;
            userscores.innerText  = userscore;
            msg.innerText = `you win! Your ${userchoice} beats ${compchoice}`;
            msg.style.backgroundColor = "green";
        }
        else{
            console.log("you lose")
            compscore++;
            compscores.innerText = compscore;
            msg.innerText = `you lose ${compchoice} beats your ${userchoice}`;
            msg.style.backgroundColor = "red";
        }

    }


    if(userchoice === compchoice){
        //drawgame
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper" ){
            userwin = compchoice === "scissors" ? false : true;
        }
        else{
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin , userchoice , compchoice);
    }

};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click" , () => {
        const userchoice = choice.getAttribute("id");
        // console.log("choice was clicked" , userchoice);
        playgame(userchoice);

    })
})
