let fields = [
    null, 'cross', 'circle',
    'circle', null, null,
    null, null, null
];

function render() {
    let contentDiv = document.getElementById("content");
    let tableHTML = "<table>";
    
    for (let i = 0; i < 3; i++) {
        tableHTML += "<tr>";
        for (let j = 0; j < 3; j++) {
            let index = i * 3 + j;
            let symbol;
            
            if (fields[index] === 'cross') {
                symbol = 'X';
            } else if (fields[index] === 'circle') {
                symbol = 'O';
            } else {
                symbol = "";
            }
            
            tableHTML += `<td>${symbol}</td>`;
        }
        tableHTML += "</tr>";
    }
    
    tableHTML += "</table>";
    contentDiv.innerHTML = tableHTML;
}
