let data = [];
let audioPlayer = null;
let currentAudio = null;

fetch("data.json")
  .then(res => res.json())
  .then(json => {
    data = json.instruments;
    renderMenu(data);
  });

function renderMenu(items) {
  const menu = document.getElementById("menu");
  menu.innerHTML = "";

  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.title;

    li.onclick = () => {
      loadContent(item);
      document
        .querySelectorAll("#menu li")
        .forEach(el => el.classList.remove("active"));
      li.classList.add("active");
    };

    menu.appendChild(li);
  });
}

function loadContent(item) {
  document.getElementById("title").textContent = item.title;
  document.getElementById("description").textContent = item.description;
  document.getElementById("image").src = item.image;
  currentAudio = item.audio;
}

document.getElementById("playBtn").onclick = () => {
  if (!currentAudio) {
    alert("Select an instrument first!");
    return;
  }

  if (audioPlayer) audioPlayer.pause();
  audioPlayer = new Audio(currentAudio);
  audioPlayer.play();
};

document.getElementById("stopBtn").onclick = () => {
  if (audioPlayer) {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
  }
};

function applyFilters() {
  const search = document.getElementById("search").value.toLowerCase();
  const filter = document.getElementById("filter").value;

  const filtered = data.filter(item =>
    (filter === "all" || item.category === filter) &&
    item.title.toLowerCase().includes(search)
  );

  renderMenu(filtered);
}

document.getElementById("search").addEventListener("input", applyFilters);
document.getElementById("filter").addEventListener("change", applyFilters);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

let deferredPrompt;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.hidden = false;
});

installBtn.addEventListener("click", async () => {
  if (!deferredPrompt) return;

  deferredPrompt.prompt();
  await deferredPrompt.userChoice;

  deferredPrompt = null;
  installBtn.hidden = true;
});
