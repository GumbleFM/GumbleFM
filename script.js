const radio = document.getElementById("radio");
const playBtn = document.getElementById("playBtn");
const volume = document.getElementById("volume");

const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");

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
