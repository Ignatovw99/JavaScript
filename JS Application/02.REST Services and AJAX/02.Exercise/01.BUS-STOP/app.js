function getInfo() {

    const stopInputElement = document.querySelector('#stopId');
    const stopNameElement = document.querySelector("#stopName");
    const busesListElement = document.querySelector('#buses');

    const url = `https://judgetests.firebaseio.com/businfo/${stopInputElement.value}.json`;
    stopInputElement.value = '';
    busesListElement.innerHTML = '';

    fetch(url)
        .then(response => response.ok ? response.json() : Promise.reject())
        .then(data => {
            stopNameElement.textContent = data.name;
            const buses = data.buses;
            Object.keys(buses).forEach(key => {
                const busElement = document.createElement('li');
                busElement.textContent = `Bus ${key} arrives in ${buses[key]} minutes`;
                busesListElement.appendChild(busElement);
            })
        })
        .catch(() => stopNameElement.textContent = 'Error');
}