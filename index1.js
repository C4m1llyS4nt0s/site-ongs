const slide = document.querySelector('#slide');
const btnVoltar = document.querySelector('#prev-button');
const btnIr = document.querySelector('#next-button');

btnVoltar.addEventListener('click', function() {
    if (slide.getAttribute('src') === "img/feedback.png") {
        slide.setAttribute('src', 'img/feedback1..png');
    } else if (slide.getAttribute('src') === "img/feedback1..png") {
        slide.setAttribute('src', 'img/feedback.png');
    }
});

btnIr.addEventListener('click', function() {
    if (slide.getAttribute('src') === "img/feedback.png") {
        slide.setAttribute('src', 'img/feedback1..png');
    } else if (slide.getAttribute('src') === "img/feedback1..png") {
        slide.setAttribute('src', 'img/feedback.png');
    }
});
