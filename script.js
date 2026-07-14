const radio = document.getElementById("radio");
const playBtn = document.getElementById("playBtn");
const volume = document.getElementById("volume");

radio.volume = 1;

let reconnecting = false;

async function startRadio() {
    try {
        await radio.play();
        playBtn.innerHTML = "⏸ Pausar";
    } catch (err) {
        console.log("Autoplay bloqueado ou stream indisponível.", err);
    }
}

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

radio.addEventListener("playing", () => {
    reconnecting = false;
    playBtn.innerHTML = "⏸ Pausar";
});

radio.addEventListener("pause", () => {
    if (!reconnecting)
        playBtn.innerHTML = "▶ Ouvir Agora";
});

radio.addEventListener("error", reconnect);
radio.addEventListener("stalled", reconnect);
radio.addEventListener("waiting", reconnect);

function reconnect() {

    if (reconnecting) return;

    reconnecting = true;

    console.log("A tentar voltar a ligar ao stream...");

    setTimeout(async () => {

        try {

            radio.load();
            await radio.play();

            reconnecting = false;

        } catch (e) {

            reconnecting = false;

        }

    }, 3000);

}

window.addEventListener("load", () => {
    setTimeout(startRadio, 500);
});
