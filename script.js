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
                }
            })
        });
    }
    

    //check if won or tie
    function checkEnd(xCounter = gameBoardArr, oCounter = gameBoardArr) {
        var xCount = (gameBoardArr.filter(val => val === "x")).length
        var oCount = (gameBoardArr.filter(val => val === "o")).length        
        if ((xCount > 3) || (oCount > 3)) {
            for (i=0; i<9; i++) {
                // xCount.map(element => element = )
                // replace all
            }
        }
    }

    return {
        showInitialGameBoard,
        onClick,
    };

})();

gameBoard.showInitialGameBoard()
gameBoard.onClick();



// const boardControl = ((board = gameBoard.showInitialGameBoard()) => {
//     //add marker positions based on input based on input
//     //edit on click
// });


