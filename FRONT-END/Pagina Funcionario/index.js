$(document).ready(function () {
    // progress bar
    let dataAreaOffset = $("#data-area").offset();

    function animationData() {
        let duration = [1400, 1600, 2000, 2200];
        let number = [2110, 2010, 90,  10];
        let colors = ['#00a2ff', '#14e737', '#ff7f00', '#ff0000']; // Changed the last color to red
        let c = 65;
        for (let toCircle = 0; toCircle < 4; toCircle++) {
            let container = document.getElementById("circle" + String.fromCharCode(c + toCircle));
            let circle = new ProgressBar.Circle(container, {
                color: colors[toCircle],
                strokeWidth: 5,
                duration: duration[toCircle],
                from: { color: '#AAA' },
                to: { color: colors[toCircle] },
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    let value = Math.round(circle.value() * number[toCircle]);
                    circle.setText(value);
                }
            });

            circle.animate(1.0); // Ensure the animation starts
        }
    }

    animationData(); // Chama a função de animação assim que a página é carregada

    $("#data-area").parallax({
        imageSrc: 'img-carousel/cidadeparallax.png'
    });

    $("#mainSlider").parallax({
        imageSrc: 'img-carousel/pattern.png'
    });

});

$(document).ready(function () {
    // progress bar
    let dataAreaOffset = $("data-area-hourly").offset();

    function animationData() {
        let duration = [1400, 1600, 2000, 2200];
        let number = [317, 265, 42,  10];
        let colors = ['#00a2ff', '#14e737', '#ff7f00', '#ff0000']; // Changed the last color to red
        let c = 65;
        for (let toCirculo = 0; toCirculo < 4; toCirculo++) {
            let container = document.getElementById("circulo" + String.fromCharCode(c + toCirculo));
            let circulo = new ProgressBar.Circle(container, {
                color: colors[toCirculo],
                strokeWidth: 5,
                duration: duration[toCirculo],
                from: { color: '#AAA' },
                to: { color: colors[toCirculo] },
                step: function (state, circulo) {
                    circulo.path.setAttribute('stroke', state.color);
                    let value = Math.round(circulo.value() * number[toCirculo]);
                    circulo.setText(value);
                }
            });

            circulo.animate(1.0); // Ensure the animation starts
        }
    }

    

    animationData(); // Chama a função de animação assim que a página é carregada

    $("#data-area-hourly").parallax({
        imageSrc: 'img-carousel/cidadeparallax.png'
    });

    $("#mainSlider").parallax({
        imageSrc: 'img-carousel/pattern.png'
    });

});



