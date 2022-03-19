function toggle(){
    var trailer= document.querySelector(".trailer")
    var video= document.querySelector("video")
    trailer.classList.toggle("active");
    video.pause();
    video.currentTime = 0;
}
function toggleSec(id){
    var blur = document.getElementById('blur')
    var popup = document.getElementById(id)
    blur.classList.toggle("active");
    popup.classList.toggle("active");
}