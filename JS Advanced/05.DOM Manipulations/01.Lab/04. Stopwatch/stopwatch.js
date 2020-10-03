function stopwatch() {

    let startButtonElement = document.getElementById('startBtn');
    let stopButtonElement = document.getElementById('stopBtn');
    let stopwatchTimeElement = document.getElementById('time');

    let currentIntervalId;

    startButtonElement.addEventListener('click', startStopwatch);
    stopButtonElement.addEventListener('click', stopStopwatch);


    function startStopwatch() {  
        startButtonElement.setAttribute('disabled', true);
        stopButtonElement.removeAttribute('disabled');
        stopwatchTimeElement.textContent = '00:00';

        let seconds = 0;
        let minutes = 0

        currentIntervalId = setInterval(
            function () {
                if (seconds === 60) {
                    minutes++;
                    seconds = 0;
                }
                seconds++;
                let currentTime = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
                stopwatchTimeElement.textContent = currentTime;
                
            },1000    
        );
    }

    function stopStopwatch() {
        startButtonElement.removeAttribute('disabled');
        stopButtonElement.setAttribute('disabled', true);

        clearInterval(currentIntervalId);
    }
}