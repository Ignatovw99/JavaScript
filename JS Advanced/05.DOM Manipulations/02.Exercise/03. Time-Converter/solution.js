function attachEventsListeners() {

    let daysButton = document.getElementById('daysBtn');
    let daysInputElement = document.getElementById('days');

    let hoursButton = document.getElementById('hoursBtn');
    let hoursInputElement = document.getElementById('hours');

    let minutesButton = document.getElementById('minutesBtn');
    let minutesInputElement = document.getElementById('minutes');

    let secondsButton = document.getElementById('secondsBtn');
    let secondsInputElement = document.getElementById('seconds');

    daysButton.addEventListener('click', convertDays);
    hoursButton.addEventListener('click', convertHours);
    minutesButton.addEventListener('click', convertMinutes);
    secondsButton.addEventListener('click', convertSeconds);


    function convertDays() {
        let daysToConvert = daysInputElement.value;
        if (isNaN(daysToConvert)) {
            return;
        }
        daysToConvert = Number(daysToConvert);
        let hours = daysToConvert * 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;

        hoursInputElement.value = hours;
        minutesInputElement.value = minutes;
        secondsInputElement.value = seconds;
    }

    function convertHours() {
        let hoursToConvert = hoursInputElement.value;
        if (isNaN(hoursToConvert)) {
            return;
        }
        hoursToConvert = Number(hoursToConvert);
        let days = hoursToConvert / 24;
        let minutes = hoursToConvert * 60;
        let seconds = minutes * 60;

        daysInputElement.value = days;
        minutesInputElement.value = minutes;
        secondsInputElement.value = seconds;
    }
    
    function convertMinutes() {
        let minutesToConvert = minutesInputElement.value;
        if (isNaN(minutesToConvert)) {
            return;
        }
        minutesToConvert = Number(minutesToConvert);
        let hours = minutesToConvert / 60;
        let days = hours / 24;
        let seconds = minutesToConvert * 60;

        daysInputElement.value = days;
        hoursInputElement.value = hours;
        secondsInputElement.value = seconds;
    }
    
    function convertSeconds() {
        let secondsToConvert = secondsInputElement.value;
        if (isNaN(secondsToConvert)) {
            return;
        }
        secondsToConvert = Number(secondsToConvert);
        let minutes = secondsToConvert / 60;
        let hours = minutes / 60;
        let days = hours / 24;

        daysInputElement.value = days;
        hoursInputElement.value = hours;
        minutesInputElement.value = minutes;
    }
}