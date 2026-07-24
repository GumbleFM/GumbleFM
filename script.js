const radio = document.getElementById("radio");

radio.load();

console.log("readyState:", radio.readyState, "networkState:", radio.networkState);
const playBtn = document.getElementById("playBtn");

console.log(playBtn);
console.log(radio);

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

let supabase = null;

if (window.supabase) {
    supabase = window.supabase.createClient(
        'https://ojoeyvevtphcswnmfoyq.supabase.co',
        'sb_publishable_0NKGnNx-l4L_DArnEy9QPQ_SRzZzd8B'
    );
}

function openCommentForm(){

alert("A função abriu!");

document.getElementById("commentModal").style.display="flex";

}

function closeCommentForm(){
document.getElementById("commentModal").style.display="none";
}

async function sendComment(){

const name=document.getElementById("commentName").value.trim();
const message=document.getElementById("commentMessage").value.trim();

if(!name || !message){
alert("Preenche o nome e o comentário.");
return;
}

const {error}=await supabase
.from("comments")
.insert([{
name:name,
message:message
}]);

if(error){

alert("Erro ao enviar o comentário.");
console.error(error);
return;

}

alert("Comentário enviado com sucesso! Será publicado após aprovação.");

document.getElementById("commentName").value="";
document.getElementById("commentMessage").value="";

alert("Comentário enviado com sucesso! Será publicado após aprovação.");

document.getElementById("commentName").value="";
document.getElementById("commentMessage").value="";

closeCommentForm();

}

window.openCommentForm = openCommentForm;
window.closeCommentForm = closeCommentForm;
window.sendComment = sendComment;
