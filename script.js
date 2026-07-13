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

async function updateSong() {

    try {

        const response = await fetch("https://uk3freenew.listen2myradio.com:20795/currentsong?sid=1");

        const text = await response.text();

        if (text.trim() !== "") {

            songTitle.textContent = "🎵 " + text;
            songArtist.textContent = "🔴 Em direto";

        }

    } catch {

        songTitle.textContent = "GumbleFM";
        songArtist.textContent = "🔴 Em direto";

    }

}

updateSong();

setInterval(updateSong, 5000);
