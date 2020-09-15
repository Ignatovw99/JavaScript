function calcualteCircleArea(radius) {
    let area;
    let inputType = typeof radius;  //typeof return string value
    if (inputType === 'number') {
        area = Math.pow(radius, 2) * Math.PI;
    }
    return area;
}


function solve() {
    let argument = 'true';
    let circleAreaReult = calcualteCircleArea(argument);
    if (circleAreaReult) {
        console.log(circleAreaReult.toFixed(2));
    } else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof argument}.`);
    }
}

solve()