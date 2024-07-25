function saveData() {
    const checkboxes = document.querySelectorAll('.checkbox');
    const checkboxStates = Array.from(checkboxes).map(checkbox => checkbox.checked);
    localStorage.setItem('checkboxStates', JSON.stringify(checkboxStates));
    alert('Dados salvos!');
}

function loadData() {
    const checkboxStates = JSON.parse(localStorage.getItem('checkboxStates')) || [];
    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach((checkbox, index) => {
        checkbox.checked = checkboxStates[index] || false;
    });
    alert('Dados carregados!');
}

function clearData() {
    localStorage.removeItem('checkboxStates');
    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach(checkbox => checkbox.checked = false);
    alert('Dados limpos!');
}
