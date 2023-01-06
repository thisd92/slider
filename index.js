let images = document.querySelectorAll('img');
let size = images.length;
let slideAtual = 0;
let tmpSlider;

const btnRight = document.getElementById("right");
const btnLeft = document.getElementById("left");

function autoChange(){
    images[slideAtual].style.display = "none";
    slideAtual++;
    if(slideAtual >= size){
        slideAtual = 0;
    }
    images[slideAtual].style.display = "block";
}

function startSlide(){
    images[slideAtual].style.display = "block";
    tmpSlider = setInterval(autoChange, 2000);
}

function changeLeft(){
    images[slideAtual].style.display = "none";
    slideAtual--;
    if(slideAtual < 0){
        slideAtual = size - 1;
        images[slideAtual].style.display = "block";
    }
    images[slideAtual].style.display = "block";
}

function stop(){
    clearInterval(tmpSlider);
}

function changeRight(){
    images[slideAtual].style.display = "none";
    slideAtual++;
    if(slideAtual >= size){
        slideAtual = 0;
        images[slideAtual].style.display = "block";
    }
    images[slideAtual].style.display = "block";
}

btnLeft.addEventListener("click", changeLeft)

btnRight.addEventListener("click", changeRight)