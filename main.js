/*
Calculate Area of Trapezoid
*/

// Event listeners
document.getElementById('calculate').addEventListener('click', main);

// Functions
function main() {
    // INPUT - Get variable values
    // NOTE: <type="number"> doesn't convert it to a number in JS
    // *** Don't Forget .value to get INPUT!! ***
    let b1 = Number(document.getElementById('b1').value);
    let b2 = Number(document.getElementById('b2').value);
    let h = Number(document.getElementById('h').value);

    // PROCESS - Calculate are of trapezoid
    let result = ((b1 + b2) / 2) * h;

    // OUTPUT - display result
    document.getElementById('result').innerHTML = result;
}