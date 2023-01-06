const modal = document.getElementById("myModal");
const btnModal = document.getElementById("btnModal")
const span = document.getElementsByClassName("close")[0];

btnModal.onclick = () => {
    modal.style.display = "block";
}

span.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (e) => {
    if(e.target == modal){
        modal.style.display = "none";
    }
}

let images = document.getElementsByClassName("thumbs");
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