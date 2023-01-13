// IDENTIFIED THE ELEMENTS
const modal = document.getElementById("myModal");
const btnModal = document.getElementById("btnModal")
const span = document.getElementsByClassName("close")[0];

// ADD ONCLICK EVENT ON MODAL BUTTON
btnModal.onclick = () => {
    modal.style.display = "block";
}

// ADD ONCLICK EVENT ON "X" OF THE MODAL
span.onclick = () => {
    modal.style.display = "none";
}

// ADD EVENT THAT WHERE YOU CLICK, THE MODAL CLOSE
window.onclick = (e) => {
    if(e.target == modal){
        modal.style.display = "none";
    }
}

// INITIALIZE A VARIABLE WITH THE IMAGE ELEMENTS
let images = document.getElementsByClassName("thumbs");
let size = images.length;
let slideAtual = 0;
let tmpSlider;

// IDENTIFIED THE NEXT AND PREVIOUS BUTTONS
const btnRight = document.getElementById("right");
const btnLeft = document.getElementById("left");

// FUNCTION TO SWITCH IMAGES WHEN THE MOUSE HOVERS
function autoChange(){
    images[slideAtual].style.display = "none";
    slideAtual++;
    if(slideAtual >= size){
        slideAtual = 0;
    }
    images[slideAtual].style.display = "block";
}

// START THE AUTOCHANGE FUNCTION ONE EVERY 2 SECONDS
function startSlide(){
    images[slideAtual].style.display = "block";
    tmpSlider = setInterval(autoChange, 2000);
}

// FUNCTION TO STOP THE AUTOCHANGE WHEN THE MOUSE LEAVE
function stop(){
    clearInterval(tmpSlider);
}

// GET THE POSITION OF IMAGE AND CHANGE TO THE PREVIOUS POSITION
function changeLeft(){
    images[slideAtual].style.display = "none";
    slideAtual--;
    // WHEN POSITION < SIZE, IT HAVE TO RESTART TO THE LAST POSITION
    if(slideAtual < 0){
        slideAtual = size - 1;
        images[slideAtual].style.display = "block";
    }
    images[slideAtual].style.display = "block";
}

// GET THE POSITION OF IMAGE AND CHANGE TO THE NEXT
function changeRight(){
    images[slideAtual].style.display = "none";
    slideAtual++;
    // WHEN POSITION >= SIZE, IT HAVE TO RESTART
    if(slideAtual >= size){
        slideAtual = 0;
        images[slideAtual].style.display = "block";
    }
    images[slideAtual].style.display = "block";
}


// EVENT LISTNERS
btnLeft.addEventListener("click", changeLeft)
btnRight.addEventListener("click", changeRight)