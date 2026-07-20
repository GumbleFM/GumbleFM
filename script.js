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

document.querySelector(".vinyl").classList.remove("spinning");        

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

    document.querySelector(".vinyl").classList.add("spinning");
    
});

const shareBtn = document.getElementById("shareBtn");

shareBtn.addEventListener("click", async () => {

    const url = "https://gumblefm.github.io/GumbleFM/";

    // Só usar a partilha em dispositivos móveis
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile && navigator.share) {

        try {

            await navigator.share({
                title: "GumbleFM",
                text: "🎧 Ouve a GumbleFM!",
                url: url
            });

            return;

        } catch(e) {}

    }

    try {

        await navigator.clipboard.writeText(url);
        alert("✅ Link copiado!");

    } catch {

        const input = document.createElement("input");
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);

        alert("✅ Link copiado!");

    }

});

const supabase = window.supabase.createClient(

'https://ojoeyvevtphcswnmfoyq.supabase.co',

'sb_publishable_0NKGnNx-l4L_DArnEy9QPQ_SRzZzd8B'

);
