const radio = document.getElementById("radio");
const playButton = document.getElementById("playButton");
const volume = document.getElementById("volume");

const song = document.getElementById("song");
const listeners = document.getElementById("listeners");

const STATS =
"https://sapircast.caster.fm:17323/publicstats.json";

playButton.onclick = () => {

    if (radio.paused) {

        radio.play();

        playButton.innerHTML = "❚❚";

    } else {

        radio.pause();

        playButton.innerHTML = "▶";

    }

};

radio.addEventListener("play", () => {

    playButton.innerHTML = "❚❚";

});

radio.addEventListener("pause", () => {

    playButton.innerHTML = "▶";

});

volume.addEventListener("input", () => {

    radio.volume = volume.value / 100;

});

async function updateRadio(){

    try{

        const response = await fetch(STATS);

        const json = await response.json();

        const info = json[1].source["/OV5rn"];

        song.innerHTML = info.metadata.x_icy_title;

        listeners.innerHTML =
        info.listeners + " ouvintes online";

    }

    catch(e){

        song.innerHTML="GumbleFM";

        listeners.innerHTML="Emissão Online";

    }

}

updateRadio();

setInterval(updateRadio,10000);
