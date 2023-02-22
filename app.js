// Making audios
let btnClickAudio = new Audio('./audios/btnClickAudio.mp3'),
bgAudio = new Audio('./audios/bgAudio.mp3');

// Targeting DOM Elements
let playBtn = document.querySelector("#playBtn"),
playAndMuteBtn = document.querySelector("#play-mute"),
popupCover = document.querySelector(".popup-cover"),
welcomePopup = document.querySelector("#welcome-popup")
namePopup = document.querySelector("#name-popup"),
addNameBtn = document.querySelector("#addNameBtn"),
playerNameInput = document.querySelector("#player-name-input"),
greetingPlayer = document.querySelector("#greetingPlayer"),
animatedGameHeadingCover = document.querySelector(".animated-game-name-cover"),
levels = document.querySelectorAll(".levels button");


// Event Listeners
playBtn.addEventListener("click", () => {
    btnClickAudio.currentTime = 0;
    btnClickAudio.play();

    // Making Welcome Popup Hidden and Showing Name Popup
    welcomePopup.classList.add("popup-hidden");
    namePopup.classList.remove("popup-hidden");

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
        bgAudio.volume = 0.6;
    }
});

addNameBtn.addEventListener("click", () => {
    if(playerNameInput.value !== ""){
        btnClickAudio.play();
        greetingPlayer.innerText = `Greetings Captain ${playerNameInput.value}`;
        namePopup.classList.add("popup-hidden");
        popupCover.classList.add("popup-cover-hidden");

        setTimeout(() => {
            popupCover.classList.add("popup-cover-none");
            animatedGameHeadingCover.style.display = "flex";
            animatedGameHeadingCover.style.flexDirection = "column";
            animatedGameHeadingCover.children[0].classList.add("animated-game-name-heading");
            animatedGameHeadingCover.children[1].classList.add("animated-game-guideline");
        }, 500);

    } else {
        playerNameInput.style.borderColor = "red";
    }
});

levels.forEach(levelBtn => {
    levelBtn.addEventListener("click", () => {
        let previousSelectedLvl = document.querySelector(".selectedlvl");
        previousSelectedLvl ? previousSelectedLvl.classList.remove("selectedlvl") : "";
        levelBtn.classList.add("selectedlvl");
        let disabledLevels = document.querySelectorAll(".levels button:not(.selectedlvl)");
        disabledLevels.forEach(disabledLevel => {
            disabledLevel.setAttribute("disabled", "disabled");
        });
        animatedGameHeadingCover.style.display = "none";
        let currentSelectedlevel = document.querySelector(".selectedlvl").innerText;
        let currentSelectedlevelTime = +(currentSelectedlevel.split("").splice(0, currentSelectedlevel.length - 1).join(""));


    });
});