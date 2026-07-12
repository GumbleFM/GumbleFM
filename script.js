const radio = document.querySelector("audio");
const vinyl = document.getElementById("vinyl");

const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");

radio.addEventListener("play", () => {
    vinyl.classList.add("playing");
});

radio.addEventListener("pause", () => {
    vinyl.classList.remove("playing");
});

async function updateSong() {

    try {

        const response = await fetch("https://uk3freenew.listen2myradio.com:20795/currentsong?sid=1");

        const text = await response.text();

        if(text.trim()!=""){

            songTitle.innerHTML="🎵 " + text;
            songArtist.innerHTML="🔴 Em direto";

        }

    }

    catch{

        songTitle.innerHTML="GumbleFM";
        songArtist.innerHTML="🔴 Em direto";

    }

}

updateSong();

setInterval(updateSong,5000);

const playBtn = document.getElementById("playBtn");

if (playBtn) {

   playBtn.addEventListener("click", async () => {

    console.log("Clique");

    try {

        await radio.play();
        console.log("A tocar");

    } catch (err) {

        console.error(err);

    }

});

    radio.addEventListener("play", () => {
        playBtn.textContent = "⏸ Pausar";
    });

    radio.addEventListener("pause", () => {
        playBtn.textContent = "▶ Ouvir Agora";
    });

}
