function getRoadLimit(roadType) {
    switch (roadType) {
        case 'motorway':
            return 130;
        case 'interstate':
            return 90;
        case 'city':
            return 50;
        case 'residential':
            return 20;
    }
}

function getInfractionMessage(speedLimit, driverSpeed) {
    let speedDifference = driverSpeed - speedLimit;
    if (speedDifference <= 0) {
        return;
    }

    if (speedDifference <= 20) {
        return 'speeding';
    } else if (speedDifference <= 40) {
        return 'excessive speeding';
    } else {
        return 'reckless driving';
    }
}

function turnSpeedRadar(roadType, speed) {
    let roadSpeedLimit = getRoadLimit(roadType);
    let infractionMessage = getInfractionMessage(roadSpeedLimit, speed);
    if (infractionMessage) {
        console.log(infractionMessage);
    }
}

turnSpeedRadar('city', 100);