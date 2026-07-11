const radio = document.querySelector("audio");
const vinyl = document.getElementById("vinyl");

radio.addEventListener("play", () => {
    vinyl.classList.add("playing");
});

radio.addEventListener("pause", () => {
    vinyl.classList.remove("playing");
});

radio.addEventListener("ended", () => {
    vinyl.classList.remove("playing");
});
