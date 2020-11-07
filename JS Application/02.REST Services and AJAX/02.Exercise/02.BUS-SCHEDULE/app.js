function solve() {

    const url = `https://judgetests.firebaseio.com/schedule/`;

    const infoSpanElement = document.querySelector('#info > .info');
    const departButton = document.querySelector('#depart');
    const arriveButton = document.querySelector('#arrive');
    
    let stopId = 'depot';
    let currentStop;

    function swapButtonDisability(firstButton, secondButton) {
        let tempValue = firstButton.disabled;
        firstButton.disabled = secondButton.disabled;
        secondButton.disabled = tempValue;
    }

    function changeButton() {
        swapButtonDisability(departButton, arriveButton);
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