//players
const players = (name, marker) => {
    return { name, marker};
}

const p1 = players("player1", "x");
const p2 = players("player2", "o")


const gridContainer = document.querySelector("#gridContainer")

// game board display
const gameBoard = (() => {
    const gameBoardArr = [
                        " ", " ", " ", /* 1 2 3 */
                        " ", " ", " ", /* 4 5 6 */
                        " ", " ", " ", /* 7 8 9 */
                    ];


    const showInitialGameBoard = (emptySpacesArr = gameBoardArr) => {
        for(i=0; i<emptySpacesArr.length; i++) {
            div = document.createElement("div");
            div.classList.add("gridItem");   
            div.setAttribute('id', `${i}`);
            div.innerHTML = emptySpacesArr[i];
            gridContainer.appendChild(div);
        }
    }


    const markerTurns = [p1.marker, p2.marker, p1.marker, p2.marker, p1.marker, p2.marker, p1.marker, p2.marker, p1.marker]


    function turnCounter(){
        var presentTurn = markerTurns[0];
        markerTurns.shift()
        return presentTurn;
    }


    
    //edit on click
    function onClick(){
        let gridItems = document.querySelectorAll(".gridItem")
        gridItems.forEach(item=> {
            item.addEventListener("click", function(){
                if (item.innerHTML === " "){
                    var ongoingTurn = turnCounter();
                    gameBoardArr.splice(parseInt(item.getAttribute('id')), 1, ongoingTurn);
                    item.innerHTML = ongoingTurn;
                    console.log(ongoingTurn);
                    
                    var gameOver = checkEnd(); 
                    if (gameOver != undefined) {
                        if (gameOver == "tie") alert(gameOver)
                        else alert(`${checkEnd()} won`)
                    }
                }
            })
        });
    }
    

    //check if won or tie
    function checkEnd(boardPosition = [gameBoardArr.slice(0,3), gameBoardArr.slice(3,6), gameBoardArr.slice(6,9)]) {
        for (i=0; i<3; i++) { 
            /* rows */
            var row = boardPosition[i];
            if ((row.every(val => val === "x")) || (row.every(val => val === "o"))) {
                return boardPosition[i][0]
            }
            /* columsn */
            var column = [boardPosition[0][i], boardPosition[1][i], boardPosition[2][i]]
            if ((column.every(val => val === "x")) || (column.every(val => val === "o"))) {
                return boardPosition[0][i] ;
            }
            /* diagonals */
            var fallingDiagonal = [boardPosition[0][0], boardPosition[1][1], boardPosition[2][2]]
            if ((fallingDiagonal.every(val => val === "x")) || (fallingDiagonal.every(val => val === "o"))) {
                return boardPosition[0][0];
            }

            var risingDiagonal = [boardPosition[0][2], boardPosition[1][1], boardPosition[2][0]]
            if ((risingDiagonal.every(val => val === "x")) || (risingDiagonal.every(val => val === "o"))) {                
                return boardPosition[0][2]
            }
            //tie
            if (! gameBoardArr.includes(" ")) {
                return "tie";
            }
        }

    }
        
    

    return {
        showInitialGameBoard,
        onClick,
        checkEnd,
    };

})();

gameBoard.showInitialGameBoard()
gameBoard.onClick();



// const boardControl = ((board = gameBoard.showInitialGameBoard()) => {
//     //add marker positions based on input based on input
//     //edit on click
// });


