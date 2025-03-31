let fields = [
    null, 'cross', 'circle',
    'circle', null, null,
    null, null, null
];

function init() {
    render()
}

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
            
            tableHTML += `<td>${symbol}</td>`;
        }
        tableHTML += "</tr>";
    }
    
    tableHTML += "</table>";
    contentDiv.innerHTML = tableHTML;
}
