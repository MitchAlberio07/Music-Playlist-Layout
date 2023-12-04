let musicControl = document.getElementById("musicControl");
let song = document.getElementById("song");
let playBtn = document.getElementById("playBtn");
const time = document.querySelector('.time');
const fulltime = document.querySelector('.fulltime');

song.onloadedmetadata = function(){
    musicControl.max = song.duration;
    musicControl.value = song.currentTime;
}

function playPause() {
    if (playBtn.classList.contains("fa-pause")) {
        song.pause();
        playBtn.classList.remove("fa-pause");
        playBtn.classList.add("fa-play");
    } else {
        song.play();
        playBtn.classList.add("fa-pause");
        playBtn.classList.remove("fa-play");
    }
}    


if(song.play()){
    setInterval(()=>{
        musicControl.value = song.currentTime
    },500);
}

musicControl.onchange = function(){
    song.play();
    song.currentTime = musicControl.value;
    playBtn.classList.add("fa-pause");
    playBtn.classList.remove("fa-play");
}

