function attachEvents() {

    const codePattern = '{code}';

    const locationsUrl = 'https://judgetests.firebaseio.com/locations.json';
    const todayForecastUrl = `https://judgetests.firebaseio.com/forecast/today/${codePattern}.json`;
    const upcomingForecastUrl = `https://judgetests.firebaseio.com/forecast/upcoming/${codePattern}.json`;

    const contentElement = document.getElementById('content');
    const forecastDiv = document.getElementById('forecast');
    const currentForecastElement = document.getElementById('current');
    const upcomingForecastElement = document.getElementById('upcoming');

    const locationInputElement = document.getElementById('location');
    const getWeatherButton = document.getElementById('submit');

    const errorDivElement = createElement('div', 'Error', { className: 'label' });

    const weatherSymbols = {
        Sunny: '&#x2600',
        'Partly sunny': '&#x26C5',
        Overcast: '&#x2601',
        Rain: '&#x2614',
        Degrees: '&#176',
    };

    getWeatherButton.addEventListener('click', getWeather);

    function clearCurrentForecastElement() {
        while (currentForecastElement.firstElementChild !== currentForecastElement.lastElementChild) {
            currentForecastElement.removeChild(currentForecastElement.lastElementChild);
        }
    }

    function clearUpcomingForecastElement() {
        while (upcomingForecastElement.firstElementChild !== upcomingForecastElement.lastElementChild) {
            upcomingForecastElement.removeChild(upcomingForecastElement.lastElementChild);
        }
    }

    function getWeather() {
        const locationName = locationInputElement.value;

        forecastDiv.style.display = 'none';
        clearCurrentForecastElement()
        clearUpcomingForecastElement();

        fetch(locationsUrl)
            .then(response => response.json())
            .then(locations => {
                const { code } = locations.find(x => x.name === locationName);
                
                const todayForecastData =fetch(todayForecastUrl.replace(codePattern, code)).then(response => response.json());
                const upcomingForecastData = fetch(upcomingForecastUrl.replace(codePattern, code)).then(response => response.json());

                return Promise.all([todayForecastData, upcomingForecastData]);
            })
            .then(showForecast)
            .catch(() => contentElement.appendChild(errorDivElement))
    }

    function getForecastDetails() {
        return [
            createElement('span', `${this.low}${weatherSymbols.Degrees}/${this.high}${weatherSymbols.Degrees}`, { className: 'forecast-data' }),
            createElement('span', this.condition, { className: 'forecast-data' })
        ];
    }

    function showTodayForecast(todayForecast) {
        const { name: locationName, forecast: currentForecast } = todayForecast;
        let todayForecastElement = createElement('div', [
            createElement('span', weatherSymbols[currentForecast.condition], { className: 'condition symbol' }),
            createElement('span', [
                createElement('span', locationName, { className: 'forecast-data' }),
                ...getForecastDetails.call(currentForecast)
            ], {className: 'condition'})
        ], { className: 'forecasts' });
        currentForecastElement.appendChild(todayForecastElement);
    }

    function showUpcomingForecast(upcomingForecast) {
        const { forecast: upcomingDays} = upcomingForecast;

        let upcomingResult = upcomingDays.map(current => createElement('span', [
            createElement('span', weatherSymbols[current.condition], { className: 'symbol' }),
            ...getForecastDetails.call(current)
        ], { className: 'upcoming' }));

        let upcomingForecastDaysElement = createElement('div', upcomingResult, { className: 'forecast-info' });
        upcomingForecastElement.appendChild(upcomingForecastDaysElement);
    }

    function showForecast([todayForecast, upcomingForecast]) { //Array destructoring
        errorDivElement.remove();
        showTodayForecast(todayForecast);
        showUpcomingForecast(upcomingForecast);
        forecastDiv.style.display = 'block';
    }
}
    
function createElement(type, content, attributes) {
    const result = document.createElement(type);

    if (attributes !== undefined) {
        Object.assign(result, attributes);
    }

    if (Array.isArray(content)) {
        content.forEach(appendChildNode);
    } else {
        result.innerHTML = content;
    }

    function appendChildNode(node) {
        if (typeof node === 'string') {
            node = document.createTextNode(node);
        }
        result.appendChild(node);
    }

    return result;
}

attachEvents();