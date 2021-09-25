/*
carousel.js
based upon: https://ichi.pro/de/karussell-slider-tutorial-mit-html-css-und-javascript-60728374494743
*/

const btnPrev = document.querySelector('[data-carousel-button-prev]');
const btnNext = document.querySelector('[data-carousel-button-next]');
const carousel = document.querySelector('[data-carousel]');
const slidesContainer = carousel.querySelector('[data-carousel-slides]');
const dotNavigation = document.querySelector('[data-dot-navigation]');
const dots = document.querySelectorAll('.dot');
/*const dot1 = dotNavigation.querySelector('[data-dot1]');
const dot2 = dotNavigation.querySelector('[data-dot2]');
const dot3 = dotNavigation.querySelector('[data-dot3]');
*/
const numSlides = slidesContainer.children.length;
const interval = 5000

let curSlide = 0;
let timer = 0;


function gotoSlide(s){
    //console.log(s);
    window.clearTimeout(timer)
    for (var dot of dots) {
        if ( dot.getAttribute('data-pos') == s){
            dot.className="dot current";    
        } else {
            dot.className="dot";
        }
    }
    curSlide = s;
    carousel.style.setProperty('--current-slide', curSlide);
    timer = window.setTimeout(autoslide, interval);
}

function nextSlide(dir){
    let x = curSlide + dir;
    if (x < 0) { x = numSlides-1; }
    else if (x >= numSlides ){
        x = 0;
    }
    gotoSlide(x)
}

function autoslide(){
    //console.log('autoslide')
    nextSlide(1)
}

for (var dot of dots) {
    dot.addEventListener("click", function(){
        gotoSlide(this.getAttribute('data-pos'))});
}

btnNext.addEventListener('click', () => nextSlide(1));
btnPrev.addEventListener('click', () => nextSlide(-1));

timer = window.setTimeout(autoslide, interval);