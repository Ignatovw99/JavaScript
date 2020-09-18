function paddingStart(time) {
    return time >= 0 && time <= 10 ? '0' + time : time;
}

function getHours(seconds) {
    return Math.floor(seconds / 3600);
}

function getMinutes(seconds) {
    return Math.floor(seconds / 60);
}

function getSeconds(totalSeconds, hours, minutes) {
    return Math.round(totalSeconds - (hours * 3600 + minutes * 60));
}

function calculateTime(numberOfSteps, footprintLength, speed) {
    let distance = numberOfSteps * footprintLength;
    let speedInMetersPerSecond = speed / 3.6;
    let breakCount = Math.floor(distance / 500);

    let totalTimeInSecond = (distance / speedInMetersPerSecond) + breakCount * 60;
    let hours = getHours(totalTimeInSecond);
    let minutes = getMinutes(totalTimeInSecond);
    let seconds = getSeconds(totalTimeInSecond, hours, minutes);

    return `${paddingStart(hours)}:${paddingStart(minutes)}:${paddingStart(seconds)}`;
}


function solve(steps, footprintLength, speed) {
    console.log(calculateTime(steps, footprintLength, speed));
}

solve(4032, 0.60, 5);