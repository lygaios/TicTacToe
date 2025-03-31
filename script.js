let fields = [
    null, null, null,
    null, null, null,
    null, null, null
];

function init() {
    render()
}

let currentPlayer = 'cross';

function render() {
    let contentDiv = document.getElementById("content");
    let tableHTML = "<div class='game-container'><table id='game-table'>";
    
    for (let i = 0; i < 3; i++) {
        tableHTML += "<tr>";
        for (let j = 0; j < 3; j++) {
            let index = i * 3 + j;
            let symbol = "";

            if (fields[index] === 'cross') {
                symbol = '<div class="cross"></div>';
            } else if (fields[index] === 'circle') {
                symbol = '<div class="circle"></div>';
            }
            
            tableHTML += `<td onclick="handleClick(${index})" id="cell-${index}">${symbol}</td>`;
        }
        tableHTML += "</tr>";
    }
    
    tableHTML += "</table></div><div id='winning-line'></div>";
    contentDiv.innerHTML = tableHTML;
    
    let winner = checkWinner();
    if (winner) {
        drawWinningLine(winner);
    }
}

function handleClick(index) {
    if (fields[index] === null) {
        fields[index] = currentPlayer;
        
        currentPlayer = currentPlayer === 'cross' ? 'circle' : 'cross';
        
        render();
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]  // Diagonals
    ];
    
    for (let combination of winningCombinations) {
        let [a, b, c] = combination;
        if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
            return combination; // Return the winning combination
        }
    }
    return null;
}

function drawWinningLine(combination) {
    let firstCell = document.getElementById(`cell-${combination[0]}`).getBoundingClientRect();
    let lastCell = document.getElementById(`cell-${combination[2]}`).getBoundingClientRect();
    let tableRect = document.getElementById("game-table").getBoundingClientRect();
    
    let line = document.getElementById("winning-line");
    let left = firstCell.left - tableRect.left + (firstCell.width / 2);
    let top = firstCell.top - tableRect.top + (firstCell.height / 2);
    let width = Math.sqrt(
        Math.pow(lastCell.left - firstCell.left, 2) + 
        Math.pow(lastCell.top - firstCell.top, 2)
    );
    let angle = Math.atan2(
        lastCell.top - firstCell.top, 
        lastCell.left - firstCell.left
    ) * (180 / Math.PI);
    
    line.style.position = "absolute";
    line.style.width = `${width}px`;
    line.style.height = "5px";
    line.style.backgroundColor = "white";
    line.style.transformOrigin = "left center";
    line.style.transform = `translate(${left}px, ${top}px) rotate(${angle}deg)`;
    line.style.opacity = "1";
}
