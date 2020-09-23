function initDashboard() {
    let dashboard = [];
    for (let i = 0; i < 3; i++) {
        dashboard.push([]);
        for (let j = 0; j < 3; j++) {
            dashboard[i][j] = false;
        }
    }
    return dashboard;
}

function isPlaceOccupiedBy(dashboard, row, col, player) {
    return dashboard[row][col] === player;
}

function isPlaceFree(dashboard, row, col) {
    return dashboard[row][col] === false;
}

function makeMove(dashboard, row, col, player) {
    if (!isPlaceFree(dashboard, row, col)) {
        return false;
    }
    dashboard[row][col] = player;
    return true;
}

function isWinner(dashboard, player, currentRow, currentCol) {
    let winnerByRow = true;
    let winnerByCol = true;
    let winnerByPrimaryDiagonal = true;
    let winnerBySecondaryDiagonal = true;

    let isWinner = true;

    for (let i = 0; i < dashboard.length; i++) {
        for (let j = 0; j < dashboard[currentRow].length; j++) {
            if (!isPlaceOccupiedBy(dashboard, currentRow, j, player)) {
                winnerByRow = false;
            }
        }
        if (!isPlaceOccupiedBy(dashboard, i, currentCol, player)) {
            winnerByCol = false;
        }
        if (!isPlaceOccupiedBy(dashboard,i, i, player)) {
            winnerByPrimaryDiagonal = false;
        }
        if (!isPlaceOccupiedBy(dashboard,i, dashboard.length - 1 - i, player)) {
            winnerBySecondaryDiagonal = false;
        }

        isWinner = winnerByRow || winnerByCol || winnerByPrimaryDiagonal || winnerBySecondaryDiagonal;
        if (!isWinner) {
            break;
        }
    }
    return isWinner;
}

function isDashboardFull(dashboard) {
    let freePlace = dashboard
        .reduce((acc, arr) => acc.concat(arr), [])
        .find(x => x === false); // If there is a false value it will return it also as result -> which means the dashboard is not full
    return freePlace === undefined;
}

function playGame(dashboard, moves) {
    let players = ['X', 'O'];
    let playerIndex = 0;

    for (let i = 0; i < moves.length; i++) {
        let coordinates = moves[i].split(' ');
        // let row = coordinates.shift();
        // let col = coordinates.shift();
        let [row, col] = coordinates;

        let currentPlayer = players[playerIndex];
        let isMoveSuccessful = makeMove(dashboard, row, col, currentPlayer);
        if (isWinner(dashboard, currentPlayer, row, col)) {
            return currentPlayer;
        }
        if (isDashboardFull(dashboard)) {
            break;
        }
        if (isMoveSuccessful) {
            playerIndex = (playerIndex + 1) % players.length;
        } else {
            console.log('This place is already taken. Please choose another!');
        }
    }
}

function printDashboard(dashboard) {
    dashboard
        .map(row => row.join('\t'))
        .forEach(row => console.log(row));
}

function solve(moves) {
    let dashboard = initDashboard();
    let winner = playGame(dashboard, moves);
    if (winner) {
        console.log(`Player ${winner} wins!`);
    } else {
        console.log('The game ended! Nobody wins :(');
    }
    printDashboard(dashboard);
}

solve([
    '0 1',
    '0 0',
    '0 2',
    '2 0',
    '1 0',
    '1 2',
    '1 1',
    '2 1',
    '2 2',
    '0 0'
]);