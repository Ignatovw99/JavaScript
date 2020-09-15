function getDayOfWeek(day) {
    let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return weekDays.indexOf(day) !== -1 ? weekDays.indexOf(day) + 1 : 'error';
}

console.log(getDayOfWeek('dasdas'));