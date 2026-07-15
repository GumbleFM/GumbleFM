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

const shareBtn = document.getElementById("shareBtn");

if (shareBtn) {

    shareBtn.addEventListener("click", async () => {

        if (navigator.share) {

            try {

                await navigator.share({
                    title: "GumbleFM",
                    text: "🎧 Ouve a GumbleFM!",
                    url: "https://gumblefm.github.io/GumbleFM/"
                });

            } catch (e) {}

        } else {

            await navigator.clipboard.writeText("https://gumblefm.github.io/GumbleFM/");
            alert("Link copiado para a área de transferência!");

        }

    });

}
