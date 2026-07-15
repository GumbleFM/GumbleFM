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

        const url = "https://gumblefm.github.io/GumbleFM/";

        if (navigator.share) {

            try {
                await navigator.share({
                    title: "GumbleFM",
                    text: "🎧 Ouve a GumbleFM!",
                    url: url
                });
                return;
            } catch (e) {}

        }

        const input = document.createElement("input");
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);

        alert("✅ Link copiado!\n\nAgora é só colar onde quiseres.");

    });

}
