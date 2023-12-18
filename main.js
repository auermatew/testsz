let numbers = [];

function addNumber() {
    const numberInput = document.getElementById('numberInput');
    const value = parseFloat(numberInput.value);

    if (!isNaN(value)) {
        numbers.push(value);
        displayNumbers();
    } else {
        alert('Kérlek egy valós számot adj meg!');
    }

    numberInput.value = '';
}

function displayNumbers() {
    const numberList = document.getElementById('numberList');
    numberList.innerHTML = numbers.map(num => `<li>${num}</li>`).join(', ');
}
