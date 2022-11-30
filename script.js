const imageOne = document.querySelector(".image-1")
const imageTwo = document.querySelector(".image-2")
const imageThree = document.querySelector(".image-3")
function changeImage1(){
    if(imageOne.src = './resources/HTML.JPG'){
        imageOne.src = './resources/HTML-mouseover.JPG'
    }
}
function changeImage2(){
    if(imageTwo.src = './resources/css.JPG'){
        imageTwo.src = './resources/CSS-mouseover.JPG'
    }
}

function resetImage1 () {
     if (imageOne.src = './resources/HTML-mouseover.JPG') {
        imageOne.src = './resources/HTML.JPG'
    }

}
function resetImage2 () {
    if (imageTwo.src = './resources/CSS-mouseover.JPG') {
        imageTwo.src = './resources/css.JPG'
   }

}


imageOne.onmouseover = changeImage1
imageOne.onmouseout = resetImage1
imageTwo.onmouseover = changeImage2
imageTwo.onmouseout = resetImage2

