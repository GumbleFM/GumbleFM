const radio = document.getElementById("radio");
const playBtn = document.getElementById("playBtn");
const volume = document.getElementById("volume");

radio.volume = 1;

playBtn.addEventListener("click", async () => {

    if (radio.paused) {

        try {
            await radio.play();
            playBtn.textContent = "⏸ Pausar";
        } catch (e) {
            alert("Não foi possível iniciar a rádio.");
        }

    } else {

        radio.pause();
        playBtn.textContent = "▶ Ouvir Agora";

    }

});

volume.addEventListener("input", () => {
    radio.volume = volume.value;
});

radio.addEventListener("pause", () => {
    playBtn.textContent = "▶ Ouvir Agora";
});

radio.addEventListener("play", () => {
    playBtn.textContent = "⏸ Pausar";
});
