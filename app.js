var images = document.querySelectorAll('.image img');
var close = document.querySelector('.close');
var arrowLeft = document.querySelector('.left');
var arrowRight = document.querySelector('.right');
var gallery = document.querySelector('.gallery');
var galleryimg = document.querySelector('.gallery_inner img');

var currentindex = 0;
function showImage() {
    if (currentindex==0){
        arrowLeft.classList.add('hide')
    }else {
        arrowLeft.classList.remove('hide')
    }
    if(currentindex ==images.length-1){
        arrowRight.classList.add('hide')
    }else{
        arrowRight.classList.remove('hide')
    }

    // dislay images
    galleryimg.src= images[currentindex].src;
    gallery.classList.add('show')
}

images.forEach((item, index)=>{
    item.addEventListener('click', function(){
        currentindex = index  
        showImage();  

    })
    
});
 
close.addEventListener('click', function(){
    gallery.classList.remove('show')

})
document.addEventListener('keydown', function(e){
    if(e.keyCode == 27){
        gallery.classList.remove('show')
    }
    
})
arrowLeft.addEventListener('click', function(){
    if (currentindex > 0){
        currentindex--
    }
    showImage();
})
arrowRight.addEventListener('click', function(){
        currentindex++
    showImage();
})