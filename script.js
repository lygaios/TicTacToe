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
    let tableHTML = "<table>";
    
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
            
            tableHTML += `<td onclick="handleClick(${index})">${symbol}</td>`;
        }
        tableHTML += "</tr>";
    }
    
    tableHTML += "</table>";
    contentDiv.innerHTML = tableHTML;
}

function handleClick(index) {
    if (fields[index] === null) {
        fields[index] = currentPlayer;
        
        if (currentPlayer === 'cross') {
            currentPlayer = 'circle';
        } else {
            currentPlayer = 'cross';
        }
        
        render();
    }
}