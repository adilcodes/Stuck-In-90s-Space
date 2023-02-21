// Making audios
let btnClickAudio = new Audio('./audios/btnClickAudio.mp3'),
bgAudio = new Audio('./audios/bgAudio.mp3');

// Targeting DOM Elements
let playBtn = document.querySelector("#playBtn"),
playAndMuteBtn = document.querySelector("#play-mute"),
popupCover = document.querySelector(".popup-cover"),
popup = document.querySelector(".popup");


// Event Listeners
playBtn.addEventListener("click", () => {
    btnClickAudio.currentTime = 0;
    btnClickAudio.play();

    // Making Popup Hidden
    popupCover.classList.add("popup-cover-hidden");
    popup.classList.add("popup-hidden");

    setTimeout(() => {
        popupCover.classList.add("popup-cover-none");
    }, 500);

    setTimeout(() => {
        bgAudio.volume = 0.6;
        bgAudio.loop = true;
        bgAudio.play();
    }, 900);
});

playAndMuteBtn.addEventListener("click", () => {
    let playAndMuteBtnIcon = document.querySelector("#play-mute i");
    if(playAndMuteBtnIcon.classList.contains("bi-volume-up-fill")){
        playAndMuteBtnIcon.classList.remove("bi-volume-up-fill");
        playAndMuteBtnIcon.classList.add("bi-volume-mute-fill");
        bgAudio.volume = 0;
    } else {
        playAndMuteBtnIcon.classList.add("bi-volume-up-fill");
        playAndMuteBtnIcon.classList.remove("bi-volume-mute-fill");
        bgAudio.volume = 1;
    }
});