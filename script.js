const radio = document.getElementById("radio");
const playBtn = document.getElementById("playBtn");
const volume = document.getElementById("volume");

playBtn.onclick = function () {

    if (radio.paused) {

        radio.play();
        playBtn.innerHTML = "⏸ Pausar";

    } else {

        radio.pause();
        playBtn.innerHTML = "▶ Ouvir Agora";

    }

};

volume.oninput = function () {
    radio.volume = this.value;
};
