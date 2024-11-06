function addMatrices() {
    // Get values from Matrix A
    const a11 = parseFloat(document.getElementById('a11').value) || 0;
    const a12 = parseFloat(document.getElementById('a12').value) || 0;
    const a21 = parseFloat(document.getElementById('a21').value) || 0;
    const a22 = parseFloat(document.getElementById('a22').value) || 0;

    // Get values from Matrix B
    const b11 = parseFloat(document.getElementById('b11').value) || 0;
    const b12 = parseFloat(document.getElementById('b12').value) || 0;
    const b21 = parseFloat(document.getElementById('b21').value) || 0;
    const b22 = parseFloat(document.getElementById('b22').value) || 0;

    // Perform matrix addition
    const resultMatrix = [
        [a11 + b11, a12 + b12],
        [a21 + b21, a22 + b22]
    ];

    // Display the result
    displayResult(resultMatrix);
}

function displayResult(matrix) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <table>
            <tr>
                <td>${matrix[0][0]}</td>
                <td>${matrix[0][1]}</td>
            </tr>
            <tr>
                <td>${matrix[1][0]}</td>
                <td>${matrix[1][1]}</td>
            </tr>
        </table>
    `;
}
