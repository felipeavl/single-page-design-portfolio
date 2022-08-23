const next = document.querySelector(".carroussel-nav-button-next");

let index = 0;
let imageSize = document.querySelector(".carroussel-item").offsetWidth;

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        next.click();
    }
    if (event.key === "ArrowLeft") {
        previous.click();
    }
} );

next.addEventListener("click", function () {
    if(index == 2) {
        return;
    }
    index++;
    document.querySelectorAll(".carroussel-item").forEach(function (item) {
        item.style.transform = `translateX(calc(-${imageSize}px * ${index}))`;        
    }
    );
    
});

const previous = document.querySelector(".carroussel-nav-button-previous");
previous.addEventListener("click", function () {
    if(index == -2) {
        return;
    }
    index--;
    document.querySelectorAll(".carroussel-item").forEach(function (item) {
        item.style.transform = `translateX(calc(-${imageSize}px * ${index}))`;        
    }
    );
    
});