const radio = document.getElementById("radio");
const vinyl = document.querySelector(".vinyl");

const playBtn = document.getElementById("playBtn");
const volume = document.getElementById("volume");

if (playBtn) {
    playBtn.onclick = async () => {
        try {
            if (radio.paused) {
                await radio.play();
            } else {
                radio.pause();
            }
        } catch (e) {
            console.error(e);
        }
    };
}

if (volume) {
    volume.oninput = () => {
        radio.volume = volume.value;
    };
}

radio.addEventListener("play", () => {
    if (playBtn) playBtn.textContent = "⏸ Pausar";
});

radio.addEventListener("pause", () => {
    if (playBtn) playBtn.textContent = "▶ Ouvir Agora";
});
