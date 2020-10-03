function attachGradientEvents() {

    document.getElementById('gradient').addEventListener('mousemove', function (e) {
        let mousePositionOnX = e.offsetX;
        let targetElementWidth = e.target.clientWidth;
        let percentage = mousePositionOnX / targetElementWidth * 100;
        document.getElementById('result').innerHTML = `${parseInt(percentage)}%`;
    })
}