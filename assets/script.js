let fillbar = document.querySelector(".fill");
let audios = [
  "/music/Audio_one.mp3",
  "/music/Audio_two.mp3",
  "/music/Audio_three.mp3",
];
let covers = ["cover1", "cover2", "cover3"];
let currentTime = document.querySelector(".time");

let audio = new Audio();
let currentSong = 0;

window.onload = playSong;

function playSong() {
  audio.src = audios[currentSong];
  //audio.play();
}

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    let playBtn = document.querySelector(".play-pause");
    playBtn.innerHTML = '<i class = "fa fa-pause"></i>';
    playBtn.style.paddingLeft = "30px";
  } else {
    audio.pause();
    playBtn = document.querySelector(".play-pause");
    playBtn.innerHTML = '<i class = "fa fa-play"></i>';
    playBtn.style.paddingLeft = "33px";
  }
}

audio.addEventListener("timeupdate", function () {
  let position = audio.currentTime / audio.duration;
  fillbar.style.width = position * 100 + "%";
});
