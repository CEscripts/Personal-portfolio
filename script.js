const imageTwo = document.querySelector(".image-2")
const imageThree = document.querySelector(".image-3")
const btnEl = document.querySelector(".joinBut")

function changeImage2() {
    if (imageTwo.src = './resources/css.JPG') {
        imageTwo.style.opacity = '0';
        setTimeout(() => {
            imageTwo.src = './resources/CSS-mouseover.JPG';
            imageTwo.style.opacity = '0.8';
        }, 300); // Delay the image source change for 300 milliseconds to allow the opacity transition to take effect
    }
}

function resetImage1() {
    if (imageOne.src = './resources/HTML-mouseover.JPG') {
        imageOne.src = './resources/HTML.JPG'
    }

}
function resetImage2() {
    if (imageTwo.src = './resources/CSS-mouseover.JPG') {
        imageTwo.src = './resources/css.JPG'
    }

}


imageTwo.onmouseover = changeImage2
imageTwo.onmouseout = resetImage2
const click = async () => {

}
btnEl.addEventListener('click', click);
console.log(fetch('./index3.html'))
