const radio = document.getElementById("radio");
const playBtn = document.getElementById("playBtn");
const volume = document.getElementById("volume");

playBtn.onclick = async function () {

    if (radio.paused) {

        try {
            await radio.play();
            playBtn.innerHTML = "⏸ Pausar";
        } catch (err) {
            alert("Não foi possível iniciar a rádio neste dispositivo.");
            console.error(err);
        }

    } else {

        radio.pause();
        playBtn.innerHTML = "▶ Ouvir Agora";

    }

};

volume.oninput = function () {
    radio.volume = this.value;
};

