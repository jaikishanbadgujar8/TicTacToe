let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let msgContainer = document.querySelector(".msg-container");
let newGame = document.querySelector("#newgame");
let msg = document.querySelector("#msg");


let winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
let turn = true;


boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if (turn) {
            box.innerText = "O";
            box.style.color ="#ba5656";
            turn = false;        
        } else {
            box.innerText ="X";
            box.style.color ="blue";
            turn = true;
            
        }
        box.disabled = true;
        checkWinner();
    });
    });


const showWinner = (win) => {
    msgContainer.classList.remove("hide");
    msg.innerText = `Congratulations, Winner is '${win}'`;
};


const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};
const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText =""
        msgContainer.classList.add("hide");
    });
};

const resetGame = () => {
    turn = true;
    enableBoxes();
};

const checkWinner = () => {
    for(let pattern of winPattern){
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if(position1 !="" && position2 !="" && position3 !=""){
            if(position1 === position2 
            && position2 === position3  
            && position3 === position1){
                console.log("winner ",position1);
                // console.log(pattern[0],pattern[1],pattern[2]);

                disableBoxes(); 
                showWinner(position1);
                
            }
        }

    }
};
newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
