function changeImage1(){
    if(document.getElementsByClassName('image-1').src = './resources/HTML.JPG'){
        document.getElementsByClassName('image-1').src = './resources/HTML-mouseover.JPG'
        console.log('check')
    }
}

document.getElementsByClassName('image-1').onclick = changeImage1()