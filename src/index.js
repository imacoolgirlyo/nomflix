const navigation = document.querySelector('nav'),
    SCROLLED = "scrolled",
    video = document.querySelector('.js-video'),
    videoVolumeBtn = document.querySelector('.js-volume'),
    videoPlayBtn = document.querySelector('.js-play');



const navigationScroll = () => {
    if(window.scrollY > 400) {
        navigation.classList.add(SCROLLED);
    }else {
        navigation.classList.remove(SCROLLED);
    }
    
}

window.addEventListener("scroll", navigationScroll);

video.autoplay = true;
video.muted = true;

const videoPlayControl = () =>{
    if(video.paused){
        video.play();
        videoPlayBtn.innerHTML = "일시정지"
}
    else{
        video.pause();
        videoPlayBtn.innerHTML = "재생"
    }
}

const videoVolumeControl = () => {
    console.log("volume on")
    if(video.muted){
        video.muted = false;
    }else {
        video.muted = true;
    }
}


videoPlayBtn.addEventListener('click', videoPlayControl);
videoVolumeBtn.addEventListener('click', videoVolumeControl);
// 
