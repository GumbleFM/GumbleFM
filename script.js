const radio = document.getElementById("radio");
const vinyl = document.querySelector(".vinyl");

const playBtn = document.getElementById("playBtn");
const volume = document.getElementById("volume");

if (playBtn) {
    playBtn.onclick = async () => {
        try {
            if (radio.paused) {
                await radio.play();
            } else {
                radio.pause();
            }
        } catch (e) {
            console.error(e);
        }
    };
}

if (volume) {
    volume.oninput = () => {
        radio.volume = volume.value;
    };
}

radio.addEventListener("play", () => {
    if (playBtn) playBtn.textContent = "⏸ Pausar";
});

radio.addEventListener("pause", () => {
    if (playBtn) playBtn.textContent = "▶ Ouvir Agora";
});

/* ---------- BOTÃO PLAY ---------- */

.controls{
display:flex;
align-items:center;
gap:25px;
margin-top:20px;
}

#playBtn{
min-width:220px;
height:64px;
border:none;
border-radius:50px;
background:#1DB954;
color:#fff;
font-size:18px;
font-weight:700;
cursor:pointer;
transition:.25s;
box-shadow:0 0 25px rgba(29,185,84,.35);
}

#playBtn:hover{
transform:translateY(-2px) scale(1.03);
box-shadow:0 0 40px rgba(29,185,84,.55);
}

#volume{
width:180px;
accent-color:#1DB954;
cursor:pointer;
}
