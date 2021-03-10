let fillbar = document.querySelector(".fill");
let audios = [
  "/music/Audio_one.mp3",
  "/music/Audio_two.mp3",
  "/music/Audio_three.mp3",
];
let covers = ["/music/cover1.jpg", "/music/cover2.jpg", "/music/cover3.jpg"];
let currentTime = document.querySelector(".time");

let audio = new Audio();
let currentSong = 0;

window.onload = playSong;

function playSong() {
  audio.src = audios[currentSong];
  audio.play();
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

  convertTime(Math.round(audio.currentTime));
});

function convertTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;

  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  currentTime.textContent = min + ":" + sec;

  totalTime(Math.round(audio.duration));
}

function totalTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;

  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  currentTime.textContent += "  /  " + min + ":" + sec;
}

function nextAudio() {
  currentSong++;
  if (currentSong > audios.length) {
    currentSong = 0;
  }
  playSong();
  playBtn = document.querySelector(".play-pause");
  playBtn.innerHTML = '<i class = "fa fa-pause"></i>';
  playBtn.style.paddingLeft = "30px";

  $(".img img").attr("src", covers[currentSong]);
}

function prevAudio() {
  currentSong--;
  if (currentSong < 0) {
    currentSong = 2;
  }
  playSong();
  playBtn = document.querySelector(".play-pause");
  playBtn.innerHTML = '<i class = "fa fa-pause"></i>';
  playBtn.style.paddingLeft = "30px";

  $(".img img").attr("src", covers[currentSong]);
}
