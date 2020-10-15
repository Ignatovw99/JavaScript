function createPatientChart(name, age, weight, height) {

    let heightInMeters = height / 100;
    let personalInfo = { age, weight, height };
    let bmi = weight / Math.pow(heightInMeters, 2);

    let patientChart = { name, personalInfo, BMI: Math.round(bmi) };

    let status;
    if (bmi < 18.5) {
        status = 'underweight';
    } else if (bmi < 25) {
        status = 'normal';
    } else if (bmi < 30) {
        status = 'overweight';
    } else {
        status = 'obese';
        patientChart.recommendation = 'admission required';
    }
    patientChart.status = status;

    return patientChart;
}


console.log(createPatientChart('Pesho', 21, 75, 183));