// variaveis
const cellElements = document.querySelectorAll("[date-cell]");
const board = document.querySelector("[date-board]")
const winningMessegeTextElement = document.querySelector("[date-winning-messege-text");
const winningMessege = document.querySelector("[date-winning-messege]");
const RestarButton = document.querySelector("[date-winning-messege-button]")
// Verificar se é a vez do círculo
let isCircleTurne;
// condição para vencer
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
// Reiniciar o Jogo
const startGame = () => {
    isCircleTurne = false;
    for (const cell of cellElements) {
        cell.classList.remove("circle");
        cell.classList.remove("X");
        cell.removeEventListener("click", handleClick);
        cell.addEventListener("click", handleClick, {once: true});
    }
        setBoardHoverClass();
        winningMessege.classList.remove("show-winning-messege")
};
// verificando Empate ou vitória
const endGame = (isDraw) => {
    if (isDraw) {
        winningMessegeTextElement.innerText = 'Empate Marmota!'
    }
    else{
        winningMessegeTextElement.innerText = isCircleTurne ? 
        'Bolinha venceu!' :
         'Xzinho venceu!';
    }
    winningMessege.classList.add("show-winning-messege");
    }
    const checkForWin = (currentPlayer) => {
        return winningCombinations.some((combination) => {
    return combination.every((index) => {
    return cellElements [index].classList.contains(currentPlayer);
    }); 
        });
    };
    const checkForDraw = () => {
        return [...cellElements].every(cell => {
        return cell.classList.contains("X") || cell.classList.contains("circle");
        });
    }
    const placeMark = (cell, classToadd) => {
    cell.classList.add(classToadd);
    };
    // Reiniciar o Jogo e Mudar o Jogador
    const setBoardHoverClass = () => {
        board.classList.remove('circle');
     board.classList.remove('X');
     if (isCircleTurne) {
         board.classList.add("circle");
     }
     else{
        board.classList.add("X");
         }
        }
        const swapTurns =() => {
         isCircleTurne = !isCircleTurne;
         setBoardHoverClass ();
         };        
const handleClick = (e) => {
    //colocar a marca
    const cell = e.target;
    const classToadd = isCircleTurne ? "circle" : "X";
    placeMark(cell, classToadd);
    //verificar vencedor 
    const isWin = checkForWin(classToadd);
    const isDraw = checkForDraw();
    if(isWin) {
       endGame(false);
    }
    else if (isDraw) {
        endGame(true)
    }
    else{
    swapTurns();
    }
};
startGame();
RestarButton.addEventListener ("click", startGame);