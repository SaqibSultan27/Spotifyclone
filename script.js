console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('music/tere.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let music = [
    { songName: "Tere Hawale", filePath: "music/tere.mp3", coverPath: "covers/1.jpg" },
    { songName: "Bapu Tere karke", filePath: "music/Bapu tere.mp3", coverPath: "covers/2.jpg" },
    { songName: "Daku", filePath: "music/Daku.mp3", coverPath: "covers/3.jpg" },
    { songName: "Kahani Suno", filePath: "music/kahani.mp3", coverPath: "covers/4.jpg" },
    { songName: "Tere Vaaste", filePath: "music/Tere Vaaste.mp3", coverPath: "covers/5.jpg" },
    { songName: "Tu hai", filePath: "music/Tu Hai To.mp3", coverPath: "covers/6.jpg" },
    { songName: "Kya Loge Tum", filePath: "music/kya loge.mp3", coverPath: "covers/7.jpg" },
    { songName: "Kesariya", filePath: "music/Kesariya.mp3", coverPath: "covers/8.jpg" },
    { songName: "Tu hai to", filePath: "music/Tu Hai To.mp3.mp3", coverPath: "covers/9.jpg" },
    { songName: "Raata", filePath: "music/Raata.mp3", coverPath: "covers/10.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = music[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = music[i].songName;
})


// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `music/${songIndex + 1}.mp3`;
        masterSongName.innerText = music[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `music/${songIndex + 1}.mp3`;
    masterSongName.innerText = music[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `music/${songIndex + 1}.mp3`;
    masterSongName.innerText = music[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})