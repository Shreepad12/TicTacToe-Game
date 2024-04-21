    let box = document.querySelectorAll(".box");
    let msg = document.querySelector("#msg");
    let reset = document.querySelector("#reset");
    let newGame = document.querySelector("#newGame");
    let turnO = true;

    const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    ];

    // Event added for each button of  input "X" & "O"
    box.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
        box.innerText = "X";
        box.classList.add("x");
        turnO = false;
        } else {
        box.innerText = "O";
        box.classList.add("O");
        turnO = true;
        }
        box.disabled = true;
        box.style.backgroundColor = "pink";
        gameWin();
    });
    });

    // Every time user plays move gamewin function will check weather the pattern is matched or not
    const gameWin = () => {
        let count = 0;
    
    for (let pattern of winPattern) {
        let pos1Val = box[pattern[0]].innerText;
        let pos2Val = box[pattern[1]].innerText;
        let pos3Val = box[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val == pos2Val && pos2Val == pos3Val) {
            box[pattern[0]].style.backgroundColor = "rgb(38, 171, 201)";
            box[pattern[0]].style.textDecoration = 'line-through';
            box[pattern[1]].style.backgroundColor = "rgb(38, 171, 201)";
            box[pattern[1]].style.textDecoration = 'line-through';
            box[pattern[2]].style.backgroundColor = "rgb(38, 171, 201)";
            box[pattern[2]].style.textDecoration = 'line-through';
            msg.classList.remove("hide");
            disableBoxes();
            msg.innerText = `WINNER IS  ${pos1Val}`;
        }
        }
    }
    };

    // To disable the box after win
    const disableBoxes = () => {
    box.forEach((btn) => {
        btn.disabled = true;
    });
    };

    // To enable the box after win or new game
    const enableBoxes = () => {
        box.forEach((btn) => {
        btn.disabled = false;
        btn.innerText = "";
        });
    };

    const rst = ()=>{
        turnO = true;
        enableBoxes();
        msg.classList.add("hide");
        box.forEach((box)=>{
            box.style.backgroundColor = "white";
        })

    }
    // Event listener for the newGame button
    newGame.addEventListener("click", rst);

    // Event listener for the reset button
    reset.addEventListener("click", rst);
