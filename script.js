const radio = document.getElementById("radio");
const vinyl = document.getElementById("vinyl");

const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");

const playBtn = document.getElementById("playBtn");
const volume = document.getElementById("volume");

if (playBtn) {
    playBtn.onclick = async () => {
        if (radio.paused) {
            await radio.play();
        } else {
            radio.pause();
        }
    };
}

if (volume) {
    volume.oninput = () => {
        radio.volume = volume.value;
    };
}

radio.addEventListener("play", () => {
    if (vinyl) vinyl.classList.add("playing");
    if (playBtn) playBtn.textContent = "⏸ Pausar";
});

radio.addEventListener("pause", () => {
    if (vinyl) vinyl.classList.remove("playing");
    if (playBtn) playBtn.textContent = "▶ Ouvir Agora";
});

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
