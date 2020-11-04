function solve() {

    const url = `https://judgetests.firebaseio.com/schedule/`;
    let stopId = 'depot';
    let currentStop;

    const infoSpanElement = document.querySelector('#info > .info');
    const departButton = document.querySelector('#depart');
    const arriveButton = document.querySelector('#arrive');

    function changeButton() {
        if (departButton.disabled) {
            departButton.disabled = false;
            arriveButton.disabled = true;
        } else {
            arriveButton.disabled = false;
            departButton.disabled = true;
        }
    }

    function depart() {
        fetch(`${url}${stopId}.json`)
            .then(response => response.json())
            .then(data => {
                if (data === null) {
                    return Promise.reject();
                } else {
                    infoSpanElement.textContent = `Next stop ${data.name}`;
                    stopId = data.next;
                    currentStop = data.name;
                    changeButton();
                }
            })
            .catch(() => infoSpanElement.textContent = 'Error');
    }

    function arrive() {
        infoSpanElement.textContent = `Arriving at ${currentStop}`;
        changeButton();
    }

    return {
        depart,
        arrive
    };
}

let result = solve();