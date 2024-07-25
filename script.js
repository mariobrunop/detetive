function saveData() {
    const players = [];
    for (let i = 1; i <= 6; i++) {
        const player = document.getElementById('player' + i).value;
        players.push(player);
    }
    localStorage.setItem('players', JSON.stringify(players));

    const suspects = [];
    for (let i = 1; i <= 6; i++) {
        const suspect = document.getElementById('suspect' + i).checked;
        suspects.push(suspect);
    }
    localStorage.setItem('suspects', JSON.stringify(suspects));

    const weapons = [];
    for (let i = 1; i <= 6; i++) {
        const weapon = document.getElementById('weapon' + i).checked;
        weapons.push(weapon);
    }
    localStorage.setItem('weapons', JSON.stringify(weapons));

    const locations = [];
    for (let i = 1; i <= 9; i++) {
        const location = document.getElementById('location' + i).checked;
        locations.push(location);
    }
    localStorage.setItem('locations', JSON.stringify(locations));

    alert('Dados salvos!');
}

function loadData() {
    const players = JSON.parse(localStorage.getItem('players')) || [];
    for (let i = 1; i <= 6; i++) {
        document.getElementById('player' + i).value = players[i - 1] || '';
    }

    const suspects = JSON.parse(localStorage.getItem('suspects')) || [];
    for (let i = 1; i <= 6; i++) {
        document.getElementById('suspect' + i).checked = suspects[i - 1] || false;
    }

    const weapons = JSON.parse(localStorage.getItem('weapons')) || [];
    for (let i = 1; i <= 6; i++) {
        document.getElementById('weapon' + i).checked = weapons[i - 1] || false;
    }

    const locations = JSON.parse(localStorage.getItem('locations')) || [];
    for (let i = 1; i <= 9; i++) {
        document.getElementById('location' + i).checked = locations[i - 1] || false;
    }

    alert('Dados carregados!');
}

function clearData() {
    localStorage.removeItem('players');
    localStorage.removeItem('suspects');
    localStorage.removeItem('weapons');
    localStorage.removeItem('locations');

    for (let i = 1; i <= 6; i++) {
        document.getElementById('player' + i).value = '';
        document.getElementById('suspect' + i).checked = false;
        document.getElementById('weapon' + i).checked = false;
    }

    for (let i = 1; i <= 9; i++) {
        document.getElementById('location' + i).checked = false;
    }

    alert('Dados limpos!');
}
