const slide = document.querySelector('#slide');
const btnVoltar = document.querySelector('#prev-button');
const btnIr = document.querySelector('#next-button');

btnVoltar.addEventListener('click', function() {
    if (slide.getAttribute('src') === "img1/feedback.png") {
        slide.setAttribute('src', 'img1/feedback2..png');
    } else if (slide.getAttribute('src') === "img1/feedback2..png") {
        slide.setAttribute('src', 'img1/feedback.png');
    }
});

btnIr.addEventListener('click', function() {
    if (slide.getAttribute('src') === "img1/feedback.png") {
        slide.setAttribute('src', 'img1/feedback2..png');
    } else if (slide.getAttribute('src') === "img1/feedback2..png") {
        slide.setAttribute('src', 'img1/feedback.png');
    }
});