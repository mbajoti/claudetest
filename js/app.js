// Register the service worker so the app works offline once installed.
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch((err) => {
      console.error("Service worker registration failed:", err);
    });
  });
}

// Simple persisted counter to demonstrate local storage + offline state.
const countEl = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

let count = Number(localStorage.getItem("count")) || 0;
countEl.textContent = count;

function updateCount(delta) {
  count += delta;
  countEl.textContent = count;
  localStorage.setItem("count", String(count));
}

incrementBtn.addEventListener("click", () => updateCount(1));
decrementBtn.addEventListener("click", () => updateCount(-1));

// Online/offline indicator.
const statusEl = document.getElementById("status");

function updateOnlineStatus() {
  statusEl.hidden = navigator.onLine;
}

window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);
updateOnlineStatus();

// "Add to home screen" prompt (Android/Chrome only; Safari has no beforeinstallprompt).
const installCard = document.getElementById("install-card");
const installButton = document.getElementById("install-button");
let deferredInstallPrompt = null;

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installCard.hidden = false;
});

installButton.addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  installCard.hidden = true;
});

window.addEventListener("appinstalled", () => {
  installCard.hidden = true;
});
