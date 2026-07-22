alert("SCRIPT NOVO");

const radio = document.getElementById("radio");
const playBtn = document.getElementById("playBtn");

console.log(playBtn);
console.log(radio);

const volume = document.getElementById("volume");

radio.volume = 1;

playBtn.addEventListener("click", async () => {

    if (radio.paused) {
