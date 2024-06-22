let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#message");
let users=document.querySelector("#user");
let comp=document.querySelector("#comp");
const drawgame=()=>{

msg.innerText="Game Draw Play Again";
msg.style.backgroundColor="#081b31";
};

const showwinner=(userwin,userchoice,compchoice)=>{
if(userwin){
    userScore++;
    users.innerText=userScore++;
    msg.innerText=`You Win!  Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="green";
 } else{
compScore++;
comp.innerText=compScore++;
msg.innerText=`You lose ${compchoice} beats Your ${userchoice}`;
msg.style.backgroundColor="red";
    }

};

const gencompchoice=()=>{
const Options=["rock","paper","scissor"];
const randomidx=Math.floor(Math.random()*3);
return Options[randomidx];
};

const playgame=(userchoice)=>{
//generate computerpchoice
let compchoice=gencompchoice();
if(userchoice===compchoice){
    drawgame();
}else{
    let userwin=true;
    if(userchoice==="rock"){
        //scissor,paper;
userwin=compchoice="paper"?false:true;
    }else if(userchoice==="paper"){
       userwin=compchoice==="scissor"?false:true;
    }else{
          userwin=compchoice==="rock"?false:true;
        
    }
    showwinner(userwin,userchoice,compchoice);
}
};

choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
const userchoice= choice.getAttribute("id");
playgame(userchoice);
});
});