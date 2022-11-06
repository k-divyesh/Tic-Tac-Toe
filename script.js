const gridContainer = document.querySelector("#gridContainer")

// game board display
const gameBoard = (() => {
    const gameBoardArr = [
                        " ", " ", " ", /* 1 2 3 */  
                        " ", " ", " ", /* 4 5 6 */
                        " ", " ", " ", /* 7 8 9 */
                    ];

    const showGameBoard = (boardVals = gameBoardArr) => {
        gridContainer.innerHTML = ""
        for(i=0; i<boardVals.length; i++) {
            div = document.createElement("div") 
            div.classList.add("gridItem")           
            div.setAttribute('id', `${i}`)
            div.innerHTML = boardVals[i];
            gridContainer.appendChild(div);
        }
        console.log("successfully runs function showgameboard")
        return true;
    }

    //edit on click    
    function onClick(){
        let gridItems = document.querySelectorAll(".gridItem")
        gridItems.forEach(item=> {
            item.addEventListener("click", function(){
                console.log("onClick function working")
                gameBoardArr.splice(parseInt(item.getAttribute('id')), 1, player1.marker)
                showGameBoard()
                console.log("why does it stop? ehhhhhhhhh")
            })
        });

    }
    
    //check if won or tie
    function checkEnd(boardVals = gameBoardArr){
        //todo
    }

    return {
        showGameBoard,
        onClick,
    };

})();

gameBoard.showGameBoard();
gameBoard.onClick();



const boardControl = ((board = gameBoard.showGameBoard()) => {
    //add marker positions based on input based on input
    //edit on click
});


//players
const players = (name, marker) => {
    return { name, marker};
}

const player1 = players("player1", "X");
const player2 = players("player2", "O")
